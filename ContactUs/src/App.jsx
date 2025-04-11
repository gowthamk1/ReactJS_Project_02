import './App.css'
import ContactForm from './Componants/ContactForm/ContactForm'
import ContactHeader from './Componants/Contactheader/ContactHeader'
import Navigation from './Componants/Navigation/Navigation'

function App() {
  

  return (
    <>
      <div>
        <Navigation/>
        <ContactHeader/>
        <ContactForm/>
      </div>
    </>
  )
}

export default App
