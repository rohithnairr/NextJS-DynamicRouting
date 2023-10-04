import Product from '../components/Product';

async function getProducts(){
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json();
    return data.products
}

export default async function Products(){
    const products = await getProducts()
   
    return(
        <>
       
        {
            
            products.length > 0 && (
            products.map(({id,title,description,price,rating,thumbnail}) => (
                <Product key={id} id={id} title={title} price={price} description={description} rating={rating} thumbnail={thumbnail}/>
            ))
            )
           
        }
       
        </>
    )
}