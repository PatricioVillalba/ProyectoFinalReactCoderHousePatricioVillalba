import "./App.css";

import {collection,query,where,getDocs} from "firebase/firestore";
import {db} from "./firebase/firebaseConfig";
import { useState } from "react";
import { useEffect } from "react";
import CardProducto from "./components/cardProducto/cardProducto";
import NavBar from "./components/NavBar/NavBar";


const App = () => {
  const [productos ,setProductos]=useState([]);

  useEffect(()=>{
    const getProductos = async () =>{
      const q = query (collection(db,'productos'));
      const querySnapShot = await getDocs(q);
      const docs =[];
      querySnapShot.forEach(
        (doc)=>{
          // console.log(doc.id," => ",doc.data());
          docs.push({...doc.data(),id:doc.id});
        }
      );
      setProductos(docs);
      console.log(productos);
    };
        getProductos();
  },[]);


  return (
    <div className="App">
        <NavBar/>
      <h1>Firebase</h1>
      <div style={{display: "grid", gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>

{productos? productos.map((producto)=>{
  return(
    <CardProducto producto={producto}/>
    )
  }):null}
  </div>
    </div>
  );
};

export default App;
