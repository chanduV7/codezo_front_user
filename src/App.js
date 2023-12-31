import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./components/register";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Login from "./components/login";
import BuildProfile from "./components/buildProfile";
import ProfileForm from "./components/profileForm";
import UploadPic from "./components/uploadPic";
import ViewJob from "./components/viewJob";
import Front from "./components/startingPage";
import Ifollow from "./components/ifollow";
import ViewCompany from "./components/viewCompany";
import savedJobs from "./components/savedJobs";
import SavedJobs from "./components/savedJobs";

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Front/>
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/profile=/:userId",
      element: <BuildProfile />,
    },
    {
      path: "/profile/edit/:userId",
      element: <ProfileForm />,
    },
    {
      path: "/accounts/login",
      element: <Login />,
    },

    {
      path: "/accounts/register",
      element: <Register />,
    },
    {
      path: "/profile/edit-pic",
      element: <UploadPic />,
    },
    {
      path: "/viewJob/:jobId",
      element: <ViewJob />,
    },
    {
      path : "/ifollow",
      element: <Ifollow/>
    },
    {
      path : "viewCompany/:cid",
      element: <ViewCompany/>
    },
    {
      path : "savedJobs/:userId",
      element: <SavedJobs/>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
