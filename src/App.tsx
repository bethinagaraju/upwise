import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Ignite from './pages/Ignite';
import Resources from './pages/Resources';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './pages/Gallery';
import Empower from './pages/Empower';
import Elevate from './pages/Elevate';

import AdvanceExcelCourse from './coursespage/AdvanceExcelCourse';
import PowerBIAdvancedCourse from './coursespage/PowerBIAdvancedCourse';
import ExcelEssentialsCourse from './coursespage/ExcelEssentialsCourse';
import PowerBIBasicCourse from './coursespage/PowerBIBasicCourse';
import PowerBIIntermediateCourse from './coursespage/PowerBIIntermediateCourse';
import AIToolsMicrosoftOfficeCourse from './coursespage/AIToolsMicrosoftOfficeCourse';
import PowerPointPresentingImpactCourse from './coursespage/PowerPointPresentingImpactCourse';
import OutlookTeamsCollaborationCourse from './coursespage/OutlookTeamsCollaborationCourse';
import MSWordEssentialsCourse from './coursespage/MSWordEssentialsCourse';
import MicrosoftOfficeAIToolsCourse from './coursespage/MicrosoftOfficeAIToolsCourse';

// Elevate Course Pages
import NewManagerProgramCourse from './coursespage/NewManagerProgramCourse';
import WomenLeadershipProgramCourse from './coursespage/WomenLeadershipProgramCourse';
import InnovationCreativeThinkingCourse from './coursespage/InnovationCreativeThinkingCourse';
import ExecutivePresenceCourse from './coursespage/ExecutivePresenceCourse';
import BusinessEtiquetteCourse from './coursespage/BusinessEtiquetteCourse';
import OrganizationalTalentDevelopmentCourse from './coursespage/OrganizationalTalentDevelopmentCourse';
import CommunicationExcellenceCourse from './coursespage/CommunicationExcellenceCourse';
import DiversityEquityInclusionCourse from './coursespage/DiversityEquityInclusionCourse';
import EmotionalIntelligenceCourse from './coursespage/EmotionalIntelligenceCourse';
import TeamBuildingCollaborationCourse from './coursespage/TeamBuildingCollaborationCourse';

// Empower Course Pages
import PoshAwarenessEmployeesCourse from './coursespage/PoshAwarenessEmployeesCourse';
import IccIcTrainingCourse from './coursespage/IccIcTrainingCourse';
import LeadershipSensitizationCourse from './coursespage/LeadershipSensitizationCourse';
import WorkplaceConductGenderSensitizationCourse from './coursespage/WorkplaceConductGenderSensitizationCourse';
import CustomLegalWorkshopsCourse from './coursespage/CustomLegalWorkshopsCourse';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ignite" element={<Ignite />} />
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/empower' element={<Empower/>}/>
        <Route path='/elevate' element={<Elevate/>}/>

        <Route path='/advance-excel-course' element={<AdvanceExcelCourse/>}/>
        <Route path='/power-bi-advanced-course' element={<PowerBIAdvancedCourse/>}/>
        <Route path='/excel-essentials-course' element={<ExcelEssentialsCourse/>}/>
        <Route path='/power-bi-basic-course' element={<PowerBIBasicCourse/>}/>
        <Route path='/power-bi-intermediate-course' element={<PowerBIIntermediateCourse/>}/>
        <Route path='/ai-tools-microsoft-office-course' element={<AIToolsMicrosoftOfficeCourse/>}/>
        <Route path='/powerpoint-presenting-impact-course' element={<PowerPointPresentingImpactCourse/>}/>
        <Route path='/outlook-teams-collaboration-course' element={<OutlookTeamsCollaborationCourse/>}/>
        <Route path='/ms-word-essentials-course' element={<MSWordEssentialsCourse/>}/>
        <Route path='/microsoft-office-ai-tools-course' element={<MicrosoftOfficeAIToolsCourse/>}/>

        {/* Elevate Course Routes */}
        <Route path='/new-manager-program-course' element={<NewManagerProgramCourse/>}/>
        <Route path='/women-leadership-program-course' element={<WomenLeadershipProgramCourse/>}/>
        <Route path='/innovation-creative-thinking-course' element={<InnovationCreativeThinkingCourse/>}/>
        <Route path='/executive-presence-course' element={<ExecutivePresenceCourse/>}/>
        <Route path='/business-etiquette-course' element={<BusinessEtiquetteCourse/>}/>
        <Route path='/organizational-talent-development-course' element={<OrganizationalTalentDevelopmentCourse/>}/>
        <Route path='/communication-excellence-course' element={<CommunicationExcellenceCourse/>}/>
        <Route path='/diversity-equity-inclusion-course' element={<DiversityEquityInclusionCourse/>}/>
        <Route path='/emotional-intelligence-course' element={<EmotionalIntelligenceCourse/>}/>
        <Route path='/team-building-collaboration-course' element={<TeamBuildingCollaborationCourse/>}/>

        {/* Empower Course Routes */}
        <Route path='/posh-awareness-employees-course' element={<PoshAwarenessEmployeesCourse/>}/>
        <Route path='/icc-ic-training-course' element={<IccIcTrainingCourse/>}/>
        <Route path='/leadership-sensitization-course' element={<LeadershipSensitizationCourse/>}/>
        <Route path='/workplace-conduct-gender-sensitization-course' element={<WorkplaceConductGenderSensitizationCourse/>}/>
        <Route path='/custom-legal-workshops-course' element={<CustomLegalWorkshopsCourse/>}/>
      </Routes>

      <FloatingWhatsApp />

    </BrowserRouter>
  );
}

export default App;

