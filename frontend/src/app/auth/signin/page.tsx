import { auth } from "@/@chatapp/configs/auth";
import SignInPage from "@/modules/auth/signin/index.page";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();

  if (session?.user) redirect("/user");
  return (
    <>
      <SignInPage />
    </>
  );
}
