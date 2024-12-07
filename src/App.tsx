
import Navbar from './components/navigationbar/Navbar'
import Hero from "./components/hero/Hero.tsx";
import About from "./components/about/About.tsx";
import Services from './components/services/Services.tsx';
import MyWork from "./components/mywork/MyWork.tsx";
import Contact from "./components/contact/Contact.tsx";
import Footer from "./components/footer/Footer.tsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
        <Footer />
    </div>
  )
}

export default App