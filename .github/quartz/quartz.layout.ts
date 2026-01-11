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
      // Top Container for parallel sections
      jsx("div", {
        class: "footer-top",
        children: [
          // Contact Section
          jsx("div", {
            class: "footer-section",
            children: [
              jsx("h4", { children: "Contact Us" }),
              jsx("p", { children: "info@cascadesteam.org" }),
              jsx("p", { children: "Bellingham, Washington, USA" }),
            ]
          }),
          
          // Follow Us Section
          jsx("div", {
            class: "footer-section",
            children: [
              jsx("h4", { children: "Follow Us" }),
              jsx("div", {
                class: "social-icons",
                children: [
                  // GitHub
                  jsx("a", { 
                    href: "https://github.com/cascadesteam", 
                    ariaLabel: "GitHub",
                    children: jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                      jsx("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" })
                    ]})
                  }),
                  // LinkedIn
                  jsx("a", { 
                    href: "https://www.linkedin.com/company/cascadesteam", 
                    ariaLabel: "LinkedIn",
                    children: jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                      jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
                      jsx("rect", { x: "2", y: "9", width: "4", height: "12" }),
                      jsx("circle", { cx: "4", cy: "4", r: "2" })
                    ]})
                  }),
                  // Discord
                  jsx("a", { 
                    href: "http://hub.cascadesteam.org/", 
                    ariaLabel: "Discord",
                    children: jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                      jsx("path", { d: "M18 6a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6z" }),
                      jsx("circle", { cx: "9", cy: "12", r: "1" }),
                      jsx("circle", { cx: "15", cy: "12", r: "1" })
                    ]})
                  })
                ]
              })
            ]
          }),
        ]
      }),

      // Bottom Copyright
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
  margin-top: 3rem;
  padding: 2rem 1rem;
  border-top: 1px solid var(--lightgray);
}

.footer-top {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Ensures it stacks on mobile */
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  text-align: center;
}

.footer-section h4 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  color: var(--dark);
}

.footer-section p {
  font-size: 0.9rem;
  margin: 0.25rem 0;
  color: var(--gray);
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 0.5rem;
}

.social-icons svg {
  width: 24px;
  height: 24px;
  transition: transform 0.2s ease, color 0.2s ease;
  color: var(--gray);
}

.social-icons a:hover svg {
  transform: translateY(-3px);
  color: var(--secondary);
}

.footer-bottom {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.8rem;
  border-top: 1px solid var(--lightgray);
  padding-top: 1rem;
  color: var(--darkgray);
}
`


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Logo,
  ],
  afterBody: [
    Footer,
  ],
  footer: Component.Footer({
    // links: {
    //   "GitHub": "https://github.com/growlf/cascadesteam",
    // },
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
