import React from 'react'

export const Title = ({ name }) => {
  return (
    <section className='flex w-full px-3 font-extrabold text-2xl capitalize mb-4'>
      <h1 id={`title-${name}`}>{name}</h1>
    </section>
  )
}
