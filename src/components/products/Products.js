import React from 'react'
import "../../scss/style.scss"


const Products = () => {
    const data = [
        {
            "id": 1,
            "isNew": true,
            "image": "./images/productImg1.png",
            "title": "Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera & Illuminated Precision Knobs",
            "price": "Save $600.",
            "oldPrice": "From $1499"
        },
        {
            "id": 2,
            "isNew": false,
            "image": "./images/productImg2.png",
            "title": "Galaxy Buds2 Pro",
            "price": "Save up to $40.",
            "oldPrice": "From $189.99 before eligible trade-in."
        },
        {
            "id": 3,
            "isNew": false,
            "image": "./images/productImg3.png",
            "title": `55" The Frame`,
            "price": "Save $500.",
            "oldPrice": "From $999.99"
        },
        {
            "id": 4,
            "isNew": true,
            "image": "./images/productImg4.png",
            "title": "23 cu. ft. Bespoke 4-Door Flex Refrigerator with AI Family Hub",
            "price": "Save $1200.",
            "oldPrice": "From $3899"
        },
        {
            "id": 5,
            "isNew": false,
            "image": "./images/productImg5.png",
            "title": "Galaxy S24 Ultra, 1TB (Unlocked)",
            "price": "Save up to $150.",
            "oldPrice": "From $1509.99 before eligible trade-in."
        },
        {
            "id": 6,
            "isNew": false,
            "image": "./images/productImg6.png",
            "title": `49" Odyssey OLED G95SC DQHD Neo Quantum Processor Pro`,
            "price": "Save $700.",
            "oldPrice": "From $1099.99"
        }
    ]
    let cards = data?.map(el => (
        <div key={el.id} className="products-section__card">
            <div className='products-section__card-img'>
                <img src={el.image} alt="" />
            </div>
            <h3 className="products-section__card-title">{el.title}</h3>
            <div className="products-section__card-desc">
                <p>{el.price}</p>
                <h5>{el.oldPrice}</h5>
            </div>
            <button className="products-section__card-btn">Pre-order now</button>
            <span className={`products-section__card-skidka ${el.isNew ? '' : 'skidka-hidden'}`}>New</span>
        </div>
    ))
  return (
    <div className='products-section'>
        <div className="container">
            <h2>Shop all latest offers and innovations</h2>
            <ul>
                <li>For you</li>
                <li>Mobile & Computing</li>
                <li>Tv & Audio</li>
                <li>Home Appliances</li>
                <li>Samsung Live</li>
                <li>For Business</li>
            </ul>
            <div className="products-section__cards">
                {cards}
            </div>
        </div>
    </div>
  )
}

export default Products