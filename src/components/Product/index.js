import React from 'react'
import image from '../../assets/hamburguer.png';

const Product = ({ product }) => {
  return (
    <div className='bg-white border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative'>
      <span className='bg-red-100 border border-red-500 rounded-full text-primary text-sm px-4 py-1 inline-block mb-4'>Hambúrguer</span>
      <img className='w-64 mx-auto transformer transition duration-100 hover:scale-105' src={product.imagem} alt='imagem do produto'></img>
      <div className='flex flex-col items-center my-3 space-y-2'>
        <h1 className='text-gray-900 text-lg'>{product.nome}</h1>
        <p className='text-gray-500 text-sm text-center'>{product.descricao}</p>
        <h2 className='text-gray-900 text-1xl font-bold'>R${product.precoUnitario}</h2>
        <button className='bg-primary text-white px-8 py-2 rounded-full transition transform duration-300 hover:scale-105'>Pedir agora</button>
      </div>    
    </div>
  )
}

export default Product
