import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { $ } from './select';
import { logo } from './components/logo';
import { counter } from './components/counter';

const app = $('#app');

app.innerHTML = `
  <div>
    ${logo("https://vitejs.dev", viteLogo, "Vite logo")}
    ${logo("https://www.typescriptlang.org/", typescriptLogo, "TypeScript logo")}
   
    <h1>FACE TO FACE</h1>
    ${counter()}
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
const button = $('#counter')
setupCounter(button);