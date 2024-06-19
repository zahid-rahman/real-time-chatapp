import { auth } from "@/@chatapp/configs/auth";
import Logout from "@/modules/auth/signin/Logout";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Homepage() {
  const session = await auth();

  if (!session?.user) redirect("/auth/signin");

  return (
    <div>
      <h1>{session?.user?.name} </h1>
      <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        width={72}
        height={72}
        className="rounded-full"
      />

      <Logout />
    </div>
  );
}
