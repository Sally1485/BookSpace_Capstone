import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Explore from "./components/pages/Explore";
import Details from "./components/pages/Details";
import Library from "./components/pages/Library";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";

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
            <Route path="/book/:id" element={<Details />} />
            <Route path="/library" element={<Library />} />
          </Routes>
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
