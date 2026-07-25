import AcademicsBanner from "@/components/sections/academics/AcademicsBanner";
import LearningApproach from "@/components/sections/academics/LearningApproach";
import AcademicPrograms from "@/components/sections/academics/AcademicPrograms";
import CurriculumHighlights from "@/components/sections/academics/CurriculumHighlights";
import CoCurricularActivities from "@/components/sections/academics/CoCurricularActivities"; 

function Academics() {
  return (
    <>
      <AcademicsBanner />
      <LearningApproach />
      <AcademicPrograms />
      <CurriculumHighlights />
      <CoCurricularActivities />
    </>
  );
}

export default Academics;