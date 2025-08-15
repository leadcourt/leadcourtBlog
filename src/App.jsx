import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import router from './utils/routers/RouterFile';
import Interceptors from './Interceptors';

const App = () => {
  return (
    

    <RecoilRoot>

    <ToastContainer 
    
    position="top-right"
    />
    <Interceptors />
    <RouterProvider router={router}  basename="/blog" />
  </RecoilRoot>

  );
};

export default App;
