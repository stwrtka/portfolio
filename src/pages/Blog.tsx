import BlogLayout from '../components/BlogLayout.tsx'
import '../index.css'

function BlogView () {
  return (
    <body className='cursor-custom p-5'>
    <title>design.</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className='pt-5 pb-5'>
          <BlogLayout />
          <a href='/' className='cursor-custom-pointer font-bold text-pink pt-5'>home →</a>
        </div>

    <footer className='flex justify-between pt-2 static'>
      <p className='text-xs text-white'>©2026 Khadija Stewart. All Rights Reserved.</p>
      <div className='flex gap-5'> 
        <a href='https://www.linkedin.com/in/khadijastewart/'className='cursor-custom-pointer text-xs text-white underline'>Linkedin</a>
        <a href='https://github.com/stwrtka'className='cursor-custom-pointer text-xs text-white underline'>GitHub</a>
      </div>
    </footer>
  </body>
  )
}

export default BlogView
