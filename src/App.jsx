import Menu from './assets/Menu/Menu.jsx'
import Sidebar from './assets/Sidebar/Sidebar.jsx'
import Title from './assets/Title/Title.jsx'
import Home from './assets/Home/Home.jsx'
import Projetos from './assets/Projetos/Projetos.jsx'
import Contato from './assets/Contato/Contato.jsx'
import Sobre from './assets/Sobre/Sobre.jsx'
import { PageContext } from './assets/Context/PageContext.jsx'
import { useContext } from 'react'
import './App.css'

function App() {
  const { page } = useContext(PageContext);

  const pageComponents = {
    Home: Home,
    Projetos: Projetos,
    Contato: Contato,
    Sobre: Sobre
  }

  function getPageComponent() {
    const PageComponent = pageComponents[page];
    return PageComponent ? <PageComponent /> : null;
  }
  
  return (
    <div className='container'>
      <div className='content'>
        {getPageComponent()}
        <Title />
        <Sidebar />
        <Menu />
      </div>
    </div>
  )
}

export default App
