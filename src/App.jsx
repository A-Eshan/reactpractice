import './App.css'
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import {CORE_CONCEPTS, EXAMPLES} from './data.js'
import TabButton from './components/TabButton.jsx'

import {useState} from 'react'


function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedButton)=>{
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic</p>

  if(selectedTopic){

    tabContent = (
      <div className='bg-slate-50'>
          <h1>{EXAMPLES[selectedTopic].title}</h1>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>{EXAMPLES[selectedTopic].code}</pre>
      </div>
    )
  }

  return (
    <>
      <Header />

      <main className='core-concept'>
        <ul className='flex'>
          {CORE_CONCEPTS.map((conceptItem)=>(
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </main>

      <section className='example'>
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic === 'components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={()=>handleSelect('state')}>State</TabButton>
        </menu>
      </section>
      {tabContent}
      {/* {!selectedTopic && <p>Please select a topic</p>}
      {selectedTopic && (
        <div className='bg-slate-50'>
          <h1>{EXAMPLES[selectedTopic].title}</h1>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>{EXAMPLES[selectedTopic].code}</pre>
        </div>
      )} */}
      
    </>
  )
}

export default App
