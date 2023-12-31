import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Ref from './UseRef'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormHook from './FormHook'
// import NewHooks from'./reactHooks/NewHooks'
import Memo from './reactHooks/Memo'
import PureMemo from './reactHooks/PureComponent'
import UpdateMemo from './reactHooks/shouldComponentUpdate'
import Context from './reactHooks/Context'
import ContextInHook from './reactHooks/ContextInhook'
import Hoc from './hoc/Hoc'

const root = createRoot(document.getElementById('root'))
root.render(
  <>
    <App />
    <ContextInHook/>
    <Context/>
    <Ref />
    <FormHook />
    {/* <NewHooks /> */}
    <Memo />
    <PureMemo />
    <UpdateMemo />
    <Hoc/>
  </>
)