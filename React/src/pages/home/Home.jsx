import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios"

const Home = () => {
  //jaba api hit hanxu ani data ayara array ma basxa
  const [books, setBooks]=useState([]);
  const fetchBooks=async()=>{
    const response =await axios.get("http://localhost:3000/book");
    //console.log(response.data.data);  //last ko data chai backend ko data eg:  res .status(200) .json({ message: "Books fetched successfully!", data: books });
    if(response.status==200){
      setBooks(response.data.data);  //mathi books variables ma useState ko array ma backend bata book ayara store hunxa
    }
  }
  
  //jaba suruma pages run hunxa teti bela useEffect triger hunxa
  useEffect(()=>{
    fetchBooks()
  },[])
  //books ma book ko data ai sako console ninja ma herum 
  //console.log(books)

  return (
    <>
    <Navbar/>  
    {/* "flex "le sab card lai autai row ma dekhauxa. "flex-wrap" le chai arko row ma ni jharxa */}
   <div className="flex flex-wrap justify-evenly mt-20">
    {/* loop to show the book dynamically using map...check if book more tha 0 in books state then loop */}
      {
        books.length>0 && books.map((book)=>{
          return(
            // map bhitra pass vako obj ho yo book vanako
            <Card type={book}/>
          )
        })
      }
   </div>

    </>
  );
};
export default Home;
