import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProjectCard from './components/ProjectCard.tsx'
import './index.css'

/* 
 <img className="sticky top-0" src='src\assets\footer.svg'/>
*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col h-screen color-stone-100">

      <header className="sticky top-0">
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <h2>
                <a className="w-36 h-16 justify-start text-xl font-normal font-['Bowlby_One_SC'] leading-[79.86px] tracking-[3.53px]" href="#"> PROJECTS </a>
              </h2>
            </li>
            <li>
              <h2>
                <a className="w-36 h-16 justify-start text-xl font-normal font-['Bowlby_One_SC'] leading-[79.86px] tracking-[3.53px]" href="#"> DESIGNS </a>
              </h2>
            </li>
            <li>
              <h2>
                <a className="w-36 h-16 justify-start text-xl font-normal font-['Bowlby_One_SC'] leading-[79.86px] tracking-[3.53px]"  href="#"> BLOG </a>
              </h2>
            </li>
          </ul>
        </div>
      </header>
      
      <div className="left-14.75 top-95 absolute inline-flex flex-col justify-start items-start grow">
          <img src='src\assets\logo.svg'/>
          <div className="grid grid-cols-3 gap-20 p-10">
            <ProjectCard title='tiel' tech_stack='wfonwqfon' description='qejofowf' git_link='eqoinoqne'/>
            <ProjectCard title='tiel' tech_stack='wfonwqfon' description='qejofowf' git_link='eqoinoqne'/>
            <ProjectCard title='tiel' tech_stack='wfonwqfon' description='qejofowf' git_link='eqoinoqne'/>
            <ProjectCard title='tiel' tech_stack='wfonwqfon' description='qejofowf' git_link='eqoinoqne'/>
          </div>
        </div>
      
       
    </div>
    
  </StrictMode>
)
