// import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// import { classNames } from "../util/lang"

// const CustomHeader: QuartzComponent = ({ children, displayClass }: QuartzComponentProps) => {
//   return (
//     <header class={classNames(displayClass, "header")}>
//       {/* Add your HTML image object here */}
//       <a href="/">
//         <img src="'assets/images/Cascade_STEAM_horizontal_logo_primary.svg'" alt="Site Logo" style={{ height: '150px', marginRight: '10px' }} />
//       </a>
//       {children}
//     </header>
//   )
// }
// export default (() => CustomHeader) satisfies QuartzComponentConstructor

import { QuartzComponent } from "./types"

const HeaderImage: QuartzComponent = () => {
  // You can add your custom HTML here
  return (
    <div class="header-image-container">
      <img src="/assets/images/Cascade_STEAM_horizontal_logo_primary.svg" alt="Cascade STEAM Site Logo" style={{ height: '150px', marginRight: '1rem' }} />
    </div>
  )
}

export default HeaderImage