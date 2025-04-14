'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/image/como-logo.svg";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`h-[160px] w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="h-full w-full flex justify-center items-center bg-white border-b-8 border-blue-900">
        <Image src={logo} alt="Como Logo" width={150} height={150} />
      </nav>
    </div>
  );
}
