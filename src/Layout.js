import { Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Header from "./Components/Header/Header";
import App from './App';
import Footer from './Components/Footer/Footer'
import Pricing from "./Components/Pricing/Pricing";

export default function Layout() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/">
                    <Route path="" element={<Home />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path='editor' element={<App />} />
                </Route>
            </Routes>
            <Footer />
        </>
    )
}