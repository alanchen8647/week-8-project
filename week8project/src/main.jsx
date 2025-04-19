import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router'
import App from './App.jsx'
import Navbar from './route/layout.jsx'
import PlayerList from './components/playerPage.jsx'
import CreatePlayer from './components/createPlayer.jsx'
import EditPage from './components/editPage.jsx'
import AboutPage from './components/about.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Navbar/>}>
          <Route index={true} path='/' element={<App/>}></Route>
          <Route index={false} path='/player' element={<PlayerList/>}></Route>
          <Route index={false} path='/create' element={<CreatePlayer/>}></Route>
          <Route index={false} path='/player/edit/:id' element={<EditPage/>} ></Route>
          <Route index={false} path='/about' element={<AboutPage/>} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
