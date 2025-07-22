import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
// import { toast } from "react-toastify";
import { firebaseAuth } from "../../config/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
// import CryptoJS from "crypto-js";
 

const userSignUp = async (
  email,
  password,
  displayName
) => {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((res) => {
      // toast.success("User Signed Up successfully");

      updateProfile(res.user, {
        displayName: displayName,
      })
        .then(() => {})
        .catch(() => {
          // toast.error("Error on sign up.");
        });
      return "success";
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log('error', error);
      // console.log('errorCode', errorCode);
      // console.log('errorMessage', errorMessage);

      if (errorCode === "auth/email-already-in-use") {
        return "Email already in use.";
      } else {
        return "Error signup";
      }
    });
};

const userLogin = async (
  email,
  password
) => {
  let data = {};

  try {
    const response = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    const user = response.user;
    const accessToken = await user.getIdToken();
    // const refreshToken = user.refreshToken;
    // const encData = import.meta.env.VITE_EN_KEY

    // const key = CryptoJS.enc.Base64.parse(encData);

    // const refresh = await firebaseAuth.currentUser
    //   ?.getIdToken(true)
    //   .then((res) => {
    //     return res;
    //   }).catch(()=>{
    //     return accessToken});

    // const en_access = CryptoJS.AES.encrypt(accessToken, encData).toString();
    // console.log(en_access);

    data = {
      // access: en_access,
      access: accessToken,
      refresh: 'refreshToken',
      user: {
        id: user.uid,
        email: user.email,
        name: user.displayName,
      },
    };

    return data;
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code == "auth/invalid-credential") {
        return { error: "Email or Password Incorrect" };
      } else {
        return { error: "Error occurred, Please try again!" };
      }
    } else {
      return { error: "Error occurred, Please try again!!" };
    }
  }

  return data;
};

const userGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();

  let data = {};

  try {
    // signInWithRedirect
    const result = await signInWithPopup(firebaseAuth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);

    // const token = credential?.idToken;
    const user = result.user;

    const userIdToken = await user.getIdToken();

    // For token encryption
    // const en_access = CryptoJS.AES.encrypt(
    //   token,
    //   import.meta.env.VITE_EN_KEY
    // ).toString();


    if (credential) {
      data = {
        // access: en_access,
        access: userIdToken,
        refresh: "",
        user: {
          id: user.uid,
          email: user.email,
          name: user.displayName,
        },
      };
    }

    return data;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    const credentialError = GoogleAuthProvider.credentialFromError(error);

    if (credentialError || errorCode || errorMessage) {
      return { error: "Error Occurred, Try Again!" };
    }
    data = { error: "error ocurred" };
    return data;
  }
};

const userResetPassword = async (payload) => {
  try {
    await sendPasswordResetEmail(firebaseAuth, payload);
    return { message: "success" };
  } catch (err) {
    return { error: err, message: "failed" };
  }
};

// Get the resetCode from the URL
const handleResetPassword = async (payload) => {
  const query = new URLSearchParams(location.search);
  const resetCode = query.get("oobCode"); // Firebase sends the code via query parameter

  try {
    if (!resetCode) {
      //   throw new Error('Invalid password reset link.');

      throw new Error("Invalid password reset link.");
    }
    return await confirmPasswordReset(firebaseAuth, resetCode, payload);
  } catch (err) {
    return err;
  }
};

const userSignInBK = async (payload) => {
  return axios.post("http://localhost:3000/api/auth/login", payload);
};

const userSignUpBK = async (payload) => {
  return axios.post("http://localhost:3000/api/auth/register", payload);
};

export {
  userSignUp,
  userLogin,
  userGoogleSignIn,
  userResetPassword,
  handleResetPassword,
  userSignInBK,
  userSignUpBK,
};
