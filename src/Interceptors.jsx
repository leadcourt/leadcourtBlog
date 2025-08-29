import axios from "axios";
import { 
  useRecoilValue,
  useResetRecoilState 
} from "recoil";
import {
  accessTokenState,
  attachToken,
  refreshTokenState,
  userState,
} from "./utils/atom/authAtom";
import { toast } from "react-toastify";

function Interceptors() {
  const resetAccessToken = useResetRecoilState(accessTokenState);
  const resetRefreshToken = useResetRecoilState(refreshTokenState);
  const resetUser = useResetRecoilState(userState);


  const logout = () => {
    resetAccessToken();
    resetRefreshToken();
    resetUser();
    toast.success("Session Expired");
    window.location.href = "/";
  };
  const mytoken = useRecoilValue(attachToken);


  axios.interceptors.response.use(
    (response) => response,
    (error) => {

      if (error?.response?.data?.message === 'Invalid token. Authentication failed.'){
        logout()
      }
      
      
      if (error === 'Token expired') {

        logout();
      }
    }
  );

  mytoken;


  return <></>;
}

export default Interceptors;
