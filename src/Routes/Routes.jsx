import { Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Home from "../Pages/Home/Home";
import Detail from "../Pages/Detail/Detail";
import Form from "../Pages/Form/Form";
import About from "../Pages/About/About";

function Router() {
    return (
        <div>
            <Routes>
                    <Route exact path="/" element={<LandingPage />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/pokemon/:id" element={<Detail />}/>
                    <Route path="/form" element={<Form />}/>
                    <Route path="/about" element={<About />}/>
            </Routes>
        </div>
    )
}

export default Router;