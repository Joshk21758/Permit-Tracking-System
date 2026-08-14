"use server";

import { authUser } from "@/lib/authUser";
import { getCollection } from "@/lib/db";
import { UserApplicationSchema } from "@/lib/schema";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//User application server action
export async function createApplication(state, formData) {
  //Simulate async delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  //check if user is authenticated
  const user = await authUser();
  if (!user) {
    redirect("/user/login");
  }

  const validatedFields = UserApplicationSchema.safeParse({
    appName: formData.get("appName"),
    nationalId: formData.get("nationalId"),
    address: formData.get("address"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    applicationType: formData.get("applicationType"),
    applicationDescription: formData.get("applicationDescription"),
  });

  //check if validation is success
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  //Save post instance to Db
  const postCollection = await getCollection("applications");
  let post;
  try {
    post = await postCollection.insertOne({
      appName: validatedFields.data.appName,
      nationalId: validatedFields.data.nationalId,
      address: validatedFields.data.address,
      phone: validatedFields.data.phone,
      email: validatedFields.data.email,
      applicationType: validatedFields.data.applicationType,
      applicationDescription: validatedFields.data.applicationDescription,
      userId: ObjectId.createFromHexString(user.userId),
    });
  } catch (error) {
    console.log(error);
  }

  // return a result for the client to consume (e.g. show a toast)
  return {
    success: true,
    message:
      "Application submitted successfully. A confirmation email will be sent shortly, Thank You.",
    appointmentId: post?.insertedId?.toHexString?.() || null,
  };
}

//Update user application server action
export async function updateApplication(state, formData) {
  //Simulate async delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  //check if user is authenticated
  const user = await authUser();
  if (!user) {
    redirect("/user/login");
  }

  const postId = formData.get("postId");

  if (!postId || !ObjectId.isValid(postId)) {
    return {
      message: "Invalid application ID.",
    };
  }

  const validatedFields = UserApplicationSchema.safeParse({
    appName: formData.get("appName"),
    nationalId: formData.get("nationalId"),
    address: formData.get("address"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    applicationType: formData.get("applicationType"),
    applicationDescription: formData.get("applicationDescription"),
  });

  //check if fields is success
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  //find the post
  const postCollection = await getCollection("applications");
  const post = await postCollection.findOne({
    _id: ObjectId.createFromHexString(postId),
  });

  //update post
  (await postCollection.findOneAndUpdate(
    { _id: post._id },
    {
      $set: {
        appName: validatedFields.data.appName,
        nationalId: validatedFields.data.nationalId,
        address: validatedFields.data.address,
        phone: validatedFields.data.phone,
        email: validatedFields.data.email,
        applicationType: validatedFields.data.applicationType,
        applicationDescription: validatedFields.data.applicationDescription,
      },
    },
  ),
    // redirect
    redirect("/user/dashboard"));
}

//Delete user application server action
export async function deleteApplication(formData) {
  //Simulate async delay
  await new Promise((resolve) => setTimeout(resolve, 3000));

  //check if user is authenticated
  const user = await authUser();
  if (!user) {
    redirect("/user/login");
  }

  const postId = formData.get("postId");

  if (!postId || !ObjectId.isValid(postId)) {
    console.error("Invalid or missing postId for deletion");
    return;
  }

  //find post to delete
  const postCollection = await getCollection("applications");
  const post = await postCollection.findOne({
    _id: ObjectId.createFromHexString(formData.get("postId")),
  });

  //Delete the post
  await postCollection.findOneAndDelete({ _id: post._id });

  //revalidate path
  revalidatePath("/user/applications");
}
