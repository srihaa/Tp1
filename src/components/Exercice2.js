import React,{useState} from 'react';
import {FaStar} from 'react-icons/fa'

function Exercice2(){
   
   const [rating, setRating] = useState(null);
   
    return (
        <div>
        <h2>Exercice2</h2> <br/><br/>

        {[...Array (5)].map((star,i)=>{

            const ratingValue=i+1;

          return (
              <label>
                  <input 
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={()=>setRating(ratingValue)}
                />
            <FaStar
             className="star"
              color={ratingValue<=rating?"#ffc107":"#e4e5e9"} size={70} 
              />
            </label>
          );
        })}
        
        
        
        
      </div>

    );
}

export default Exercice2