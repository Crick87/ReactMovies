import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './components/Counter/Counter.jsx'
import MainHeader from './pages/MainHeader.jsx'
import FilterBar from './pages/FilterBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter initialValue={5} />
    <MainHeader/>
    <FilterBar/>
  </StrictMode>,
)
