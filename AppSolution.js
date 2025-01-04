import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Catch-all route should be first to prevent conflicts */}
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {return <div>Home</div>}
function About() {return <div>About</div>}
function NotFound() {return <div>Not Found</div>}