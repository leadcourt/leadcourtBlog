import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { accessTokenState, refreshTokenState, userState } from "../../atom/authAtom";
// import ScrollToTop from "../../../components/ScrollToTop";
import HeaderMain from "../../../components/Level/HeaderMain";
// import ConnectWithUs from "../../../components/Level/ConnectWithUs";
import Footer from "../../../components/Level/Footer";
import ScrollTop from "../../../components/Level/ScrollTop";

export default function AdminLayout() {
  
    const accessToken = useRecoilValue(accessTokenState);
    const refreshToken = useRecoilValue(refreshTokenState);
    const user = useRecoilValue(userState);
  
    

  const auth = {
    access: accessToken,
    token: refreshToken
  }
 

  return (
    <div>
      <ScrollTop />
      {/* <ScrollToTop /> */}
      {/* {auth?.access && user.role.toLowerCase() === "admin" ? ( */}
       {auth?.access && user?.id === "rAkBz5jlk5Q19pLHcVEsiqg1VrL2" ? (
         <div className="">
          <HeaderMain />
            <Outlet />
          <Footer />
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
}
