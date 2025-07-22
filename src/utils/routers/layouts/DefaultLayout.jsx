import { Outlet } from "react-router-dom";
// import ScrollToTop from "../../../components/ScrollToTop";
import HeaderMain from "../../../components/Level/HeaderMain";
import ConnectWithUs from "../../../components/Level/ConnectWithUs";
import Footer from "../../../components/Level/Footer";
import ScrollTop from "../../../components/Level/ScrollTop";

export default function DefaultLayout() {
   
  return (
    <div>
      <ScrollTop />
      {/* <ScrollToTop /> */}
      {/* {auth?.access && user?.id === "rAkBz5jlk5Q19pLHcVEsiqg1VrL2" ? (
        <Navigate to="/" /> 
      ) : ( 
        */}
        <div className="">
          <HeaderMain />
            <Outlet />
          <ConnectWithUs />
          <Footer />
        </div>
      {/* )} */}
    </div>
  );
}
