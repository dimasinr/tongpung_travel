import HomePages from "./Pages/HomePages/HomePages";
import NavbarTongpung from "./Components/Navbar/NavbarTongpung";
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <NavbarTongpung />
      <HomePages /> 
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
