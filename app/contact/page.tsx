import { ContactHero } from "@/components/sections/contact/hero";
import { ContactForm } from "@/components/sections/contact/form";
import { ContactInfo } from "@/components/sections/contact/info";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </div>
  );
}