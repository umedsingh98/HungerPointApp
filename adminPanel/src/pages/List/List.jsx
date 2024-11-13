import React, { useEffect, useState } from 'react'
import "./list.css"
import axios from 'axios';
import del from "../../assets/delete.png";
import edit from "../../assets/edit.png";
import { toast } from 'react-toastify';
const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    console.log("hello k")
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if(response.data.success){
      setList(response.data.data);
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message);
    }
    else{
      toast.error(response.data.message);
    }
  }

  useEffect(() => {
    fetchList();
  }, [])
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <p>Image</p>
          <p>Name</p>
          <p>Description</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>
        {
          list.map((item, index) => (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/`+item.image} alt="food-img" />
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <div className='btns'>
              <img id='edit' src={edit} alt="" />
              <img onClick={() => removeFood(item._id)} id='delete' src={del} alt="" />
              </div>
            </div>
          )) 
        }
      </div>
    </div>
  )
}

export default List