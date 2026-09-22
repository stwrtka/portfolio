import BlogLayout from '../components/BlogLayout.tsx'
import '../index.css'

function BlogView () {
  return (
    <body>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div id="blog" className='pb-10 '>
          <BlogLayout />
        </div>

    <footer className='w-full bg-accent p-2 static'>
      <p className='text-sm text-white'>©2026 Khadija Stewart. All Rights Reserved.</p>
    </footer>
  </body>
  )
}

export default BlogView
