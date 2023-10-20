import Home from "../pages/Home"
import Doctors from "../pages/Doctors/Doctors"
import DoctorDetails from "../pages/Doctors/DoctorDetails"
import Login from "../pages/Login"
import Services from "../pages/Services"
import Signup from "../pages/Signup"
import Contact from "../pages/Contact"
import {Routes, Route} from "react-router-dom"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctordetails/:id" element={<DoctorDetails />} />
    </Routes>
  )
}

export default Routers