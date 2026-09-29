import '../index.css'

function Home () {
   return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="flex flex-col text-white no-scrollbar min-h-screen font-body p-5">
        <div className='flex-1 pt-5'>
          <h1 className='text-5xl pb-2'>Khadija Stewart</h1>
          <p className='border-b-2 w-120 py-2'>Computer Science, CTS & Math @ University of Guelph</p>
          <ul className='pt-2'>
            <li>Curr. Graphic Design @ UofTHacks</li>
            <li>Prev. Undergraduate Research Assistant @ University of Guelph</li>
          </ul>
         <p><br></br>Seeking 2027 Summer Internships</p>
      </div>

      <a href='/blog' className='font-bold text-pink'>blog →</a>
      <a href='/design' className='font-bold text-green'>design →</a>
      <a href='/projects' className='font-bold text-yellow'>projects →</a>

      <footer className='flex justify-between pt-2 static'>
        <p className='text-xs text-white'>©2026 Khadija Stewart. All Rights Reserved.</p>
        <div className='flex gap-5'>
          <a href='https://www.linkedin.com/in/khadijastewart/'className='text-xs text-white underline'>Linkedin</a>
          <a href='https://github.com/stwrtka'className='text-xs text-white underline'>GitHub</a>
        </div>
        </footer>
      </div>
    </div>
   )
}

export default Home;
