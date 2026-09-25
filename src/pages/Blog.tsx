import BlogLayout from '../components/BlogLayout.tsx'
import '../index.css'

function BlogView () {
  return (
    <body className='p-5'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className='pt-5 pb-5'>
          <BlogLayout />
          <a href='/' className='font-bold text-pink' >Home →</a>
        </div>

    <footer className='flex justify-between pt-2 static'>
      <p className='text-xs text-white'>©2026 Khadija Stewart. All Rights Reserved.</p>
      <div className='flex gap-5'>
        <a href='https://www.linkedin.com/in/khadijastewart/'className='text-xs text-white underline'>Linkedin</a>
        <a href='https://github.com/stwrtka'className='text-xs text-white underline'>GitHub</a>
      </div>
    </footer>
  </body>
  )
}

export default BlogView
