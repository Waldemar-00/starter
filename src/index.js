import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Ref from './UseRef'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormHook from './FormHook'


const root = createRoot(document.getElementById('root'))
root.render(
  <>
    <App />
    <Ref />
    <FormHook/>
  </>
)