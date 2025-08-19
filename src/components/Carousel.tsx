"use client"
import { useState } from 'react'

const Carousel = (props: {
  items: {
    image: string;
    subtitle: string;
    title: string;
    isActive: boolean;
  }[]
}) => {
  const [carouselState, setCarouselState] = useState({
    items: props.items
  })
  function switchItem(idx: number) {
    const updatedCarousel = structuredClone(carouselState.items.map((x, id) => id === idx ? {
      ...x,
      isActive: true,
    } : {
      ...x,
      isActive: false,
    }))
    setCarouselState({
      ...carouselState,
      items: updatedCarousel
    })
  }

  return (
    <div>
      {carouselState.items.map((x, idx) => (
        <div key={idx} className='w-full h-64 rounded-2xl px-4 py-6' style={{
          backgroundImage: `url(${x.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: x.isActive ? "flex" : "none"
        }}>
          <div className="flex flex-col self-end text-white w-full">
            <h6 className='uppercase'>
              {x.subtitle}
            </h6>
            <h3 className='text-lg font-semibold'>
              {x.title}
            </h3>
            <div className="carousel-nav w-full flex items-center justify-center mt-2 space-x-2">
              {carouselState.items.map((x, iidx) => (<button key={iidx} onClick={() => switchItem(iidx)} className={`carousel-nav-dot w-2 h-2 rounded-full cursor-pointer ${x.isActive ? 'bg-white' : 'bg-gray-400'}`}></button>))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Carousel
