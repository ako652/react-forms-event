import React ,{useState} from "react";

export default function SearchForm() {
  const [val , setval]= useState('')

  function onchangeinput (event){
   setval(event.target.value)
  }
  return <div>
    <form action="./">
      <label >
        username 
        <input type="text" name="username" onChange={onchangeinput}/>
      </label>
    </form>

    <p>mr {val}  is studying for a degree</p>
  </div>;
}
