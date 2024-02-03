// import { Fragment } from "react";
import { MouseEvent, useState } from "react";

import { link } from "@nextui-org/react";
import { useLayoutEffect } from "react";

function ListGroup() {
    let items = ['Chennai','Tokyo','Nairobi','Berlin'];
    // let sindex = 0;
    // Hook
    const [sindex,setsindex]=useState(-1);
    // const [name,setname] = useState('');
    // arr[0]  //sindex
    // arr[1]  //updater function
    // items = [];
    // if(items.length === 0){
    //     return (<><h1>List</h1>
    //     <p>No Item Found</p>;
    //     </>)
        
    // }
    // rendering {}
    // const condition = items.length === 0?<p>No Item Found</p>:null;
    const condition = () =>{
        return items.length === 0?<p>No Item Found</p>:null;
    }
    // Event handling
    const handleClick = (event:MouseEvent)=> console.log(event);
  return (
    <>
        <h1>List</h1>
        {condition()}
        {/* {items.length === 0 && <p>NO ITEM FOUND</p>} */}
        <ul className="list-group">
            {items.map((item,index)=>(
            <li 
            className={sindex===index?'list-group-item active':'list-group-item'}  
            key={item} 
            // console.log(item,index)
            // handleClick
            onClick={ ()=>{ setsindex(index) ;}
            }>{item}</li>
            ))}
        </ul>
    </>
  );
}

export default ListGroup;
