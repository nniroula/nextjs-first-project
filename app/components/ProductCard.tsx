import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCard.module.css'

const ProductCard = () => {
    return (
        // <div className = {styles.card}>
        <div className = 'p-5 bg-sky-100 text-white text-xl hover: bg-sky-700'>
            <AddToCart />
        </div>
    )
}

export default ProductCard