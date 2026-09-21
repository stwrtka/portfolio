import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Blog from './components/BlogLayout.tsx'


import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div id="blog" className='pb-10 '>
          <Blog />
        </div>

    <footer className='w-full bg-accent p-2 static'>
      <p className='text-sm text-white'>©2026 Khadija Stewart. All Rights Reserved.</p>
    </footer>
  </StrictMode>
)
