import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers — Join De Novo",
  description:
    "Build your legal legacy at De Novo Law Firm. Explore open positions across Corporate M&A, Intellectual Property, Litigation and more.",
};

export default function CareersPage() {
  return <CareersClient />;
}
