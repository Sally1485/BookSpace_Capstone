import react from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/pages/Home";
import Explore from "./components/pages/Explore";
import Details from "./components/pages/Details";
import Library from "./components/pages/Library";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/details" element={<Details />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
