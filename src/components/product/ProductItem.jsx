import React, {useState} from "react";

export default function ProductItem({items}) {

  const [value, setvalue]=useState('')
  const [filters, setfilters]=useState(items)

  function searchproducts(event){
   const  newvalue = event.target.value.toLocaleLowerCase()
   const filters = items.filter(element => element.title.toLocaleLowerCase().includes(newvalue))
  setfilters(filters)
  setvalue(newvalue)
  }



  return <div style={{backgroundColor: 'green'}}>
    <h1>display products</h1>
    <form >
      <label >
      search :<input type="text" 
      value={value}
      onChange={searchproducts}
      
      />
      </label>

    </form>
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
      {filters.map(element => {
        return <div key ={element.id}>
          <p>{element.title}</p>
            <p>{element.price}</p>
            <img  src={element.image} alt={element.title} width='200px'/>
        </div>
      })}
    </div>

  </div>;
}
