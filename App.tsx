import './src/App.css'
import DefaultPage from './src/components/pages/defaultPage'
import MainPageContentView from './src/components/pages/pageComponents/mainPageContentView'
import SportCategory from './src/enums/sportCategoryEnum'

function App() {
  return (
    <MainPageContentView
      pageContent={< DefaultPage sportCategory={SportCategory.oneOnOne}/>}
    />
  )
}

export default App