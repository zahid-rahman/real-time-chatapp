"use server";

import { signIn, signOut } from "@/@chatapp/configs/auth";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action");
  await signIn(action as any, { redirectTo: "/user" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
