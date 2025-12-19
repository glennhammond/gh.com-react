// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import AssetRegister from "./pages/design-system/AssetRegister";
import AtomicDesign from "./pages/design-system/AtomicDesign";
import Colours from "./pages/design-system/Colours";
import CoreMoreBore from "./pages/design-system/CoreMoreBore";
import CourseStructure from "./pages/design-system/CourseStructure";
import ImagesIcons from "./pages/design-system/ImagesIcons";
import Storyline from "./pages/design-system/Storyline";
import Typography from "./pages/design-system/Typography";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <SiteLayout>
      <ScrollToTop />
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
        <Route path="/design-system/asset-register" element={<AssetRegister />} />
        <Route path="/design-system/atomic-design" element={<AtomicDesign />} />
        <Route path="/design-system/colours" element={<Colours />} />
        <Route path="/design-system/core-more-bore" element={<CoreMoreBore />} />
        <Route path="/design-system/course-structure" element={<CourseStructure />} />
        <Route path="/design-system/images-icons" element={<ImagesIcons />} />
        <Route path="/design-system/storyline" element={<Storyline />} />
        <Route path="/design-system/typography" element={<Typography />} />

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