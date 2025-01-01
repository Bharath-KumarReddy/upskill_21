import React from 'react'
import Cards from './Cards';

const App = () => {

  const items = [
    { id: 1, name: "Running Shoe", price: 120, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D" },
    { id: 2, name: "Running Shoe", price: 100, img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww" },
    { id: 3, name: "Sports Ware", price: 200, img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8fDA%3D" },
    { id: 4, name: "Sports Ware", price: 250, img: "https://media.istockphoto.com/id/1152677435/photo/turquoise-rubber-sneakers.webp?a=1&b=1&s=612x612&w=0&k=20&c=T1A1sdMChkgPaqbddLO7sXr_vbaofAiGTj4u6xcnZ_E=" },
    { id: 5, name: "Casual shoe", price: 300, img: "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D" },
    { id: 6, name: "Casual shoe", price: 500, img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fHww" },
  ];

  return (
    <>
    
    <h1 className='text-white text-center  text-3xl text-orange-600 mt-[8%]'>All cards are here</h1>
    <Cards items={items}/>

    </>
  )
}

export default App
