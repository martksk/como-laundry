import React from "react";
import Head from "next/head";

function Franchisepage() {
  const benefits = [
    "เครื่องจักรจากประเทศญี่ปุ่น เกรดอุตสาหกรรม ทันสมัย ตอบโจทย์ทุกความต้องการ มาตรฐานสากล",
    "รับประกันเครื่อง 3 ปี รับประกันเครื่องจักรตามเงื่อนไขของบริษัท ตลอดระยะเวลา 3 ปี",
    "ประเมินพื้นที่ฟรี",
    "ไม่เก็บ % ส่วนแบ่งรายได้จากเจ้าของร้าน",
    "Online Management System ช่องทางสแกนแลกรับเงินผ่านระบบ QR Payment เพื่อเพิ่มความสะดวกสบายของผู้ลงทุน และลูกค้า",
  ];
  return (
    <>
    <Head>
      <title>Franchise</title>
    </Head>
    <div className="w-full p-6 md:p-10 lg:p-14">
      <div className="flex flex-col justify-center items-center text-center space-y-6 md:space-y-8 lg:space-y-10">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
          ลูกค้าแฟรนไชส์
        </h1>
        <div className="mt-6 md:mt-8 lg:mt-10 w-full flex flex-col items-center">
          <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            ทำไมต้อง Como Laundry
          </h3>
          <ul className="list-disc pl-6 mt-4 md:mt-6 lg:mt-8 text-left space-y-2 md:space-y-3 lg:space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-base md:text-lg lg:text-xl">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Franchisepage;
