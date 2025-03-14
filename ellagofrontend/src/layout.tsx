import {Navbar, Footer, ThemeProvider} from "./components";
import { Page } from "./page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Layout = () => {
    return ( 
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Page />} />
            </Routes>
            <Footer/>
        </Router>
        </ThemeProvider>
        
    );
};

export default Layout;
