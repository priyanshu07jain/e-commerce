import { useEffect,useState } from "react";

function App(){
  const [product,setProduct]=useState([]);
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/products')
    .then(response=>response.json())
    .then(data=>setProduct(data))
    .catch(e=>console.error("error fetching messgae",e));

    
  },[])


  useEffect(()=>{
    console.log(product)
  },[product])
  return(
<div className="font-bold bg-amber-800">
{product.map((el)=>(
  <div key={el.id}>
    <img src={`../backend/backend${el.image}`}  alt="" />
    <h3>{el.name}</h3>
    <h4>{el.price}</h4>
  </div>
))}
</div>
  )
}

export default App;