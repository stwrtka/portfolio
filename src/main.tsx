import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProjectCard from './components/ProjectCard.tsx'
import Blog from './components/BlogLayout.tsx'
import Logo from './assets/logo.svg'
import FinalStory from './assets/3ds-side-by-side.png'
import NomRoulette from './assets/nom-roulette-logo.svg'
import Train from './components/Train.tsx'
import BunnyNoEyes from './assets/bunny-no-eyes.svg'


import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div className="flex flex-col text-stone-100 no-scrollbar min-h-screen font-body">
      <div className='flex-1'>
        <div className='inline-flex flex-col justify-start items-start grow pl-14.75 pt-55'>
          <img src={Logo} alt="Khadija Stewart" className='md:scale-150 sm:scale-50 lg:scale-175 pl-20 py-10'/>
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

    <footer className='w-full bg-accent p-2'>
      <div className='flex flex-row gap-230 items-center'>
        <p className='text-sm'>©2026 Khadija Stewart. All Rights Reserved.</p>
          <img src={BunnyNoEyes} alt="Logo"/>
      </div>
    </footer>
  </div>
  </StrictMode>
)
