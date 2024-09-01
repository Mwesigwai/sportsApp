import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './src/App.css'
import DefaultPage from './src/components/pages/defaultPage'
import MainPageContentView from './src/components/pages/pageComponents/mainPageContentView'
import Navigation from './src/components/pages/pageComponents/navigation'
import UpdatesPage from './src/components/pages/updatesPage'

function App() {
  return (
    <BrowserRouter basename='sportsApp'>
      <Routes>
        <Route path='/' element={<Navigation
          homeIconUrl='/sportsApp/images/home.png'
          updatesIconUrl='/sportsApp/images/updates.png'
          starIconUrl='/sportsApp/images/star.png' />}>

          <Route index element={<DefaultPage />} />
          <Route path='updates' element={<UpdatesPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App