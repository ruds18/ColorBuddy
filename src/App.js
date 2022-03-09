import logo from './logo.svg';
import './App.css';
import Header1 from './components/header/Header1';
import Header2 from './components/header/Header2';
import { useEffect, useState } from 'react';
import Preloader from './components/preloader/Preloader';

function App() {

  

  const[loading, setLoading]  = useState(false);
  useEffect(()=>{
   setLoading(true);
   setTimeout(()=>{
    setLoading(false);
   },4000)
  },[])
  return (
   
   <div>
   {loading? <Preloader loading={loading} /> : <div><Header1/>
    <Header2 /></div>   }
      
   </div>
    
  );
}

export default App;
