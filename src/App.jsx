// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import SiteLayout from "./components/layout/SiteLayout";

import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import Blog from "./pages/Blog.jsx";
import Post from "./pages/Post.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import ContactSuccess from "./pages/ContactSuccess.jsx";
import YouTube from "./pages/YouTube.jsx";

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
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<ProjectPage />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/success" element={<ContactSuccess />} />
        <Route path="/youtube" element={<YouTube />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </SiteLayout>
  );
}
