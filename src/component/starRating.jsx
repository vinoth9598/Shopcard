import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating=()=>{
    const [starRating,setStarRating]=useState(null);
    return (
        <div>
            {
                [...Array(5)].map((star,i)=>{
                    const ratingVal=i+1;
                    return(
                        <label key={ratingVal}>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingVal}
                                onClick={()=>{
                                    setStarRating(ratingVal);
                                }}
                            />
                            <FontAwesomeIcon
                            className="starRating"
                            color={ratingVal<=starRating ? "#f1c40f":"#bdc3c7"}
                            icon={faStar} />
                            
                        </label>
                    )
                })
            }
        </div>
    )
}

export default StarRating;