import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Backgroundbox from './backgroundbox'
import Dishcontainer from './Dishcontainer'
import Featurebox from './Featurebox.jsx'
import Greycontainer from './Greycontainer.jsx'
import Textbox from './Textbox.jsx'
import Popularitems from './Popularitems.jsx'
import Footer from './Footer.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Backgroundbox/>
    <Dishcontainer/>
    <Featurebox/>
    <Greycontainer/>
    <Textbox/>
    <Popularitems/>
    <Footer/>
  </React.StrictMode>,
)
