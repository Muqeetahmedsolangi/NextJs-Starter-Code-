"use client";

import "./scss/app.scss";
import { seoConfig } from "../configs/seoConfig";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Primary Meta Tags */}
        <title>{seoConfig.title}</title>
        <meta name="title" content={seoConfig.title} />
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords.join(", ")} />
        <meta name="author" content={seoConfig.author} />
        <meta name="robots" content={seoConfig.robots} />
        <meta name="language" content={seoConfig.language} />
        <meta name="revisit-after" content="7 days" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={seoConfig.canonical} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={seoConfig.openGraph.type} />
        <meta property="og:url" content={seoConfig.siteUrl} />
        <meta property="og:title" content={seoConfig.openGraph.title} />
        <meta property="og:description" content={seoConfig.openGraph.description} />
        <meta property="og:image" content={`${seoConfig.siteUrl}${seoConfig.openGraph.image}`} />
        <meta property="og:image:alt" content={seoConfig.openGraph.imageAlt} />
        <meta property="og:image:width" content={seoConfig.openGraph.imageWidth} />
        <meta property="og:image:height" content={seoConfig.openGraph.imageHeight} />
        <meta property="og:locale" content={seoConfig.openGraph.locale} />
        <meta property="og:site_name" content={seoConfig.siteName} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content={seoConfig.twitter.card} />
        <meta name="twitter:url" content={seoConfig.siteUrl} />
        <meta name="twitter:title" content={seoConfig.twitter.title} />
        <meta name="twitter:description" content={seoConfig.twitter.description} />
        <meta name="twitter:image" content={`${seoConfig.siteUrl}${seoConfig.twitter.image}`} />
        <meta name="twitter:creator" content={seoConfig.twitter.creator} />
        <meta name="twitter:site" content={seoConfig.twitter.site} />
        
        {/* Additional SEO Tags */}
        <meta name="theme-color" content="#ec1839" />
        <meta name="msapplication-TileColor" content="#ec1839" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={seoConfig.siteName} />
        
        {/* Contact Information */}
        <meta name="contact" content={seoConfig.contact.email} />
        <meta name="geo.region" content={seoConfig.region} />
        <meta name="geo.placename" content={seoConfig.contact.location} />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.structuredData)
          }}
        />
        
        {/* Additional Structured Data - Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Muqeet Ahmed - Full Stack Development Services",
              "description": "Professional full stack development services including web applications, mobile apps, cloud solutions, and AI integration.",
              "url": seoConfig.siteUrl,
              "telephone": seoConfig.contact.phone,
              "email": seoConfig.contact.email,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Karachi",
                "addressCountry": "Pakistan"
              },
              "priceRange": "$$",
              "areaServed": "Worldwide",
              "serviceType": [
                "Web Development",
                "Mobile App Development",
                "Cloud Solutions",
                "AI Integration",
                "API Development",
                "Software Consulting"
              ]
            })
          }}
        />
        
        {/* Favicon */}
        <link rel="icon" href="/assets/images/icon/Gemini_Generated_Image_xbndl9xbndl9xbnd.png" type="image/png" />
        <link rel="shortcut icon" href="/assets/images/icon/Gemini_Generated_Image_xbndl9xbndl9xbnd.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/images/icon/Gemini_Generated_Image_xbndl9xbndl9xbnd.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/icon/Gemini_Generated_Image_xbndl9xbndl9xbnd.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/icon/Gemini_Generated_Image_xbndl9xbndl9xbnd.png" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        
        {/* Font Awesome CDN */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        
        {/* Google Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Clicker+Script&family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="portfolio-body">
        {children}
      </body>
    </html>
  );
}
