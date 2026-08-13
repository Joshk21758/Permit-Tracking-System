"use server";

import { getCollection } from "../lib/db";
import {
  AdminLoginFormSchema,
  AdminRegisterFormSchema,
  LoginFormSchema,
  RegisterFormSchema,
} from "../lib/schema";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { createSession } from "../lib/sessions";
import { cookies } from "next/headers";

// Register server actions
export async function register(state, formData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //Validate form data
  const validatedFields = RegisterFormSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  //check if validation is success
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  //Extract form data
  const { fullName, email, password } = validatedFields.data;

  //check if user collection exists
  const userCollection = await getCollection("users");
  if (!userCollection) {
    return {
      errors: {
        email: "User collection does not exist.",
      },
    };
  }

  //check if user already exists
  const existingUser = await userCollection.findOne({ email });
  if (existingUser) {
    return {
      errors: {
        email: "User with this email already exists.",
      },
    };
  }

  //Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  //save user to the database
  let savedUser;
  try {
    savedUser = await userCollection.insertOne({
      fullName,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    console.log("Failed to save user:", error);
  }

  //create a session
  await createSession(savedUser.insertedId);

  //redirect
  redirect("/user/dashboard");
}

// Login server action
export async function login(state, formData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //Validate form data
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  //check if validation is success
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  //Extract form data
  const { email, password } = validatedFields.data;

  // check if user collection exists
  const userCollection = await getCollection("users");
  if (!userCollection) {
    return {
      errors: {
        email: "User collection does not exist.",
      },
    };
  }

  // check if user exists
  const user = await userCollection.findOne({ email });
  if (!user) {
    return {
      errors: {
        email: "Invalid email or password.",
      },
    };
  }

  // compare passwords
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return {
      errors: {
        email: "Invalid email or password.",
      },
    };
  }

  // create a session
  await createSession(user._id);

  //redirect
  redirect("/user/dashboard");
}

// Logout server action
export async function logout(formData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //Clear the session cookie
  const cookieStore = await cookies();
  cookieStore.delete("session");

  //Redirect
  redirect("/");
}

export async function adminRegister(state, formData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //validate form data
  const validatedFields = AdminRegisterFormSchema.safeParse({
    name: formData.get("name"),
    role: formData.get("role"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  //check if validation is success
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  //Extract form data (include role)
  const { name, role, email, password } = validatedFields.data;

  //check if user collection exists
  const adminUserCollection = await getCollection("admin-user");
  if (!adminUserCollection) {
    return {
      errors: {
        email: "Admin User collection does not exist.",
      },
    };
  }

  //check if admin user already exists
  const existingAdminUser = await adminUserCollection.findOne({ email });
  if (existingAdminUser) {
    return {
      errors: {
        email: "Administrator User with this email already exists.",
      },
    };
  }

  //Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  //save user to the database
  let adminUser;
  try {
    adminUser = await adminUserCollection.insertOne({
      name,
      role,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    console.log("Failed to save Admin user:", error);
  }

  //create a session
  await createSession(adminUser.insertedId);

  //redirect
  redirect("/admin/dashboard");
}

//Admin Login server action
export async function adminLogin(state, formData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //Validate form data
  const validatedFields = AdminLoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  //check if validation is success
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  //Extract form data
  const { email, password } = validatedFields.data;

  // check if admin user collection exists
  const adminUserCollection = await getCollection("admin-user");
  if (!adminUserCollection) {
    return {
      errors: {
        email: "Admin User collection does not exist.",
      },
    };
  }

  // check if admin user exists
  const adminUser = await adminUserCollection.findOne({ email });
  if (!adminUser) {
    return {
      errors: {
        email: "Invalid email or password.",
      },
    };
  }

  // compare passwords
  const isPasswordMatch = await bcrypt.compare(password, adminUser.password);
  if (!isPasswordMatch) {
    return {
      errors: {
        email: "Invalid email or password.",
      },
    };
  }

  // create a session
  await createSession(adminUser._id);

  //redirect
  redirect("/admin/dashboard");
}
