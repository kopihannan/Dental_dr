import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import Main from "../../components/Main/Main";
import About from "../../components/Pages/About";
import Appoinment from "../../components/Pages/Appoinment";
import Contact from "../../components/Pages/Contact";
import Login from "../../components/Pages/Login";
import Review from "../../components/Pages/Review";

const router = createBrowserRouter([{
    path: '/', element: <Main></Main>,
    children: [
        {path: '/', element: <Home></Home>},
        {path: '/appoinment', element: <Appoinment></Appoinment>},
        {path: '/review', element: <Review></Review>},
        {path: '/about', element: <About></About>},
        {path: '/contact', element: <Contact></Contact>},
        {path: '/login', element: <Login></Login>}
    ]
}]);

export default router;