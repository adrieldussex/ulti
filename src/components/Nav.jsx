import React from 'react'

export default function Nav(props) {
    const navItems = [
        {
            title: "Hola",
            text: "Descubrí",
        },
        {
            title: "Chau",
            text: "Entrá",
        },
        {
            title: "Hola",
            text: "Descubrí",
        },
        {
            title: "Chau",
            text: "Entrá",
        },
    ]

    const itemView = (item) => (
        <div className='bg-gray-500 p-12 rounded-lg text-white'>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
        </div>
    )


  return (
    <div className='grid grid-cols-4 gap-2 justify-center'>
        {navItems.map(itemView)}
    </div>
  )
}
