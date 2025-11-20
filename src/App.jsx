import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import WeeklySpread from './components/WeeklySpread'
import AppNavbar from './components/AppNavbar'

function App() {
  return <HashRouter>
    <AppNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/weekly" element={<WeeklySpread />} />
    </Routes>
  </HashRouter>
}

export default App