import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import About from "./about";
import Landing from "./landing";
import Products from "./products";
import Privacy from "./privacy";

const Index = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Layout>
  );
};

export default Index;
