"use server";

import { getCollection } from "@/lib/db";
import { NewPasswordSchema } from "@/lib/schema";
import { redirect } from "next/navigation";

//New password server action
export async function newPasswordAction(state, formData) {
  // Validate passwords
  const newPass = formData.get("newPass");
  const confirmPassword = formData.get("confirmPassword");

  const validated = NewPasswordSchema.safeParse({
    newPass,
    confirmPassword,
  });

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors };
  }

  // Identify the user
  const email = formData.get("email");
  if (!email) {
    return { message: "Missing email address for password reset." };
  }

  //check email and user collection is valid
  const userCollection = await getCollection("user");
  if (!userCollection) {
    return { message: "User collection not available." };
  }

  const user = await userCollection.findOne({ email: String(email).trim() });
  if (!user) {
    return { message: "No user found with that email." };
  }

  // Hash new password and update
  try {
    const hashed = await bcrypt.hash(validated.data.newPass, 10);
    await userCollection.updateOne(
      { _id: user._id },
      { $set: { password: hashed } },
    );
  } catch (err) {
    console.error("Failed to update password:", err);
    return { message: "Failed to update password." };
  }

  // redirect
  redirect("/user/auth");
}

//Reset code server action
export async function resetCodeAction(state, formData) {
  const email = formData.get("email");

  if (!email) {
    return { message: "Email is required." };
  }

  // Generate a 6-digit code
  const resetCode = Math.floor(100000 + Math.random() * 900000).toString();

  // TODO: Save the reset code to your database (e.g., in a 'resetTokens' collection or the 'user' document)
  const resetTokenCollection = await getCollection("resetPasswordTokens");
  await resetTokenCollection.insertOne({
    email: String(email).trim(),
    resetCode,
    resetCodeExpires: Date.now() + 10 * 60 * 1000,
  });

  try {
    const { data, error } = await resend.emails.send({
      from: "MwansaKunda <noreply@mail.michelkunda.icuprojects.icu>", // Replace with your verified sender domain
      to: [email],
      subject: "Your Password Reset Code",
      html: `<p>Your password reset code is: <strong>${resetCode}</strong></p>`,
    });

    if (data) {
      // Redirect
      redirect("/forgot-password/code-input");
    }

    if (error) {
      console.error("Resend API Error:", error);
      return { message: "Failed to send reset email." };
    }

    return { success: true, message: "Reset email sent successfully!" };
  } catch (error) {
    console.error("Unexpected Error:", error);
    return { message: "An unexpected error occurred." };
  }
}

//Verify reset code server action
export async function verifyResetCodeAction(state, formData) {
  const email = formData.get("email");
  const resetCode = formData.get("resetCode");

  if (!email || !resetCode) {
    return { message: "Email and reset code are required." };
  }

  //check email and reset code in database
  const resetTokenCollection = await getCollection("resetPasswordTokens");
  const user = await resetTokenCollection.findOne({
    email: String(email).trim(),
    resetCode: String(resetCode).trim(),
    resetCodeExpires: { $gt: Date.now() },
  });

  if (!user) {
    return { message: "Invalid or expired reset code." };
  }

  // redirect
  redirect("/forgot-password/new-password");
}
