import type { Metadata } from "next";
import PracticeAreasClient from "./PracticeAreasClient";

export const metadata: Metadata = {
  title: "Practice Areas — Areas of Expertise",
  description:
    "Six specialized practice areas at De Novo Law Firm: Corporate M&A, Transactions, Start-up Practice, Intellectual Property, Real Estate, and Litigation.",
};

export default function PracticeAreasPage() {
  return <PracticeAreasClient />;
}
