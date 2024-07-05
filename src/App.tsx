import { GlobalStyles } from "./styles/globalStyles"
import { Router } from './routes/index.routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
      <>
        <GlobalStyles />
        <ToastContainer />
        <Router />
      </>
  )
}

export { App }
