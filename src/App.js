import "./App.css";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Passinate from "./components/Passinate";
import SocialIcons from "./components/SocialIcons";
import { Services } from "./components/Services";
import Header from "./components/Header";
import OurProjects from "./components/OurProjects";
import Comment from "./components/Comment";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Services />
      <Passinate />
      <OurProjects />
      <SocialIcons />
      <Comment />
      <Footer />
    </>
  );
}

export default App;
