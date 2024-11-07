import React from 'react'

export const Person = ({age,name,image}) => {
  return (
    <article className="person">
        <img src={image} alt={name}className='img'/>
        <div>
            <h4>{name}</h4>
            <p>{age}</p>
        </div>
    </article>
  )
}
