// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import ProjectPage from "./pages/ProjectPage";

import Blog, { Scrandalous } from "./pages/Blog";
import Post from "./pages/Post";

import Contact from "./pages/Contact";
import ContactSuccess from "./pages/ContactSuccess";
import ElearningDesignSystemOverview from "./pages/ElearningDesignSystemOverview";

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        {/* Core pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<ProjectPage />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />

        {/* Scrandalous */}
        <Route path="/scrandalous" element={<Scrandalous />} />
        <Route path="/scrandalous/:slug" element={<Post />} />

        {/* Design system */}
        <Route path="/design-system" element={<ElearningDesignSystemOverview />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/success" element={<ContactSuccess />} />
        <Route path="/contact-success" element={<Navigate to="/contact/success" replace />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}