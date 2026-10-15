import '../index.css'

type CardInfo = {
  title:string,
  tech_stack: string,
  description: string,
  link: string,
}

function ProjectCard(content: CardInfo) {

  return ( 
      <div className="left-0 gap-3.5 pb-5">
        <div className="inline-flex flex-col justify-start gap-1">
            <div className="self-stretch justify-start text-yellow text-xl">{content.title}</div>
          <div className="self-stretch justify-start text-xs font-normal text-green">{content.tech_stack}</div>
          <div className="self-stretch justify-start text-base font-normal">{content.description}</div>
          <a href={content.link} className='text-base text-blue'>Link ↗︎</a>
        </div>
      </div>
  )
}

export default ProjectCard
