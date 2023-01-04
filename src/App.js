import './App.css';
import ArtFrame from './components/Arts/ArtFrame';
import Header from './components/Layout/Header';
import ArtProvider from "./store/ArtProvider";


function App() {

  return (
    <ArtProvider>
      <div className="container">
        <Header />
        <ArtFrame />
      </div>
    </ArtProvider>
  );
}

export default App;
