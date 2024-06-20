import AppNavbar from "@/@chatapp/components/AppNavbar";
import { customTheme, themeColor } from "@/@chatapp/configs/theme";
import { Flowbite } from "flowbite-react";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <SessionProvider>
        <AppNavbar />
        <main
          style={{
            backgroundColor: themeColor.body,
            height: "100vh",
          }}
        >
          {children}
        </main>
      </SessionProvider>
    </Flowbite>
  );
}
