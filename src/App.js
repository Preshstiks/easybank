import "./App.css";
import About from "./components/About";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
