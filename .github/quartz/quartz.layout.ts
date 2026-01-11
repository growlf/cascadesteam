import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { jsx } from "preact/jsx-runtime"

// instead of "import Logo from "./Logo.tsx" -
// Define the component right here in the layout file
// using jsx() instead of JSX syntax
const Logo: Component.QuartzComponent = () => {
  return jsx("div", {
    class: "logo",
    children: jsx("a", {
      href: "/cascadesteam/",
      children: jsx("img", {
        src: "/cascadesteam/assets/images/Cascade_STEAM_horizontal_logo_primary.svg",
        alt: "Site Logo",
        width: "600px", 
        height: "178px"
      })
    })
  })
}
Logo.displayName = "Logo"
Logo.css = `
.logo {
  padding: 1rem;
  text-align: center;
}
`

const Footer: Component.QuartzComponent = () => {
  return jsx("footer", {
    class: "custom-footer",
    children: [
      // Contact Section
      jsx("div", {
        class: "footer-section",
        children: [
          jsx("h4", { children: "Contact Us" }),
          jsx("p", { children: "Email: hello@cascadesteam.org" }),
          jsx("p", { children: "Location: Washington, USA" }),
        ]
      }),
      
      // Social Media Links
      jsx("div", {
        class: "footer-section",
        children: [
          jsx("h4", { children: "Follow Us" }),
          jsx("div", {
            class: "social-links",
            children: [
              jsx("a", { href: "https://github.com/your-org", children: "GitHub" }),
              jsx("a", { href: "https://twitter.com/your-handle", children: "Twitter" }),
              jsx("a", { href: "https://linkedin.com/company/your-page", children: "LinkedIn" }),
            ]
          })
        ]
      }),

      // Copyright Section
      jsx("div", {
        class: "footer-bottom",
        children: jsx("p", { children: "© 2026 Cascade STEAM. All rights reserved." })
      })
    ]
  })
}
Footer.displayName = "CustomFooter"
Footer.css = `
.custom-footer {
  margin-top: 2rem;
  padding: 2rem 1rem;
  border-top: 1px solid var(--lightgray);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

.footer-section h4 {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: var(--dark);
}

.footer-section p, .social-links a {
  font-size: 0.9rem;
  color: var(--gray);
  text-decoration: none;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-links a:hover {
  color: var(--secondary);
  text-decoration: underline;
}

.footer-bottom {
  margin-top: 1rem;
  border-top: 1px solid var(--lightgray);
  padding-top: 1rem;
  font-size: 0.8rem;
  opacity: 0.8;
}
`;


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Logo,
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "GitHub": "https://github.com/growlf/cascadesteam",
    },
    Footer,
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.Breadcrumbs(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["assets", "README"])
    
        // can also use node.slug or by anything on node.data
        // note that node.data is only present for files that exist on disk
        // (e.g. implicit folder nodes that have no associated index.md)
        return !omit.has(node.displayName.toLowerCase())
      },
    }),
  ],
  right: [
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    //Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.Breadcrumbs(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["assets", "README.md"])
    
        // can also use node.slug or by anything on node.data
        // note that node.data is only present for files that exist on disk
        // (e.g. implicit folder nodes that have no associated index.md)
        return !omit.has(node.displayName.toLowerCase())
      },
    })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    //Component.Backlinks(),
  ],
}
