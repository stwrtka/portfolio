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

    <footer className='w-full bg-accent pt-2 pb-5 static'>
      <p className='text-sm text-white'>©2026 Khadija Stewart. All Rights Reserved.</p>
    </footer>
  </body>
  )
}

export default BlogView
