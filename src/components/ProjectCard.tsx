import '../index.css'

type CardInfo = {
  icon?:string,
  title:string,
  tech_stack: string,
  description: string,
  link: string,
}

function ProjectCard(content: CardInfo) {
  if(content.icon)
    {
      return ( 
      <div className="w-80 h-30 relative overflow-hidden items-center">
        <div className="left-0 inline-flex justify-start">
          <img className="scale-90"  src={content.icon} />
          <div className="inline-flex flex-col justify-start gap-1">
            <a href={content.link}>
              <div className="self-stretch justify-start text-green text-base font-bold">{content.title}</div>
            </a>
            <div className="self-stretch justify-start text-sm font-normal  text-yellow">{content.tech_stack}</div>
            <div className="self-stretch justify-star text-xs font-normal">{content.description}</div>
          </div>
        </div>
      </div>
    )
  }
  return ( 
    <div className="w-80 h-30 relative overflow-hidden items-center">
      <div className="left-0 inline-flex gap-3.5">
        <div className="inline-flex flex-col justify-start gap-1">
          <a href={content.link}>
            <div className="self-stretch justify-start text-green text-base font-bold">{content.title}</div>
          </a>
          <div className="self-stretch justify-start text-base font-normal text-yellow">{content.tech_stack}</div>
          <div className="self-stretch justify-start text-xs font-normal">{content.description}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
