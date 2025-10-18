import './App.css'
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import {CORE_CONCEPTS} from './data.js'
import TabButton from './components/TabButton.jsx'


function App() {

  const handleSelect = ()=>{
    console.log('Hello World - Selected !')
  }

  return (
    <>
      <Header />

      <main className='core-concept'>
        <CoreConcept
          image={CORE_CONCEPTS[0].image}
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
        />
        <CoreConcept
          image={CORE_CONCEPTS[1].image}
          title={CORE_CONCEPTS[1].title}
          description={CORE_CONCEPTS[1].description}
        />
        <CoreConcept
          image={CORE_CONCEPTS[2].image}
          title={CORE_CONCEPTS[2].title}
          description={CORE_CONCEPTS[2].description}
        />
        <CoreConcept { ...CORE_CONCEPTS[3]}/>
        
      </main>

      <section className='example'>
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={handleSelect}>Components</TabButton>
          <TabButton onSelect={handleSelect}>JSX</TabButton>
          <TabButton onSelect={handleSelect}>Props</TabButton>
          <TabButton onSelect={handleSelect}>State</TabButton>
        </menu>
        Dynamic Content
      </section>
    </>
  )
}

export default App
