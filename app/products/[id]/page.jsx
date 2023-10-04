import Product from '../../components/Product';
import View from '../../components/View';

export async function generateStaticParams(){
    const res = await fetch ('https://dummyjson.com/products')
    const data = await res.json()

    return data.products.map((product)=>({
        id:product.id.toString(),
    }))
}

async function getProducts(id){
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json();
    return data
}

export default async function ProductPage({params}){
    const products = await getProducts(params.id)
    
    return (
        <div className="">
    <View title={products.title} price={products.price} description={products.description} thumbnail={products.thumbnail} rating={products.rating} />
    </div>
    )
     
    }