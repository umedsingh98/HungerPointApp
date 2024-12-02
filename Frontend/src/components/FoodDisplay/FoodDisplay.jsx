import React, { useContext } from 'react'
import '../FoodDisplay/foodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../Food Item/FoodItem';
const FoodDisplay = ({category}) => {
  
  const {food_list} = useContext(StoreContext);
  console.log(food_list);
  console.log("list is here");
    return (

    <div className='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {
                food_list.map((item, index) => {
                  console.log(item);
                  if(category === "All" || category === item.category){
                    
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
              
                  }
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay