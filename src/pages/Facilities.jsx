import FacilitiesBanner from "@/components/sections/facilities/FacilitiesBanner";
import CampusFacilities from "@/components/sections/facilities/CampusFacilities";
import SafetyWellBeing from "@/components/sections/facilities/SafetyWellBeing";
import LearningEnvironment from "@/components/sections/facilities/LearningEnvironment";

function Facilities() {
  return (
    <>
      <FacilitiesBanner />

      <CampusFacilities />
      <SafetyWellBeing />
      <LearningEnvironment />
    </>
  );
}

export default Facilities;