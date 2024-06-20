import { doSocialLogin } from "@/app/actions";
import { Button } from "flowbite-react";
import React from "react";

export default function SignInPage() {
  return (
    <div>
      <form action={doSocialLogin}>
        <Button type="submit" name="action" value="google" color="failure">sign in with google</Button>
      </form>
    </div>
  );
}
