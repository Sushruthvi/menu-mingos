import React from 'react'

const MenuCard = ({menuData}) => {
    //    console.log(menuData);
  return (
   <>
   <section className='main-card--cointainer'>
   {menuData.map((curElem) => {
    const{id,image,name,category,price,description} = curElem;
    return(
        <>
       <div className='card-container' key={id}>
  <div className='card'>
    <div className='card-body'>
      <span className='card-number card-circle subtle'>{id}</span>
      <span className='card-author'>{category}</span>
      <h2 className='card-title'>{name}</h2>
      <span className='card-description subtle'>
        {description}
      </span>
      
      <div className='card-read'>Read</div>
      <img src={image} alt={name} className='card-media' />
      <div className='card-price subtle'>Price:{price}</div> 
      <span className='card-tag subtle'>Order Now</span>
    </div>
  </div>
</div>

       
       </>
    )
   })}
  </section>
   </>
  )
}

export default MenuCard