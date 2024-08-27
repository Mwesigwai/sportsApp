import './src/App.css'
import DefaultPage from './src/components/pages/defaultPage'
import MainPageContentView from './src/components/pages/pageComponents/mainPageContentView'

function App() {
  return (
    <MainPageContentView
      pageContent={< DefaultPage/>}
    />
  )
}

export default App