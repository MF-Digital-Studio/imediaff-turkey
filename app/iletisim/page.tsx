import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactFooterInfo from "@/components/contact/contact-footer-info"

export const metadata = {
  title: "İletişim | imediaff Türkiye",
  description:
    "Türkiye ekibimizle bir iş birliği görüşmek, teklif almak veya brief paylaşmak için bize ulaşın.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactFooterInfo />
    </>
  )
}
