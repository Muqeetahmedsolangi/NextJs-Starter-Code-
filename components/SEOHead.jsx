"use client";

import { useEffect } from "react";
import { seoConfig, pagesSEO } from "../configs/seoConfig";

/**
 * SEO Head Component
 * Dynamically updates meta tags based on the current section
 */
const SEOHead = ({ page = "home" }) => {
  useEffect(() => {
    const pageSEO = pagesSEO[page] || pagesSEO.home;
    
    // Update title
    document.title = pageSEO.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", pageSEO.description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", pageSEO.keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", pageSEO.title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", pageSEO.description);
    }
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", pageSEO.title);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", pageSEO.description);
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && page !== "home") {
      canonical.setAttribute("href", `${seoConfig.siteUrl}/#${page}`);
    } else if (canonical) {
      canonical.setAttribute("href", seoConfig.siteUrl);
    }
  }, [page]);
  
  return null;
};

export default SEOHead;

