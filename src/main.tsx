import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProjectCard from './components/ProjectCard.tsx'
import Blog from './components/BlogLayout.tsx'

import './index.css'

/* 
 <img className="sticky top-0" src='src\assets\footer.svg'/>
*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col h-screen color-stone-100 no-scrollbar">

      <header className=" top-0 ">
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <h3>
                <a className="w-36 h-16 justify-start text-xl font-normal font-['Bowlby_One_SC'] leading-[79.86px] tracking-[3.53px]" href="#projects"> PROJECTS </a>
              </h3>
            </li>
            <li>
              <h3>
                <a className="w-36 h-16 justify-start text-xl font-normal font-['Bowlby_One_SC'] leading-[79.86px] tracking-[3.53px]" href="https://www.instagram.com/149hst/"> DESIGNS </a>
              </h3>
            </li>
            <li>
              <h3>
                <a className="w-36 h-16 justify-start text-xl font-normal font-['Bowlby_One_SC'] leading-[79.86px] tracking-[3.53px]"  href="#"> BLOG </a>
              </h3>
            </li>
          </ul>
        </div>
      </header>

      <div className="left-14.75 top-95 absolute inline-flex flex-col justify-start items-start grow">
        <img src='src/assets/logo.svg'/>
        <div id="projects" className="grid grid-cols-3 gap-20 p-10">
          <ProjectCard icon='src/assets/3ds-side-by-side.png' title='Final Story' tech_stack='C, DevKitPro' description='3Ds Game' git_link='https://github.com/stwrtka/final-story'/>
          <ProjectCard icon='src/assets/nom-roulette-logo.svg' title='Nom Roulette' tech_stack='Figma, React' description="Can't decide what to eat?" git_link='https://github.com/stwrtka/Nom-Roulette'/>
        </div>

      <Blog />
    </div>
  </div>

  </StrictMode>
)
