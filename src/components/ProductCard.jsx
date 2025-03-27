/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../App.css'
import RatingWidgit from './RatingWidgit';

const ProductCard = ({ data }) => {

    const [newRating, setNewRating] = useState(0);
    const [totalRatings, setTotalRatings] = useState(data.totalRatings);
  const [avgRating, setAvgRating] = useState(data.avgRating);

    const handleRating = (starCount) => {
        setNewRating(starCount)
        const newTotalRatings = totalRatings + 1;
        const newAvgRating = (avgRating * totalRatings + starCount) / newTotalRatings;

        setTotalRatings(newTotalRatings);
        setAvgRating(newAvgRating.toFixed(1));
    }


    return (
        <div className='productCard'>
            <h4 title='Name of the product'>{data.name}</h4>
            <p title='Description of the product'>{data.description}</p>
            <img src={data.image} alt={data.name + " picture"} title='Image of the product' />
            <h6 title='Avg rating of the product'>{avgRating}</h6>
            <h6 title='Total rating of the product'>{totalRatings}</h6>
            <RatingWidgit onRatingChange = {handleRating} />
        </div>
    );
}

export default ProductCard;
