import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Book a Consultation",
  description:
    "Schedule a confidential legal consultation with De Novo Law Firm. Corporate M&A, IP, Litigation and more. Offices in Bangalore and Mumbai.",
};

export default function ContactPage() {
  return <ContactClient />;
}
