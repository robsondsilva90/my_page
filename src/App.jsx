
// Statics
import './App.css';

// Imports
import { Outlet } from 'react-router-dom';
import { ProjectProvider } from './components/context';

// Componets
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToBottom from './components/ScrollBottom';

const App = () => {

  return (
    <>
      <Navbar />
      <div className="App">
        < ProjectProvider>
        <Outlet />
        <ScrollToBottom />
        </ProjectProvider>
      </div>
      <Footer />

    </>
  )
}

export default App;
