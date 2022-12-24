import React from 'react'
import "./Home.css"
import Product from './Product.js'

import product1 from './Assets/product1.png'
import product2 from './Assets/product2.png'
import product3 from './Assets/product3.png'
import product4 from './Assets/product4.png'
import product5 from './Assets/product5.png'
import product6 from './Assets/product6.png'
import product7 from './Assets/product7.png'
import product8 from './Assets/product8.png'
import product9 from './Assets/product9.png'
import product10 from './Assets/product10.png'
import product11 from './Assets/product11.png'
import product12 from './Assets/product12.png'



function Home() {
  return (
    <div className="home">
              {/* <img className="app__decor1"src="https://cpwebassets.codepen.io/assets/packs/lines-2-4e66616a5ef291c3566a7ddfe1ffaaa8.svg"/>
              <img className="app__decor2"src="https://cpwebassets.codepen.io/assets/packs/lines-3-4541e35a1939230404d773f7eeddcc9b.svg"/>
              <img className="app__decor3"src="https://cpwebassets.codepen.io/assets/packs/lines-4-4ea88270d73b7f6eaaa69e91aed97ddf.svg"/> */}

        <div className="home__container">
            <img className='home__image' src="https://wallpaperaccess.com/full/48072.jpg"/>   
            <h1 className="home__heading"> Shoes Section</h1>
            <div className="home__shoes__row">             
                <Product className="home__product" id={1} title="Nike Multi Smart Shoe" price={129.99} image={product1} rating={5}/>
                <Product className="home__product" id={2} title="Nike Air Force Green" price={139.99} image={product2} rating={3}/>
                <Product className="home__product" id={3} title="Nike Addapt BB Rose" price={149.99} image={product3} rating={4}/>
                <Product className="home__product" id={4} title="Nike Air Premium" price={149.99} image={product4} rating={4}/>
                <Product className="home__product" id ={5} title="Nike Adapt BB Pro" price={159.99} image={product5} rating={5}/>
                <Product className="home__product" id ={6} title="Nike Air Jordan PR3" price={179.99} image={product6} rating={1}/>
                <Product className="home__product" id ={7} title="Nike Air Low Premium" price={169.99} image={product7} rating={3}/>
                <Product className="home__product" id ={8} title="Nike Zoom Max" price={129.99} image={product8} rating={4}/>
                <Product className="home__product" id={9} title="Nike Jordan Air Max" price={119.99} image={product9} rating={2}/>
                <Product className="home__product" id={10} title="Nike Old Max-x" price={99.99} image={product10} rating={3}/>
                <Product className="home__product" id={11} title="Nike Air Black Max" price={149.99} image={product11} rating={5}/>
                <Product className="home__product" id={12} title="Nike Lime Jordan 11" price={139.99} image={product12} rating={4}/>
                <Product className="home__product" id={13} title="Nike Air Low Premium" price={159.99} image={product7} rating={3}/>
                <Product className="home__product" id={14} title="Nike Air Force Green" price={169.99} image={product2} rating={4}/>
                <Product className="home__product" id={15} title="Nike Addapt BB Rose" price={199.99} image={product3} rating={5}/>
                <Product className="home__product" id={16} title="Nike Air Premium" price={149.99} image={product4} rating={2}/>
            </div>
            {/* <h1 className="home__heading"> Clothing Section</h1>
            <div className="home__shoes__row">             
                <Product className="home__product" id={1} title="Nike Multi Smart Shoe" price={129.99} image={product1} rating={5}/>
                <Product className="home__product" id={2} title="Nike Air Force Green" price={139.99} image={product2} rating={3}/>
                <Product className="home__product" id={3} title="Nike Addapt BB Rose" price={149.99} image={product3} rating={4}/>
                <Product className="home__product" id={4} title="Nike Air Premium" price={149.99} image={product4} rating={4}/>
                <Product className="home__product" id ={5} title="Nike Adapt BB Pro" price={159.99} image={product5} rating={5}/>
                <Product className="home__product" id ={6} title="Nike Air Jordan PR3" price={179.99} image={product6} rating={1}/>
                <Product className="home__product" id ={7} title="Nike Air Low Premium" price={169.99} image={product7} rating={3}/>
                <Product className="home__product" id ={8} title="Nike Zoom Max" price={129.99} image={product8} rating={4}/>
                <Product className="home__product" id={9} title="Nike Jordan Air Max" price={119.99} image={product9} rating={2}/>
                <Product className="home__product" id={10} title="Nike Old Max-x" price={99.99} image={product10} rating={3}/>
                <Product className="home__product" id={11} title="Nike Air Black Max" price={149.99} image={product11} rating={5}/>
                <Product className="home__product" id={12} title="Nike Lime Jordan 11" price={139.99} image={product12} rating={4}/>
                <Product className="home__product" id={13} title="Nike Air Low Premium" price={159.99} image={product7} rating={3}/>
                <Product className="home__product" id={14} title="Nike Air Force Green" price={169.99} image={product2} rating={4}/>
                <Product className="home__product" id={15} title="Nike Addapt BB Rose" price={199.99} image={product3} rating={5}/>
                <Product className="home__product" id={16} title="Nike Air Premium" price={149.99} image={product4} rating={2}/>
            </div> */}
            
        </div>
    </div>
  )
}

export default Home