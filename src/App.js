import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './components/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Login from './components/login';
import BuildProfile from './components/buildProfile';
import ProfileForm from './components/profileForm';
import UploadPic from './components/uploadPic';
import ViewJob from './components/viewJob';


function App() {
   const router = createBrowserRouter([
   
    { 
      path:"/home",
      element:<Home/>
    },
    { 
      path:"/profile=/:userId",
      element:<BuildProfile/>,
    },
   {
     path: "/profile/edit/:userId",
     element: <ProfileForm/>
   },
    {
      path :"/accounts/login",
      element:<Login/>
    },

    {
      path :"/accounts/register",
      element:<Register/>
    },
      {
        path: "/profile/edit-pic",
        element: <UploadPic/>
      },
      {
        path: "/viewJob/:jobId",
        element:  <ViewJob/>
      }
   ])
  return (
    <div className="App">
             <RouterProvider router={router}/>
    </div>
  );
}

export default App;