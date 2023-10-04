import Link from 'next/link';

export default function View({ id, title, description, price, rating, thumbnail }) {
    return (
      <div class="antialiased">
  
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <div x-data="{ image: 1 }" x-cloak>
              <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <div x-show="image === 1" class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <span class="text-5xl"><img className="h-full w-full object-cover object-center" src={thumbnail} alt={title}/></span>
                </div>
              </div>
            </div>
          </div>
          <div class="md:flex-1 px-4">
            <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{title}</h2>
            <div class="flex items-center space-x-4 my-4">
              <div>
                <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span class="text-indigo-400 mr-1 mt-1"></span>
                  <span class="font-bold text-indigo-600 text-3xl">£{price}</span>
                </div>
              </div>
              <div class="flex-1">
                <p class="text-green-500 text-xl font-semibold">&#9733; {rating}</p>
              </div>
            </div> 
            <p class="text-gray-500">{description}</p> 
            </div>
          </div>
        </div>
      </div>

 
    )
}