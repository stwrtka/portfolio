import ProjectCard from '../components/ProjectCard'
import FinalStory from '../assets/3ds-side-by-side.png'
import NomRoulette from '../assets/nom-roulette-logo.svg'
import '../index.css'

function Projects () {
   return (
    <div className="flex flex-col text-white no-scrollbar min-h-screen font-body p-5">
        <h2 className="text-2xl text-yellow tracking-wide pb-5"> projects.</h2>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className='grid grid-cols-3 gap-5 place-items-center'>
            <ProjectCard icon={FinalStory} title='Final Story' tech_stack='C, DevKitPro' description='3Ds Game' link='https://github.com/stwrtka/final-story'/>
            <ProjectCard icon={NomRoulette} title='Nom Roulette' tech_stack='Figma' description="Can't decide what to eat?" link='https://www.figma.com/proto/gFWvx2QGcUpa9KjzOLQbNj/Nom-Roulette?node-id=106-410&p=f&viewport=151%2C392%2C0.12&t=CVQW6TUHVK1UMSC3-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=106%3A410&page-id=0%3A1'/>
        </div>

        <a href='/' className='font-bold text-pink pt-5'>home →</a>
        <footer className='flex justify-between pt-5 static'>
            <p className='text-xs text-white'>©2026 Khadija Stewart. All Rights Reserved.</p>
            <div className='flex gap-5'>
                <a href='https://www.linkedin.com/in/khadijastewart/'className='text-xs text-white underline'>Linkedin</a>
                <a href='https://github.com/stwrtka'className='text-xs text-white underline'>GitHub</a>
            </div>
        </footer>
    </div>
   )
}

export default Projects;
