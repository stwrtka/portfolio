import '../index.css'

function Home () {
   return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>home.</title>
      <div className="cursor-custom flex flex-col text-white no-scrollbar min-h-screen font-body p-5">
        <div className='flex-1 pt-5 content-center'>
          <h1 className='text-5xl pb-2'>Khadija Stewart</h1>
          <p className='border-b-2 w-120 py-2'>Computer Science, Math & CTS @ University of Guelph</p>
          <ul className='pt-2'>
            <li>Graphic Designer @ UofTHacks14</li>
            <li> Graphic Designer @ BearHacks2027</li>
            <li>Prev. Undergraduate Research Assistant @ University of Guelph</li>
          </ul>
         <p><br></br>Seeking 2027 Summer Internships</p>
       <div className='flex gap-3 pt-5'>
        <a href='/blog' className='cursor-custom-pointer font-bold text-pink'>blog</a>
        <a href='/design' className='cursor-custom-pointer font-bold text-green'>design</a>
        <a href='/projects' className=' cursor-custom-pointer font-bold text-yellow'>projects</a>
        <a href='https://149hst.itch.io/' className=' cursor-custom-pointer font-bold text-blue'>sidequest</a>
      </div>
      </div>

      <footer className='flex justify-between pt-2 static'>
        <div className='flex gap-5'>
          <a href='https://www.linkedin.com/in/khadijastewart/'className='cursor-custom-pointer cursor-custom-pointer text-xs text-white underline'>Linkedin</a>
          <a href='https://github.com/stwrtka'className='cursor-custom-pointer text-xs text-white underline'>GitHub</a>
        </div>
        <p className='text-xs text-white'>©2026 Khadija Stewart. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
   )
}

export default Home;
