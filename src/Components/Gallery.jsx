import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

const Gallery = () => {
  // const [category, setCategory] = useState('All');

  // Replace with actual image URLs
  const categories = useSelector((state) => state.catagary);
  // const count = useSelector((state)=>state.catagary )
  const images = [
    { url: "./media/image 1.jpg", type: "Photo" },
    { url: "./media/image 2.jpeg", type: "Photo" },
    { url: "./media/image 3.jpeg", type: "Photo" },
    { url: "./media/image 4.avif", type: "Photo" },
    { url: "./media/image 5.jpeg", type: "Photo" },
    { url: "./media/image 6.webp", type: "Photo" },
    { url: "./media/image 8.jpg", type: "Photo" },
    { url: "./media/image 9.webp", type: "Photo" },
    { url: "./media/image 10.jpeg", type: "Photo" },
    { url: "./media/v1.mp4", type: "Video" },
    { url: "./media/v2.mp4", type: "Video" },
  ];
  const filteredImages =
    categories?.catagary === "All"
      ? images
      : images.filter((img) => img.type === categories?.catagary);


  return (

    <div className="py-4">
   
      {filteredImages.map((image, index) => (
        <div className="inline-block" key={index}>
          
          {image.type === "Photo" ? (
            <a href={`${image.url}`} >
           <img
              className="w-[20rem] h-[20rem] px-1 cursor-pointer hover:opacity-70 hover:scale-105 duration-300"
              src={image.url}
              alt={`Image ${index}`}
            /> 
          </a>
           
          ) : (
            <a href={`${image.url}`} >
             <video
              className="w-[20rem] h-[20rem] px-1 cursor-pointer hover:opacity-70 hover:scale-105 duration-300 translate-x-2 transform"
              key={index}
              src={image.url}
              alt={`Video ${index}`}
              controls 
              muted={true}/>
            </a>
            
          )}
          
        </div>
      ))}
       
    </div>
   
  );
};

export default Gallery;
