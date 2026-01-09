// .github/quartz/Logo.tsx
import { QuartzComponentConstructor, QuartzComponentProps } from "quartz/components/types"

export default (() => {
  function Logo() {
    return (
      <div class="custom-logo">
        <a href="/">
          <img 
            src="https://example.com/logo.png" // Replace with your image URL
            alt="Logo" 
            style={{ width: "150px", height: "auto" }} 
          />
        </a>
      </div>
    )
  }
  return Logo
}) satisfies QuartzComponentConstructor
