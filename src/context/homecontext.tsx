"use client";

import { createContext, useContext } from "react";
import {
  comoVision,
  tableData1,
  tableData3,
  WashingDrumData,
  Rotation_speedData,
  diameterData,
  faqData,
  franchiseData,
} from "@/data/home";
import { ITable } from "@/interface/Table";
import { IFaq } from "@/interface/faq";

type HomeContextType = {
  comoVision: { title: string; description: string }[];
  tableData1: ITable[];
  tableData3: ITable[];
  WashingDrumData: ITable[];
  Rotation_speedData: ITable[];
  diameterData: ITable[];
  faqData: IFaq[];
  franchiseData: {
    weight: number[];
    count: number[];
    namefr: string;
    province: string;
    img: number;
    gmap: string;
  }[];
};

const HomeContext = createContext<HomeContextType | null>(null);

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within HomeProvider");
  }
  return context;
};

export const HomeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = {
    comoVision,
    tableData1,
    tableData3,
    WashingDrumData,
    Rotation_speedData,
    diameterData,
    faqData,
    franchiseData,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
