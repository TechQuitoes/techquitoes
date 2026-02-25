import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import Footer from "./components/Footer";
import About from "./pages/About";
import Service from "./pages/Service";
import Protfolio from "./pages/Protfolio";
import Technology from "./pages/Technology";
import HireMe from "./pages/HireMe";
import Contact from "./pages/Contact.";

const Page = ({ title }) => <div className="p-10 text-white">{title}</div>;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/service" element={<Service />} />
        <Route path="/services/app" element={<Page title="App Dev" />} />
        <Route path="/services/uiux" element={<Page title="UI/UX" />} />

        <Route path="/portfolio" element={<Protfolio />} />

        <Route path="/technology" element={<Technology />} />
        <Route path="/tech/node" element={<Page title="Node" />} />
        <Route path="/tech/mongo" element={<Page title="MongoDB" />} />

        <Route path="/hire" element={<HireMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
