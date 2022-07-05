import Posts from './components/Posts/Posts';
import Header from "./components/Header/Header";

import {useData} from './useData'

import './App.css';
import { useState } from 'react';


export default function App() {

  const [asc,setAsc] = useState(false);
  const [des,setDes] = useState(false);

 
  const handleClickAsc = () =>{
    if(asc === false){
      setAsc(true);
      setDes(false)
    }else if(asc === true){
      setAsc(false)
    }
  }

  const handleClickDesc = () =>{
    if(des === false){
      setDes(true);
      setAsc(false)
    }else if(des === true){
      setDes(false)
      
    }
  }
  const data = useData(asc,des);
  if(!data){
    return <div className="loading">loading....<i className="fas fa-cog fa-spin fa-10x"></i></div>

  }

  return (
    <div className="App">
      <Header/>
      <div className='sticky top-20 z-50'>

      <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  ${asc && 'bg-blue-800 '}`}  onClick={handleClickAsc}>
        Ascending
      </button>

      <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  ${des && 'bg-blue-800 '}`} onClick={handleClickDesc}>
        Descending
      </button>
      </div>
      <Posts data={data}></Posts>
    </div>
  );
}

