import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home.tsx";
import BlogView from './pages/Blog.tsx';
import DesignView from './pages/Design.tsx';
import ProjectsView from './pages/Projects.tsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<BlogView />} />
                <Route path="/design" element={<DesignView />} />
                <Route path="/projects" element={<ProjectsView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;