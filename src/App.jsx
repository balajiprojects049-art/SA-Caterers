import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import QuoteForm from './pages/QuoteForm';

function App() {
    return (
        <Router>
            <Routes>
                {/* Standalone page — no navbar/footer */}
                <Route path="/book" element={<QuoteForm />} />

                {/* Main site pages with navbar + footer */}
                <Route path="/*" element={
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/menu" element={<Menu />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </Layout>
                } />
            </Routes>
        </Router>
    );
}

export default App;
