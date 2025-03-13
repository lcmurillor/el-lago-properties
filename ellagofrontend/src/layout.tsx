import Navbar from "./components/navbar";
import { Page } from "./page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Layout = () => {
    return ( 
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Page />} />
            </Routes>
        </Router>
    );
};

export default Layout;
