import NavbarApp from "./components/NavbarApp";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavbarApp />
      <main className="container py-4">
        <Home />
        <AboutUs />
        <Contact />
      </main>
    </>
  );
}

export default App;