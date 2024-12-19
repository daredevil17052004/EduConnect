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



const Reviews = () => {

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
      align: "start",
    }}
    plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    className="w-full"
  >
    <CarouselContent className="flex mr-4">
      {reviews.testimonials.map((course, courseIndex) => (
        <CarouselItem key={courseIndex} className="basis-full md:basis-1/2 lg:basis-1/2">
          <Card className="h-[400px ]">
            <CardContent className=" aspect-square p-4">
                <div>
                    
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