import React from 'react'

export const Title = ({title, subTitle, align}) => {
  return (
    <div className={`flex flex-col justify-center items-center
    text-center ${align === "left" && "md:items-start md:text-left"}`}>
          <h1 className='font-semibold font-bold text-fuchsia-800 text-4xl md:text-[aopx]'>{title}</h1>
          <p className='text-sm md:text-base text-gray-800/90 mt-2'>{subTitle}</p>
    </div>
  )
}
