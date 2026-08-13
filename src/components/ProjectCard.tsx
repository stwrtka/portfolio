import '../index.css'
import Bunny from '../assets/bunny.svg'

type CardInfo = {
  icon?:string,
  title:string,
  tech_stack: string,
  description: string,
  git_link: string,
}

function ProjectCard(content: CardInfo) {
  if(content.icon)
    {
      return ( 
      <div className="w-80 h-40 relative overflow-hidden">
        <div className="left-0 absolute inline-flex justify-start content-center gap-3.5">
           <a href={content.git_link}>
            <img className="relative" src={content.icon} />
            </a>
          <div className="w-45 h-30 inline-flex flex-col justify-start gap-1">
            <div className="self-stretch justify-start text-stone-100 text-base font-bold">{content.title}</div>
            <div className="self-stretch justify-start text-stone-100 text-sm font-normal">{content.tech_stack}</div>
            <div className="self-stretch justify-start text-stone-100 text-xs font-normal">{content.description}</div>
          </div>
        </div>
      </div>
    )
  }
  return ( 
    <div className="w-80 h-40 relative overflow-hidden">
      <div className="left-0 absolute inline-flex justify-start content-center gap-3.5">
        <a href={content.git_link}>
          <img className="relative scale-80" src={Bunny}/>
        </a>
        <div className="w-45 h-30 inline-flex flex-col justify-start gap-1">
          <div className="self-stretch justify-start text-stone-100 text-base font-bold">{content.title}</div>
          <div className="self-stretch justify-start text-stone-100 text-base font-normal">{content.tech_stack}</div>
          <div className="self-stretch justify-start text-stone-100 text-xs font-normal">{content.description}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
