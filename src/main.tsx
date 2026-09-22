import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProjectCard from './components/ProjectCard.tsx'
import FinalStory from './assets/3ds-side-by-side.png'
import NomRoulette from './assets/nom-roulette-logo.svg'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div className="flex flex-col text-white no-scrollbar min-h-screen font-body p-5">
      <div className='flex-1 pt-5'>
        <h1 className='text-5xl pb-5'>Khadija Stewart</h1>
        <div className='border-b-2 w-120 py-2'>
          <p>Computer Science, CTS & Math @ University of Guelph</p>
        </div>
        <div className='pt-2'>
          <ul>
            <li>Curr. Graphic Design @ UofT Hacks</li>
            <li>Prev. Undergraduate Research Assignment @ University of Guelph</li>
            <p><br></br>Seeking 2027 Summer Internships</p>
          </ul>
        </div>
      </div>
      <p>Blog →</p>
    
      <div id="projects" className="flex grid-cols-3 gap-20">
          <ProjectCard icon={FinalStory} title='Final Story' tech_stack='C, DevKitPro' description='3Ds Game' link='https://github.com/stwrtka/final-story'/>
          <ProjectCard icon={NomRoulette} title='Nom Roulette' tech_stack='Figma' description="Can't decide what to eat?" link='https://www.figma.com/proto/gFWvx2QGcUpa9KjzOLQbNj/Nom-Roulette?node-id=106-410&p=f&viewport=151%2C392%2C0.12&t=CVQW6TUHVK1UMSC3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=106%3A410&page-id=0%3A1'/>
      </div>

    <footer className='w-full p-2 static'>
      <p className='text-sm text-white'>©2026 Khadija Stewart. All Rights Reserved.</p>
    </footer>
  </div>
  </StrictMode>
)
