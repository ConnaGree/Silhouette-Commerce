import React from 'react'

const CategoryCard = ({categoryItem, key}) => {
  return (
    <div className={`border-[1px] w-[200px] h-[100px] p-3 flex justify-center items-center flex-col ${index === 3 ? 'bg-[#d]' : ''}`}>
        <img className='w-[30px] h-[30px]' src={categoryItem.icon} alt={categoryItem.title} />
        <h2 className='text-[.8rem]'>{categoryItem.title}</h2>
    </div>
  )
}

export default CategoryCard