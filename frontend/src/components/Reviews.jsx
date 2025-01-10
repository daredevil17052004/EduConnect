'use client'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState, useEffect } from 'react'
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'



const Reviews = ({align, direction}) => {

    const [reviews, setReviews] = useState(null);

    useEffect(() => {
      fetch("/data/reviews.json")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
  
    if (!reviews) {
      return <div>Loading...</div>; // Show a loading message while fetching data
    }

    console.log(reviews)


  return (

    <Carousel
    opts={{
      align,
      loop:true,
      direction
    }}
    plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    className="w-full"
  >
    <CarouselContent className="flex mr-4 ">
      {reviews.testimonials.map((course, courseIndex) => (
        <CarouselItem key={courseIndex} className="basis-full md:basis-1/2 lg:basis-1/4">
          <Card className="h-72">
            <CardContent className=" aspect-square p-4">
                <div className='flex flex-col items-start   h-64'>
                    <div className='flex items-center'>
                        <div>
                            <Image src={course.image} width={40} height={30} alt='image' className='rounded-full'/>
                        </div>
                        <div className='pl-3'>
                            <div>
                                <p>{course.name}</p>
                            </div>
                            <div className='text-zinc-600'>
                                <p className='text-sm'>{course.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p>
                            {course.testimonial}
                        </p>
                    </div>


                    <div className="absolute bottom-4 flex items-center">
                        <span>{course.rating} </span>
                        <span className='pb-1 pl-1'> ⭐</span>
                    </div>
                </div>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>

  )
}

export default Reviews