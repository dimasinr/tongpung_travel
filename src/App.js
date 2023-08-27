import HomePages from "./Pages/HomePages/HomePages.jsx";
import NavbarTongpung from "./Components/Navbar/NavbarTongpung.jsx";
import Footer from "./Components/Footer/Footer.jsx";

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
