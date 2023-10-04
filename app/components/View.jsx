import Link from 'next/link';



export default function View({ id, title, description, price, rating, thumbnail }) {
  return (
    <>
      <div className="antialiased">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div>
                <div className="h-64 md:h-80 rounded-lg bg-white">
                  <div x-show="image === 1" className="  bg-white mb-4 flex items-center justify-center">
                    <span className="text-5xl">
                      <img
                        className="h-80 w-auto max-w-full"
                        srcSet={`${thumbnail} 400w, ${thumbnail} 800w, ${thumbnail} 1200w`}
                        sizes="(max-width: 600px) 100px, (max-width: 960px) 80px, 120px"
                        src={thumbnail}
                        alt={title}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{title}</h2>
              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-indigo-400 mr-1 mt-1"></span>
                    <span className="font-bold text-indigo-600 text-3xl">£{price}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">&#9733; {rating}</p>
                </div>
              </div>
              <p className="text-gray-500"></p>

            </div>
          </div>
        </div>
      </div>

      <section className="bg-white ">
        <div className="container px-6 mx-auto">
          <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8" href="#">
            About
          </a>
          <p className="mt-8 mb-8">{description}
            <br />
          </p>
        </div>
      </section>

    </>
  )
}