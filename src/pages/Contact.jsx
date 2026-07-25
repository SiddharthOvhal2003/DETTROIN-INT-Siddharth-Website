import ContactBanner from "@/components/sections/contact/ContactBanner";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import LocationMap from "@/components/sections/contact/LocationMap";

function Contact() {
  return (
    <>
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
      <LocationMap />
    </>
  );
}

export default Contact;