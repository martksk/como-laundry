import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    const contactInfo = {
        company: "บริษัท แม็กซ์โตะ จำกัด",
        address: "เลขที่ 39 ซอย ลาดพร้าว 80 แยก 22 แขวงวังทองหลาง",
        district: "เขตวังทองหลาง กรุงเทพมหานคร 10310",
        franchise: "สนใจแฟรนไชน์ : 098-4927888 / 086-6694644 / 063-7852424",
        email: "Email: maxto.como@gmail.com / como.thailand88@gmail.com",
        lineId: "Line ID: comolaundryplace",
    };

    const socialLinks = [
        { href: "https://www.facebook.com/Comolaundryplace", icon: <ImFacebook2 /> },
        { href: "https://www.tiktok.com/@comolaundry", icon: <AiFillTikTok /> },
        { href: "https://www.youtube.com/@comothailand", icon: <FaYoutube /> },
    ];

    return (
        <footer className="bg-gray-800 text-white p-8">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
                <div className="mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">ติดต่อเรา</h3>
                    <div className="text-sm">
                        <p>{contactInfo.company}</p>
                        <p>{contactInfo.address}</p>
                        <p>{contactInfo.district}</p>
                    </div>
                </div>
                <div className="font-semibold flex flex-col gap-y-5 ml-0 md:ml-10">
                    <h3 className="text-xl mb-2">Official Channel</h3>
                    <div className="flex text-3xl gap-x-5 mb-4">
                        {socialLinks.map((link, index) => (
                            <Link key={index} href={link.href}>
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                    <div className="text-sm">
                        <p>{contactInfo.franchise}</p>
                        <p>{contactInfo.email}</p>
                        <p>{contactInfo.lineId}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
