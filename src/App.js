import HomePages from "./Pages/HomePages/HomePages";
import NavbarTongpung from "./Components/Navbar/NavbarTongpung";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavbarTongpung />
      <HomePages /> 
      <Footer />
    </div>
  );
}

export default App;
