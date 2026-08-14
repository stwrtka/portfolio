import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProjectCard from './components/ProjectCard.tsx'
import Blog from './components/BlogLayout.tsx'
import Logo from './assets/logo.svg'
import FinalStory from './assets/3ds-side-by-side.png'
import NomRoulette from './assets/nom-roulette-logo.svg'
import Footer from './assets/footer.svg'
import Train from './components/Train.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col text-stone-100 no-scrollbar min-h-screen">
      <div className='flex-1'>
        <div className='inline-flex flex-col justify-start items-start grow pl-14.75 pt-55'>
          <img src={Logo} alt="Khadija Stewart" className='scale-150 pl-20 py-10'/>
          <div id="projects" className="flex grid-cols-3 gap-20 p-10">
            <ProjectCard icon={FinalStory} title='Final Story' tech_stack='C, DevKitPro' description='3Ds Game' git_link='https://github.com/stwrtka/final-story'/>
            <ProjectCard icon={NomRoulette} title='Nom Roulette' tech_stack='Figma, React' description="Can't decide what to eat?" git_link='https://github.com/stwrtka/Nom-Roulette'/>
          </div>
          <div id="blog" className='pb-10 font-Bowlby-One-SC'>
          <Blog />
        </div>
      </div>
    </div>
    
    <Train />

    <footer className='w-full'>
      <img src={Footer} alt='Footer' className='w-full' />
    </footer>
  </div>
  
  </StrictMode>
)
