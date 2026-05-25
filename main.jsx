import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Myapp from './Myapp.jsx'
import StudentList from './StudentList.jsx'
import Prop1 from './Prop1'
// import Prop2 from './Prop2'
import ProductList from './ProductList'
// import App1 from './App1.jsx'
import App3 from './App3.jsx'
import Event4 from './Event4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Myapp/> */}
    {/* <StudentList/> */}
    {/* <Prop1/> */}
    {/* <ProductList/> */}
    {/* <App1/> */}
    {/* <App3/> */}
    <Event4/>
    {/* <Prop2/> */}
  </StrictMode>,
)
   