import AdmissionsBanner from "@/components/sections/admissions/AdmissionsBanner";
import AdmissionProcess from "@/components/sections/admissions/AdmissionProcess";
import EligibilityDocuments from "@/components/sections/admissions/EligibilityDocuments";
import AdmissionFAQ from "@/components/sections/admissions/AdmissionFAQ";
import ApplyNowCTA from "@/components/sections/admissions/ApplyNowCTA";

function Admissions() {
  return (
    <>
      <AdmissionsBanner />
      <AdmissionProcess />
      <EligibilityDocuments />
      <AdmissionFAQ />
      <ApplyNowCTA />
    </>
  );
}

export default Admissions;