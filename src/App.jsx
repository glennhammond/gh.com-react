// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import SiteLayout from "./components/layout/SiteLayout.jsx";
import PageWrapper from "./components/layout/PageWrapper.jsx";

import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import Blog from "./pages/Blog.jsx";
import Post from "./pages/Post.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import ContactSuccess from "./pages/ContactSuccess.jsx";

import ElearningDesignSystemOverview from "./pages/ElearningDesignSystemOverview.jsx";
import CorporateYogaAustraliaWebsite from "./pages/work/CorporateYogaAustraliaWebsite.jsx";
import FlightExaminerRatingCourse from "./pages/work/FlightExaminerRatingCourse.jsx";


// Design system sub-pages
import Colours from "./pages/design-system/Colours.jsx";
import AtomicDesign from "./pages/design-system/AtomicDesign.jsx";
import CoreMoreBore from "./pages/design-system/CoreMoreBore.jsx";
import Typography from "./pages/design-system/Typography.jsx";
import ImagesIcons from "./pages/design-system/ImagesIcons.jsx";
import CourseStructure from "./pages/design-system/CourseStructure.jsx";
import AssetRegister from "./pages/design-system/AssetRegister.jsx";
import Storyline from "./pages/design-system/Storyline.jsx";

function NotFound() {
  return (
    <div className="p-10 text-center">
      <h1 className="font-heading text-3xl">404 - Page not found</h1>
      <p className="mt-4 opacity-70">
        The page you're looking for doesn't exist.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <PageWrapper>
      <Header />

      <SiteLayout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Work + projects */}
          <Route path="/work" element={<Work />} />

          {/* Specific work case study pages */}
          <Route
            path="/work/corporate-yoga-australia-website"
            element={<CorporateYogaAustraliaWebsite />}
          />
          <Route
            path="/work/casa-flight-examiner-rating"
            element={<FlightExaminerRatingCourse />}
          />

          {/* eLearning Design System sub-pages */}
          <Route
            path="/work/elearning-design-system/overview"
            element={<ElearningDesignSystemOverview />}
          />
          <Route
            path="/work/elearning-design-system/atomic-design"
            element={<AtomicDesign />}
          />
          <Route
            path="/work/elearning-design-system/core-more-bore"
            element={<CoreMoreBore />}
          />
          <Route
            path="/work/elearning-design-system/typography"
            element={<Typography />}
          />
          <Route
            path="/work/elearning-design-system/images-icons"
            element={<ImagesIcons />}
          />
          <Route
            path="/work/elearning-design-system/course-structure"
            element={<CourseStructure />}
          />
          <Route
            path="/work/elearning-design-system/asset-register"
            element={<AssetRegister />}
          />
          <Route
            path="/work/elearning-design-system/storyline"
            element={<Storyline />}
          />
          <Route
            path="/work/elearning-design-system/colours"
            element={<Colours />}
          />

          {/* Generic project detail route */}
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
    </PageWrapper>
  );
}