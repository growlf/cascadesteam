import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// instead of "import Logo from "./Logo.tsx" -
// Define the component right here in the layout file
//
//     <div class="logo">
//         <a href="/">
//           <img src="/cascadesteam/assets/images/Cascade_STEAM_horizontal_logo_primary.svg" width="600" height="178">        
//         </a>
//     </div>

import { QuartzComponentConstructor, QuartzLayoutPage, QuartzComponentProps } from "./quartz/components/types";
// Define the Logo component directly within this file using an IIFE
const Logo: QuartzComponentConstructor = (() => {
  function LogoComponent(props: QuartzComponentProps) {
    // You can use inline CSS or a class name and link a custom SCSS file in the action config
    const logoStyle = `
      .logo-container {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .logo-img {
        height: 40px; /* Adjust size as needed */
        width: auto;
      }
      .logo-text {
        font-size: 1.5em;
        font-weight: bold;
        color: var(--dark);
      }
    `;
    
    // The image should be in your static folder (e.g., `static/my-logo.png`)
    const logoSrc = "/cascadesteam/assets/images/Cascade_STEAM_horizontal_logo_primary.svg";

    return (`
      <div class='logo-container'>
        <img src='{logoSrc}' alt='Cascade STEAM LOGO' class='logo-img' />
        <span class='logo-text'>{props.cfg.pageTitle}</span>
        {/* You can also add styles directly to the component as a property */}
        <style>{logoStyle}</style>
      </div>
    `);
  }
  
  // Return the component function wrapped in a constructor pattern
  return LogoComponent;
})();

// See https://quartz.jzhao.xyz/layout for more information

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Logo(),
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
