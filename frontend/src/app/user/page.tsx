import { auth } from "@/@chatapp/configs/auth";
import { customTheme } from "@/@chatapp/configs/theme";
import UserPage from "@/modules/user/main/index.page";
import { Button, Flowbite } from "flowbite-react";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function UserMainPage() {
  const session = await auth();

  if (!session?.user) redirect("/auth/signin");

  return (
    <>
      <UserPage />
    </>
  );
}
