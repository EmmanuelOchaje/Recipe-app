import Chefs from "./components/Chefs";
import Footer from "./components/Footer";
import HeroSec from "./components/HeroSec";
import ImproveSkill from "./components/ImproveSkill";
import Navbar from "./components/Navbar";
import Quote from "./styles/Quote";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container main">
        <HeroSec />
        <ImproveSkill />
        <Quote />
        <Chefs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
