import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';



const Gallery = () => {
  // const [category, setCategory] = useState('All');

  // Replace with actual image URLs
  const categories = useSelector((state)=>state.catagary )
  // const count = useSelector((state)=>state.catagary )
  const images = [
    { url: "./media/image 1.jpg", type: 'Photo' },
    { url: './media/image 2.jpeg', type: 'Photo' },
    { url: './media/image 3.jpeg', type: 'Photo' },
    { url: './media/image 4.avif', type: 'Photo' },
    { url: './media/image 5.jpeg', type: 'Photo' },
    { url: './media/image 6.webp', type: 'Photo' },
    { url: './media/image 8.jpg', type: 'Photo' },
    { url: './media/image 9.webp', type: 'Photo' },
    { url: './media/image 10.jpeg', type: 'Photo' },
    { url: './media/v1.mp4', type: 'Video' },
    { url: './media/v2.mp4', type: 'Video' },

  ];
  // const filteredImages = category === 'All' ? images : images.filter(img => img.type === category);

  const filteredImages = images.filter((img)=>{
    return img.type == categories?.catagary 
  })
  console.log(categories)

  return (
    <div className='py-4'>
      {/* <button onClick={() => setCategory('All')}>All</button>
      <button onClick={() => setCategory('Photo')}>Photo</button>
      <button onClick={() => setCategory('Video')}>Video</button> */}
       {/* <p className='font-extrabold '>{count}</p> */}

       {filteredImages.map((image, index) => (
        <div  className='inline-block'> 
        {
       image.type ==='Photo'?
         ( <img className='w-[20rem] h-[20rem] px-1 cursor-pointer hover:opacity-70 hover:scale-105' key={index} src={image.url} alt={`Image ${index}`} />):
         (<video className='w-[20rem] h-[20rem] px-1 cursor-pointer hover:opacity-70 hover:scale-105' key={index} src={image.url} alt={`Image ${index}`} />)   
            
        }
        
        
        
        </div>
       
      ))} 
    </div>
  );
};

export default Gallery;
