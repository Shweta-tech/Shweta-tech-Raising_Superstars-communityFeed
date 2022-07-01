import Posts from './components/Posts/Posts';
import Header from "./components/Header/Header";

import {useData} from './useData'

import './App.css';


export default function App() {

  const data = useData();

  if(!data){
    return <div className="loading">loading....<i className="fas fa-cog fa-spin fa-10x"></i></div>

  }

  return (
    <div className="App">
      <Header/>
      <Posts data={data}></Posts>
    </div>
  );
}
