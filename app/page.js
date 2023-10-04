import Product from '../app/components/Product';


async function getProducts(){
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json();
  return data.products
}


export default async function Products(){
  const products = await getProducts()
 
  return(
      <>
      <h1>Products</h1>
      <div className="grid gap-4 grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-4">
      {
          
          products.length > 0 && (
          products.map(({id,title,description,price,rating,thumbnail}) => (
              <Product key={id} id={id} title={title} price={price} description={description} rating={rating} thumbnail={thumbnail}/>
          ))
          )
         
      }
       </div>
      </>
  )
}