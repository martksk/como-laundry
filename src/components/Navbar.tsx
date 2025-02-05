import React from "react";
import Image from "next/image";
import logo from "@/assets/image/como-logo.svg";

export default function Navbar() {
  return (
    <nav className="h-full w-full flex justify-center items-center bg-white border-b-8 border-blue-900">
      <Image src={logo} alt="Como Logo" width={100} height={100} />
    </nav>
  );
}
