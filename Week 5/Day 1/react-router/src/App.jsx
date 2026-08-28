import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
    return (
        <div className="bg-[var(--bg-dark)] text-[var(--text-secondary)] w-full min-h-[100vh] leading-relaxed overflow-x-hidden">
            <BrowserRouter>
                <Navbar />

                <main className="max-w-[var(--max-width)] my-0 mx-auto pt-10 pb-13 px-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:id" element={<ProjectDetails />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App