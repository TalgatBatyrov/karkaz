import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Sidebar from './SideBar/Sidebar';
import Content from './Content/Content';
import Footer from './Footer/Footer';


function App() {
  return (
    <div>
      <div className="AppKarkaz">
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </div>

    </div>
  );
}

export default App;
