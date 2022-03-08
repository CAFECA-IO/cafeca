import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import About from "./about";
import Contact from "./contact";
import Landing from "./landing";
import Products from "./products";
import Team from "./team";

const Index = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default Index;
