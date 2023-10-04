import Link from 'next/link';

export default function Product({ id, title, description, price, rating, thumbnail }) {
    return (
        <a href={`/products/${id}`} >
            <div className="">
                <div className="w-100 border-solid border-1 transform overflow-hidden rounded-lg bg-white text-gray-900 shadow-md duration-300 hover:scale-105 hover:shadow-lg m-4">
                    <img className="h-52 w-full object-cover object-center" src={thumbnail} alt={title} />
                    <div className="p-4">
                        <h2 className="mb-2 text-lg font-medium text-gray-900 line-clamp-1">{title}</h2>
                        <p className="mb-2 text-base text-gray-700 line-clamp-2">{description}</p>
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold text-gray-900">{price}</p>
                            <p className="text-base font-medium text-gray-500">&#10030;{rating}</p>
                        </div>
                    </div>

                </div>

            </div>
        </a>
    )
}