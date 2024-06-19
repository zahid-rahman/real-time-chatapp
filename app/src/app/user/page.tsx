import { auth } from "@/@chatapp/configs/auth";
import Logout from "@/modules/auth/signin/Logout";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function UserMainPage() {
  const session = await auth();

  if (!session?.user) redirect("/auth/signin");

  return <div></div>;
}
