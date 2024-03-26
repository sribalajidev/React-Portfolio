
// Component Import
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Home from "../../Pages/Home";
import Blogs from "../../Pages/Blog";
import ContactUs from "../../Pages/ContactUs";
import NoPage from "../../Pages/NoPage";

export default function Header() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNavigation />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
