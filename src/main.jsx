import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



// How to style react component with css 
// there are three main ways to stype react components with css:
// 1. Inline Styling: You can apply styles directly to the component using the `style` attribute. This is done by passing an object with CSS properties and values. For example, in the Button component above, we defined a `styles` object and applied it to the button element.

// 2. CSS Modules: This approach allows you to create a separate CSS file for your component and import it into your component file. The CSS classes are scoped locally to the component, preventing naming conflicts. You would create a file named `button.module.css`, define your styles there, and then import it into your Button component.

// 3. External
//   CSS Files: You can also create a global CSS file (e.g., `index.css`) and import it into your main entry file (e.g., `main.jsx`). This allows you to define styles that can be applied across multiple components. However, be cautious with this approach as it can lead to naming conflicts and unintended style overrides.