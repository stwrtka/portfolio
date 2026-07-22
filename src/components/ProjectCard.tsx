import '../index.css'

type CardInfo = {
  title:string,
  tech_stack: string,
  description: string,
  git_link: string,
}

function ProjectCard(content: CardInfo) {
  return (
    <div className="w-72 h-40 relative overflow-hidden">
  <div className="size- left-0 top-[3.66px] absolute inline-flex justify-start items-center gap-3.5">
    <div className="size-40 relative bg-stone-100" />
    <div className="w-28 h-40 inline-flex flex-col justify-start items-start gap-1">
      <div className="self-stretch justify-start text-stone-100 text-lg font-normal font-['Inter']">{content.title}</div>
      <div className="self-stretch justify-start text-stone-100 text-lg font-normal font-['Inter']">{content.tech_stack}</div>
      <div className="self-stretch justify-start text-stone-100 text-lg font-normal font-['Inter']">{content.description}</div>
      <div className="self-stretch justify-start text-stone-100 text-lg font-normal font-['Inter']">{content.git_link}</div>
    </div>
  </div>
</div>
  )
}

export default ProjectCard
