import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProjectCard from './components/ProjectCard.tsx'
import Blog from './components/BlogLayout.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col h-screen color-stone-100 no-scrollbar">

      <div className="left-14.75 top-95 absolute inline-flex flex-col justify-start items-start grow">
        <img src='/src/assets/logo.svg'/>
        <div id="projects" className="grid grid-cols-3 gap-20 p-10">
          <ProjectCard icon='/src/assets/3ds-side-by-side.png' title='Final Story' tech_stack='C, DevKitPro' description='3Ds Game' git_link='https://github.com/stwrtka/final-story'/>
          <ProjectCard icon='/src/assets/nom-roulette-logo.svg' title='Nom Roulette' tech_stack='Figma, React' description="Can't decide what to eat?" git_link='https://github.com/stwrtka/Nom-Roulette'/>
        </div>
      <div id="blog" className='pb-'>
        <Blog />
      </div>
      <img className="sticky top-0" src='/src/assets/footer.svg'/>
    </div>
  </div>
  
  </StrictMode>
)
