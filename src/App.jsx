import "./App.css";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import UseCases from "./components/UseCases/UseCases";
import Navbar from "./components/Navbar/Navbar";
import Apropos from "./components/Apropos/Apropos";
import FAQ from "./components/FAQ/FAQ";
import StartForFree from "./components/StartForFree/StartForFree";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <Apropos />
       <FAQ />
       <StartForFree /> 
       <Footer />
    </>
  );
}

export default App;
