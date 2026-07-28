import '../index.css'

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
        <div className="left-0 top-[3.66px] absolute inline-flex justify-start items-center gap-3.5">
          <img className="relative" src={content.icon} />
          <div className="w-45 h-30 inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-stone-100 text-base font-normal font-['Inter'] underline">{content.title}</div>
            <div className="self-stretch justify-start text-stone-100 text-sm font-normal font-['Inter']">{content.tech_stack}</div>
            <div className="self-stretch justify-start text-stone-100 text-xs font-normal font-['Inter']">{content.description}</div>
            <a href={content.git_link} className="self-stretch justify-start text-stone-100 text-sm font-normal font-['Inter']">/git</a>
          </div>
        </div>
      </div>
    )
  }
  return ( 
    <div className="w-80 h-40 relative overflow-hidden">
      <div className="left-0 top-[3.66px] absolute inline-flex justify-start items-center gap-3.5">
      <div className="size-35 relative bg-stone-100" />
        <div className="w-45 h-40 inline-flex flex-col justify-start items-start gap-1">
          <div className="self-stretch justify-start text-stone-100 text-base font-normal font-['Inter'] underline">{content.title}</div>
          <div className="self-stretch justify-start text-stone-100 text-base font-normal font-['Inter']">{content.tech_stack}</div>
          <div className="self-stretch justify-start text-stone-100 text-xs font-normal font-['Inter']">{content.description}</div>
          <a href={content.git_link} className="self-stretch justify-start text-stone-100 text-base font-normal font-['Inter']">/git</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
