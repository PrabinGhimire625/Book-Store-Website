import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({type}) => {
    console.log(type);

  return (
   <>
   {/* for unique key for each book:::key={type._id} */}
<div class="max-w-sm rounded overflow-hidden shadow-lg my-10 key={type._id}">
  <img class="w-full" src="https://media.istockphoto.com/id/1186947949/photo/book.webp?b=1&s=170667a&w=0&k=20&c=4BWqLqQJwEAQXlG50HelDL0P5glHX9s0u2nrRymD-ds=" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{type.bookName}</div>
    <p class="text-black-700 text-base">Rs.{type.bookPrice}</p>
    <p class="text-gray-700 text-base">{type.description}</p>
    <button><Link to={`/book/${type._id}`}>See More</Link></button>
  </div>
</div>
   </>
  )
}


export default Card
