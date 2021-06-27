import Navbar from "./components/Navbar"
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import './App.css';
import {useState, useEffect } from "react";
import getMarvelBaseAuth from './api/marvelAPI';
import Home from "./components/pages/Home.js";
import Products from "./components/pages/Products.js";
import ComicPage from "./components/pages/ComicPage";

function App() {
  const [url,setUrl]=useState('');
  const [isLoading,setIsLoading]=useState(true);
  const baseUrl = getMarvelBaseAuth();
  useEffect(() => {
    async function  marvelAPI(){
    fetch(`https://gateway.marvel.com:443/v1/public/comics?dateDescriptor=thisMonth&orderBy=-onsaleDate&limit=10&${baseUrl}`)
      .then(
              (result)=>{
                  console.log(result.url+"*********** result url")
                  setUrl(result.url)
                  setIsLoading(false);
              },(error)=>{
                  console.log(error)
        }
          )
   }
   marvelAPI();
  }, [])
  
useEffect(() => {
  document.title = "My comic page"
}, []);

  return isLoading ? (<h4>loding...</h4>):(
<>

 <Router>
 <Navbar />
  <Switch>
    <Route path='/' exact component ={()=>{return <Home url={url}/>}}/>
    <Route path='/Products' component={Products}/>
    <Route path='/ComicPage/:id' component={ComicPage}/>
  </Switch>
  </Router>

</>
  
  );

}

export default App;
