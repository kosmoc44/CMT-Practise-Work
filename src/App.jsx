import './App.scss'
import AboutUs from "./components/AboutUs/AboutUs"
import Benefits from "./components/Benefits/Benefits"
import CertificatesInfo from "./components/CertificatesInfo/CertificatesInfo"
import Contacts from "./components/Contacts/Contacts"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Stats from "./components/Stats/Stats"
import Testimonials from "./components/Testimonials/Testimonilas"

function App() {

  return (
    <>
      <Header />
      <AboutUs />
      <Stats />
      <Features />
      <Benefits />
      <Testimonials />
      <CertificatesInfo />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
