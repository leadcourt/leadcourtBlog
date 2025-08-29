import { Outlet } from "react-router-dom";
import HeaderMain from "../../../components/Level/HeaderMain";
import ConnectWithUs from "../../../components/Level/ConnectWithUs";
import Footer from "../../../components/Level/Footer";
import ScrollTop from "../../../components/Level/ScrollTop";

export default function DefaultLayout() {
   
  return (
    <div>
      <ScrollTop />
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
