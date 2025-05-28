import React from "react";
import Image from "next/image";
import branch1 from "@/assets/image/branch1.jpg";
import branch2 from "@/assets/image/branch2.jpg";
import branch3 from "@/assets/image/branch3.jpg";
import branch4 from "@/assets/image/branch4.jpg";
import branch5 from "@/assets/image/branch5.jpg";
import branch6 from "@/assets/image/branch6.jpg";
import branch7 from "@/assets/image/branch7.jpg";
import branch8 from "@/assets/image/branch8.jpg";
import branch9 from "@/assets/image/branch9.jpg";
import branch10 from "@/assets/image/branch10.jpg";
import branch11 from "@/assets/image/branch11.jpg";
import branch12 from "@/assets/image/branch12.jpg";
import branch13 from "@/assets/image/branch13.jpg";

interface LaundryMachine {
  weight: number[];
  count: number[];
  namefr: string;
  province: string;
  img: number;
  gmap: string;
}

const images = [
  branch1,
  branch2,
  branch3,
  branch4,
  branch5,
  branch6,
  branch7,
  branch8,
  branch9,
  branch10,
  branch11,
  branch12,
  branch13,
];

interface FranchiseCardProps {
  machines: LaundryMachine[];
}

const FranchiseCard: React.FC<FranchiseCardProps> = ({ machines }) => {
  return (
    <>
      {machines.map((machine, index) => (
        <div
          key={index}
          className="xl1500:w-[350px] xl1500:h-[700px] w-[300px] h-[630px] mx-auto bg-white shadow-xl border rounded-2xl flex flex-col"
        >
          <div className="relative w-full h-[300px]">
            <Image
              src={images[machine.img]}
              alt={`${machine.namefr} image`}
              fill
              className="rounded-t-2xl object-cover"
              priority={index === 0}
            />
          </div>

          <div className="p-4 flex flex-col flex-grow">
            <div className="text-gray-700 mb-4 px-3">
              <p>{machine.province}</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">{machine.namefr}</h3>
              {machine.weight.map((weight, weightIndex) => (
                <div className="flex justify-between mb-4" key={weightIndex}>
                  <span className="pr-2">{`เครื่องซัก+อบผ้า ขนาด ${weight} kg`}</span>
                  <span className="pr-2">{`x ${machine.count[weightIndex]}`}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-auto pt-4">
              <button
                className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded"
                onClick={() => window.open(machine.gmap, "_blank")}
              >
                แผนที่ร้าน
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FranchiseCard;
