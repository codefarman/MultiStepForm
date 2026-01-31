import { BrowserRouter } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import ScrollToTop from "./components/common/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";
// import { LeadPopupProvider } from "./context/LeadPopupContext";
// import LeadPopup from "./components/LeadPopup";
// import RouteChangeListener from "./context/RouteChangeListener";
// import useABVariantLogger from "./hooks/useABVariantLogger";

const App = () => {
  // useABVariantLogger();
  return (
    <BrowserRouter>
      {/* <LeadPopupProvider> */}
        {/* <RouteChangeListener /> */}
        {/* <Navbar /> */}
        {/* <ScrollToTop /> */}
        <AppRoutes />
        {/* <Footer /> */}
        {/* <LeadPopup /> */}
      {/* </LeadPopupProvider> */}
    </BrowserRouter>
  );
};

export default App;
