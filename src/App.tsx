import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home.tsx";
import BlogView from './pages/Blog.tsx';
import DesignView from './pages/Design.tsx';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<BlogView />} />
                <Route path="/design" element={<DesignView />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App;