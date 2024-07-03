"use client";
import { doLogout } from "@/app/actions";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function AppNavbar() {
  const session = useSession();
  console.log(session);
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Chatify
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img={session?.data?.user?.image as string}
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{session?.data?.user?.name}</span>
            <span className="block truncate text-sm font-medium">
              {session?.data?.user?.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={doLogout}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
