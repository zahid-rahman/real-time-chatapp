import AppNavbar from "@/@chatapp/components/AppNavbar";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <AppNavbar />
      <main>{children}</main>
    </SessionProvider>
  );
}
