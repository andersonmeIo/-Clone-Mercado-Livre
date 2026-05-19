import banner1 from '../../../assets/banners/banner1.webp'
import banner2 from '../../../assets/banners/banner2.webp'
import banner3 from '../../../assets/banners/banner3.webp'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Banner() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const [toggleButtons, setToggleButtons] = useState<boolean>(false)

    const goToPrev = () => emblaApi?.scrollPrev()
    const goToNext = () => emblaApi?.scrollNext()

    return (
        <>
            <div className='relative w-full h-[500px] mask-b-from-80% mask-b-to-99%'>
            {/* <div className='relative w-full h-[600px] mask-b-from-50% mask-b-to-75% border'> */}
                <div className="h-full overflow-hidden relative">
                    <div className="relative h-full" ref={emblaRef}>
                        <div className="embla__container">
                            <div className="embla__slide">
                                <img src={banner1} alt="" />
                            </div>
                            <div className="embla__slide">
                                <img src={banner2} alt="" />
                            </div>
                            <div className="embla__slide">
                                <img src={banner3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div onMouseEnter={() => setToggleButtons(true)} onMouseLeave={() => setToggleButtons(false)} className='absolute h-[400px] top-0 left-0 w-full z-10 flex justify-between items-center cursor-pointer'>
                    {toggleButtons && <>
                        <button className="w-18 h-16 rounded-r-full bg-white flex justify-center items-center cursor-pointer hover:shadow-md duration-200" onClick={goToPrev}>
                            <ChevronLeft />
                        </button>
                        <button className="w-18 h-16 rounded-l-full bg-white flex justify-center items-center cursor-pointer hover:shadow-md duration-200" onClick={goToNext}>
                            <ChevronRight />
                        </button>
                    </>
                    }
                </div>
            </div>
        </>
    )
}