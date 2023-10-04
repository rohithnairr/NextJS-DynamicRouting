import Link from 'next/link';

export default function Product({ id, title, description, price, rating, thumbnail }) {
    return (

        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col border-solid border-black">
            <a href={`/products/${id}`} >
                <img className="hover:grow hover:shadow-lg h-40 w-full" src={thumbnail} alt={title} />
                <div className="pt-3 flex items-center justify-between">
                    <p className="">{title}</p>
                    <p>&#10030;{rating}</p>
                </div>
                <p className="pt-1 text-gray-900">£{price}</p>
            </a>
        </div>

    )
}

