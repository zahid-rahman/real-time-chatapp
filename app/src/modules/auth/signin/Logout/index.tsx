import { doLogout } from "@/app/actions";
import { Button } from "flowbite-react";
import React from "react";

export default function Logout() {
  return (
    <form action={doLogout}>
      <Button type="submit" color="dark">
        Logout
      </Button>
    </form>
  );
}
