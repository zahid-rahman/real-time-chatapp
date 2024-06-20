import React from "react";
import UserHeader from "./UserHeader";
import AppDivider from "@/@chatapp/components/AppDivider";
import ChatHeader from "./ChatHeader";

export default function UserPage() {
  return (
    <div style={{ padding: "10px 20px" }}>
      <div className="xl:grid xl:grid-cols-12 lg:grid lg:grid-cols-12 gap-4 hidden">
        <div className="col-span-2 col-span-2 h-[90vh] rounded-md d-none bg-white">
          <UserHeader />
          <AppDivider />
          {[1, 2, 3, 4].map((el) => (<ChatHeader key={el} />))}
        </div>
        <div className="col-span-10 col-span-10 border-2 border-dashed border-neutral-500 h-[90vh] rounded-md"></div>
      </div>

      <div className="sm:grid sm:grid-rows-12 md:grid md:grid-rows-12 xs:grid xs:grid-rows-12 gap-4 xl:hidden lg:hidden">
        <div className="row-span-2  border-2 border-dashed border-neutral-500 h-[15vh] rounded-md "></div>
        <div className="row-span-10  border-2 border-dashed border-neutral-500 h-[70vh] rounded-md "></div>
      </div>
    </div>
  );
}
