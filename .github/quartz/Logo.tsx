// .github/quartz/Logo.tsx
import { QuartzComponentConstructor, QuartzComponentProps } from "quartz/components/types"

export default (() => {
  function Logo() {
    return (
      <div class="custom-logo">
        <a href="/">
          <img src="/cascadesteam/assets/images/Cascade_STEAM_horizontal_logo_primary.svg" width="600" height="178">        
        </a>
      </div>
    )
  }
  return Logo
}) satisfies QuartzComponentConstructor
