export function generateStructuredData(pageType: "homepage" | "miracle" | "about", data?: any) {
    if (pageType === "homepage") {
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Quran Science Application",
        url: "https://quran-science.vercel.app/",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://quran-science.vercel.app/?tab=search&query={search_term_string}",
          "query-input": "required name=search_term_string",
        },
        description: "Explore the mathematical miracles and numerical patterns in the Holy Quran.",
        author: {
          "@type": "Person",
          name: "Mizanur Rahman",
          url: "https://quran-science.vercel.app/about",
        },
      }
    }
  
    if (pageType === "miracle" && data) {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.title,
        description: data.description,
        image: data.image,
        author: {
          "@type": "Person",
          name: "Mizanur Rahman",
          url: "https://quran-science.vercel.app/about",
        },
        publisher: {
          "@type": "Organization",
          name: "Quran Science Application",
          logo: {
            "@type": "ImageObject",
            url: "https://quran-science.vercel.app/logo.png",
          },
        },
        datePublished: "2023-01-01T00:00:00Z",
        dateModified: new Date().toISOString(),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://quran-science.vercel.app/miracles/${data.id || (data.title ? data.title.toLowerCase().replace(/\s+/g, "-") : "miracle")}`,
        },
        keywords: [
          "Quran",
          "mathematical miracles",
          "numerical patterns",
          data.title,
          "Islamic research",
          "Quranic structure",
        ].join(", "),
      }
    }
  
    if (pageType === "about") {
      return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Mizanur Rahman",
        jobTitle: "Quran Researcher & Developer",
        email: "nurmizanrah@gmail.com",
        url: "https://quran-science.vercel.app/about",
        sameAs: [
          "https://github.com/nickty",
          "https://www.linkedin.com/in/mizanur-rahman-a808082a/",
          "https://twitter.com/nickty008",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Quran Science Research",
        },
      }
    }
  
    return null
  }
  
  