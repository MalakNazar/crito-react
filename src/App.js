
import './App.css';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Details from './components/Details/Details';
import PageNotFound from './Pages/PageNotFound';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NewsDesc from './components/NewsDesc/NewsDesc';
import Page3 from './Pages/page3';
import Page4 from './Pages/page4';
function App() {
  return (

    <div className="App">
      <BrowserRouter>
         

          <Routes>
            <Route exact path="/" element={<Page1/>}/>
            <Route exact path="/news" element={<Page2/>}/>
            <Route exact path="/page3/:id?" element={<Page3/>}/>
            <Route exact path="/Contact" element={<Page4/>}/>
            <Route exact path="*" element={<PageNotFound/>}/>
          </Routes>
 
      
      </BrowserRouter>
    
      
        
  

    </div>
  );
}

export default App;

 



 

