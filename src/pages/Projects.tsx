import ProjectCard from '../components/ProjectCard'
import '../index.css'

function Projects () {
   return (
    <div className=" cursor-custom flex flex-col text-white no-scrollbar min-h-screen font-body p-5">
        <title>projects.</title>
        <h2 className="text-2xl text-yellow tracking-wide pb-5 font-bold"> projects.</h2>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className='gap-10'>
            <ProjectCard title='Final Story' tech_stack='C, DevKitPro' description='2D shooter game for the 3Ds.' link='https://github.com/stwrtka/final-story'/>
            <ProjectCard  title='Nom Roulette' tech_stack='Figma' description="A roulette styled Figma prototype app that helps you decide what to eat. " link='https://www.figma.com/proto/gFWvx2QGcUpa9KjzOLQbNj/Nom-Roulette?node-id=106-410&p=f&viewport=151%2C392%2C0.12&t=CVQW6TUHVK1UMSC3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=106%3A410&page-id=0%3A1'/>
        </div>

        <a href='/' className='cursor-custom-pointer font-bold text-pink pt-5'>home →</a>
        <footer className='flex justify-between pt-5 static'>
            <p className='text-xs text-white'>©2026 Khadija Stewart. All Rights Reserved.</p>
            <div className='flex gap-5'>
                <a href='https://www.linkedin.com/in/khadijastewart/'className='cursor-custom-pointer text-xs text-white underline'>Linkedin</a>
                <a href='https://github.com/stwrtka'className='cursor-custom-pointer text-xs text-white underline'>GitHub</a>
            </div>
        </footer>
    </div>
   )
}

export default Projects;
