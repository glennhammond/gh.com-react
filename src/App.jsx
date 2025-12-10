// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import SiteLayout from "./components/layout/SiteLayout.jsx";

import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import Blog from "./pages/Blog.jsx";
import Post from "./pages/Post.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import ContactSuccess from "./pages/ContactSuccess.jsx";
import ElearningDesignSystemOverview from "./pages/ElearningDesignSystemOverview";
import AtomicDesign from "./pages/design-system/AtomicDesign.jsx";
import AtomicDesign from "./pages/design-system/AtomicDesign.jsx";
import CoreMoreBore from "./pages/design-system/CoreMoreBore.jsx";
// ✅ new import for the Colours page
import Colours from "./pages/design-system/Colours.jsx";

function NotFound() {
  return (
    <div className="p-10 text-center">
      <h1 className="font-heading text-3xl">404 — Page not found</h1>
      <p className="mt-4 opacity-70">
        The page you're looking for doesn't exist.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <SiteLayout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Work + projects */}
          <Route path="/work" element={<Work />} />

          {/* ✅ specific design system overview page */}
          <Route
            path="/work/elearning-design-system/overview"
            element={<ElearningDesignSystemOverview />}
          />
{/* specific design system overview page */}
<Route
  path="/work/elearning-design-system/overview"
  element={<ElearningDesignSystemOverview />}
/>

{/* specific colours page for the design system */}
<Route
  path="/work/elearning-design-system/colours"
  element={<Colours />}
/>

{/* specific atomic design page for the design system */}
<Route
  path="/work/elearning-design-system/atomic-design"
  element={<AtomicDesign />}
/>
{/* specific design system overview page */}
<Route
  path="/work/elearning-design-system/overview"
  element={<ElearningDesignSystemOverview />}
/>

{/* specific colours page for the design system */}
<Route
  path="/work/elearning-design-system/colours"
  element={<Colours />}
/>

{/* specific atomic design page */}
<Route
  path="/work/elearning-design-system/atomic-design"
  element={<AtomicDesign />}
/>

{/* specific Core, More & Bore page */}
<Route
  path="/work/elearning-design-system/core-more-bore"
  element={<CoreMoreBore />}
/>

{/* generic project detail route */}
<Route path="/work/:slug" element={<ProjectPage />} />

{/* generic project detail route */}
<Route path="/work/:slug" element={<ProjectPage />} />
          {/* ✅ specific colours page for the design system */}
          <Route
            path="/work/elearning-design-system/colours"
            element={<Colours />}
          />

          {/* generic project detail route */}
          <Route path="/work/:slug" element={<ProjectPage />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />

          {/* Static pages */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/success" element={<ContactSuccess />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteLayout>

      <Footer />
    </>
  );
}