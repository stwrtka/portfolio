import '../index.css'

type CardInfo = {
  title:string,
  date: string,
  course: string,
}


function BlogCard (content: CardInfo) {
  return (
    <div className="w-28 h-20 relative">
  <div className="w-28 h-16 left-0 top-0 absolute inline-flex flex-col justify-start items-start gap-1">
    <div className="self-stretch inline-flex justify-start items-start gap-1">
      <div className="w-28 justify-start text-base font-medium font-Bowlby-One-SC">{content.title}</div>
    </div>
    <div className="self-stretch justify-starttext-base font-medium font-Bowlby-One-SC">{content.date}</div>
    <div className="self-stretch justify-start text-base font-medium font-Bowlby-One-SC">{content.course}</div>
  </div>
</div>
  )
}

export default BlogCard
