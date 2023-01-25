import './App.css';
import Header from './Mycomponents/Header';
import Card from "./Mycomponents/Card";
import Display from './Mycomponents/Display';
import React, { useState , useEffect } from 'react';
import AddItems from './Mycomponents/AddItems';
import Footer from "./Mycomponents/footer";
function App() {

  let init;
  if (localStorage.getItem("list")===null) {
    init = [];
  }
  else{
    init = JSON.parse(localStorage.getItem("list"));
  }



  const onDelete=(item)=>{
    setlist(list.filter((e)=>{
      return e!==item;
    }));
    localStorage.setItem("list",JSON.stringify(list));
  }
  


const add=(name,desc)=>{
  let sno;
  if (list.length===0) {
    sno=0;
  }
  else{
    sno = list[list.length-1].sno + 1;
  }
  const my = 
    {sno : sno,
    name : name,
    desc : desc
  }
  
  setlist([...list,my]);
  
 
}
const [list, setlist] = useState(init);
useEffect(() => {
  localStorage.setItem("list",JSON.stringify(list));
},[list])



  return (
    <>
    <Header title="My List"/>
    <AddItems add={add}/>
    <Display list={list} onDelete={onDelete}/>
    <Footer/>

    </>
  );
}

export default App;
