import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// instead of "import Logo from "./Logo.tsx" -
// Define the component right here in the layout file
// const Logo: Component.QuartzComponent = () => {
//   const html = `
//     <div class="logo">
//       <a href="/">
//         <img src="/cascadesteam/assets/images/Cascade_STEAM_horizontal_logo_primary.svg" width="600" height="178">
//       </a>
//     </div>
//   `
//   return { __html: html } as any
// }
// // Add display name for debugging (optional but recommended)
// Logo.displayName = "Logo"
// // If you need styling, you can also define it inline or use Quartz's existing classes
// Logo.css = `
// .logo {
//   padding: 1rem;
//   text-align: center;
// }
// .logo img {
//   max-width: 200px;
//   height: auto;
// }
// `


import { jsx } from "preact/jsx-runtime"

// Define your Logo component using jsx() instead of JSX syntax
const Logo: Component.QuartzComponent = () => {
  return jsx("div", {
    class: "logo",
    children: jsx("a", {
      href: "/cascadesteam/",
      children: jsx("img", {
        src: "/cascadesteam/assets/images/Cascade_STEAM_horizontal_logo_primary.svg",
        alt: "Site Logo",
        width: "600px", 
        height: "178"
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
.logo img {
  max-width: 200px;
  height: auto;
}
`
















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
        const omit = new Set(["assets", "README"])
    
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
