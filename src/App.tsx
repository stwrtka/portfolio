import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home.tsx";
import BlogView from './pages/Blog.tsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<BlogView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;