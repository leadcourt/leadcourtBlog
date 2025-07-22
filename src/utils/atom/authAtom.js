import { recoilPersist } from 'recoil-persist';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { atom, selector } from 'recoil';
import axios from 'axios';
// import CryptoJS from 'crypto-js'; 

 


const cookieStorage = (keyPrefix = '') => ({
  setItem: (key, value) => {
    Cookies.set(`${keyPrefix}${key}`, value, {
      expires: key.includes('refresh') ? 30 : 1,
      secure: true,
      // sameSite: null,
      sameSite: 'strict',
    });
  },
  getItem: (key) => {
    return Cookies.get(`${keyPrefix}${key}`) || null;
  },
  removeItem: (key) => {
    Cookies.remove(`${keyPrefix}${key}`);
  },
});


export const { persistAtom } = recoilPersist({
  key: 'recoil-auth',
  storage: cookieStorage('auth_'), // Optional prefix
});
export const refreshTokenState = atom({
  key: 'refreshTokenState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});


// User
export const userState = atom({
  key: 'userState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

 




export const accessTokenState = atom({
  key: 'accessTokenState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
 

export const attachToken = selector({
  key: "useToken",
  get: ({ get }) => {
    const acc_token = get(accessTokenState);
    
    if (acc_token) {

      

      return axios.interceptors.request.use(function (config) {
        const token = acc_token;

          
      // const bytes = CryptoJS.AES.decrypt(token, import.meta.env.VITE_EN_KEY);
      // const decryptedToken = bytes.toString(CryptoJS.enc.Utf8); 
        const decodedToken = jwtDecode(acc_token);
        const dateNow = new Date(); 
        
        if (decodedToken?.exp && decodedToken?.exp * 1000 < dateNow.getTime()) { 
          return Promise.reject('Token expired');
        }
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      });
    }
    return null;
  },
});