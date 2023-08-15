import React from 'react';
import './App.css';
import {useState} from 'react'

function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]= useState('')
  const [editId,setEditId] = useState(0)
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
    
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() =>{
          if(toDo !== ''){
            setToDos([...toDos,{id:Date.now(), text:toDo, status:false}])}
          if(editId){
          
            const updateToDo = toDos.map((to)=>to.id === editId
            ? (to = {id : to.id , text : toDo})
            : (to = {id : to.id , text : to.text})
            )
            setToDos(updateToDo)
            setEditId(0);
            setToDo('')
          } 
            }}> {editId ? <i className="fas fa-edit"></i> : <i className="fas fa-plus"></i>}</i>
      </div>
      <div className="todos">
       { toDos.map((obj)=>{       
         return(<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
          <i onClick={()=>{
              const editToDo = toDos.find((to)=>to.id === obj.id)
              setToDo(editToDo.text)
              setEditId(editToDo.id);
            }} className="fas fa-edit"></i>
            <i onClick={()=>{
              setToDos(toDos.filter(obj2=> obj2.id !== obj.id))
            }} className="fas fa-times"></i>
          </div>
        </div>)
     }) }
  {toDos.map((obj)=>{
    if(obj.status){
      return(<h1>{obj.text}</h1>)
    }
    return null
   }) }

      </div>
    </div>
  );
    }

export default App;
