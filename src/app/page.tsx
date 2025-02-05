"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import como1 from "@/assets/image/como1.svg";
import como2 from "@/assets/image/como2.svg";
import como3 from "@/assets/image/como3.svg";
import como4 from "@/assets/image/como4.svg";
import como5 from "@/assets/image/como5.svg";
import Image from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import machince from "../../public/washer.png";
import { TableComponent } from "@/components/Table";
import { useHomeContext } from "@/context/homecontext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const {
    comoVision,
    tableData1,
    tableData3,
    WashingDrumData,
    Rotation_speedData,
    diameterData,
    faqData,
  } = useHomeContext();

  const images = [como1, como2, como3, como4, como5];

  return (
    <>
      <Head>
        <title>Como Laundry</title>
      </Head>
      <div className="w-full pb-10">
        <div className="w-full">
          <Carousel className="w-full" plugins={[plugin.current]}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-64 md:h-96 lg:h-screen">
                    <Image
                      src={image}
                      alt="Como"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <section className="w-full">
          <div className="flex flex-col items-center justify-center h-96 gap-y-6 px-4 md:px-8 lg:px-16">
            <h1 className="text-3xl font-semibold text-center">
              MAKE TO BETTER TO
            </h1>
            <h1 className="text-5xl font-bold text-center">FUTURE</h1>
            <span className="text-center text-base md:text-xl lg:text-2xl">
              โคโม่ ใช้เครื่องซักผ้า แบรนด์ Yamamoto
              เป็นเทคโนโลยีเครื่องซักผ้าที่ดีที่สุดในญี่ปุ่น
              เป็นเครื่องซัก+อบในเครื่องเดียวกันนำเข้าเป็นเจ้าแรก
              และมุ่งเน้นความสะดวกสบายให้กับลูกค้า ใช้เทคโนโลยีที่ทันสมัยที่สุด
              และมีคุณภาพ สร้างผลลัพธ์ทำให้เกิด passive income
            </span>
          </div>
        </section>
        {/* Video */}
        <div className="w-full flex justify-center mt-8">
          <video className="w-full" autoPlay loop muted>
            <source src="/video/preview.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Video */}

        {/* ComoVision */}
        <div className="bg-como3 w-full h-screen bg-cover bg-center flex items-end">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white backdrop-blur-sm bg-opacity-20 w-full">
            {comoVision.map((vision, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <h1 className="text-3xl font-bold mb-2">{vision.title}</h1>
                <span>{vision.description}</span>
              </div>
            ))}
          </div>
        </div>
        {/* ComoVision */}

        {/* Table */}
        <section className="w-full py-10">
          <div className="flex flex-col items-center justify-center gap-y-6 px-4 md:px-8 lg:px-16">
            <Image src={machince} alt="machine" width={500} height={500} />
            <h1 className="text-3xl font-bold text-center">
              Washer Model XYZ Specifications
            </h1>
          </div>
          <div className="w-full flex flex-col justify-center px-4 md:px-8 lg:px-16">
            <TableComponent
              tableData1={tableData1}
              tableData3={tableData3}
              WashingDrumData={WashingDrumData}
              Rotation_speedData={Rotation_speedData}
              diameterData={diameterData}
            />
          </div>
        </section>
        {/* Table */}

        {/* FAQ */}
        <section className="w-full py-10">
          <div className="flex flex-col gap-y-10 justify-center w-full items-center px-4 md:px-8 lg:px-16">
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-blue-900">
              FAQ
            </h1>
            <div className="w-full md:w-3/4 lg:w-2/4">
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-y-4"
              >
                {faqData?.map((faq, index) => (
                  <AccordionItem key={index} value={index.toString()}>
                    <AccordionTrigger className="rounded-xl border-blue-200 text-blue-900 border-2 p-4 w-full">
                      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                        {faq.question}
                      </h1>
                    </AccordionTrigger>
                    <AccordionContent className="text-lg md:text-xl">
                      <h1 className="text-blue-900 mb-2 font-semibold w-full">
                        คำตอบ :{" "}
                        <span className="text-black font-medium">
                          {faq.answer}
                        </span>
                      </h1>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        {/* FAQ */}

        <section className="w-full py-10">
          <div className="w-full flex justify-center">
            <Link
              href="/franchise"
              className="rounded-full bg-[#1677ff] text-white p-6 text-2xl md:text-3xl lg:text-4xl"
            >
              สนใจแฟรนไชส์
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
