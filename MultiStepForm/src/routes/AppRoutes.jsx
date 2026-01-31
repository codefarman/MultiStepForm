import { Routes, Route } from "react-router-dom";

// Existing Pages
// import Home from "../pages/Home/Home";
// import SearchPage from "../pages/Home/components/SearchPage";
// import OnlineMBA from "../pages/OnlineMBA/OnlineMBA";
// import SpecializationDetail from "../pages/Specializations/SpecializationDetail";
// import NotFound from "../pages/NotFound/NotFound";
// import ProgramCatalogPage from "../pages/Program/ProgramCatalogPage";
// import SubProgramDetailPage from "../pages/SubProgram/SubProgramDetailPage";
// import ContactUs from "../pages/ContactUs/ContactUs";
import MultiStepFormPage from "../pages/MultiStepFormPage/MultiStepFormPage";
// import AboutPage from "../pages/AboutPage/AboutPage";


const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/online-mba-program" element={<OnlineMBA />} />
      <Route path="/specializations/:specializationSlug" element={<SpecializationDetail />}/>
      <Route path="/programs" element={<ProgramCatalogPage />} />
      <Route path="/programs/:categorySlug/:subProgramSlug" element={<SubProgramDetailPage />} />
       <Route path="contact-us" element={<ContactUs />} /> */}
       <Route path="/" element={<MultiStepFormPage />} />
       {/* <Route path="about-us" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />       */}
    </Routes>
  );
};

export default AppRoutes;
