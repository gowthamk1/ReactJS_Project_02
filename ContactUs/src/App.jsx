import './App.css'
import ContactForm from './Componants/ContactForm/ContactForm'
import ContactHeader from './Componants/Contactheader/ContactHeader'
import Navigation from './Componants/Navigation/Navigation'

function App() {
  

  return (
    <>
      <div>
        <Navigation/>
        <main className='main_container'>
          <ContactHeader/>
          <ContactForm/>
        </main>
      </div>
    </>
  )
}

export default App
