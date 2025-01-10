"use client"
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState,useEffect } from 'react'
import Image from 'next/image'

const Limited = () => {

    const [courses, setCourses] = useState(null);

    useEffect(() => {
      fetch("/data/limited.json")
        .then((res) => res.json())
        .then((data) => setCourses(data));
    }, []);
  
    if (!courses) {
      return <div>Loading...</div>; // Show a loading message while fetching data
    }

    console.log(courses)

  return (
    <Carousel
    opts={{
      align: "start",
    }}
    className="w-full"
  >
    <CarouselContent className="flex mr-4">
      {courses.courses.map((course, courseIndex) => (
        <CarouselItem key={courseIndex} className="basis-full md:basis-1/2 lg:basis-1/2">
          <Card className="h-[400px ]">
            <CardContent className=" aspect-square p-4">
              <div>
                <div>
                  <Image src={course.image} width={350} height={20} priority className="rounded-md" alt="image"/>
                </div>
                <div className="mt-2">
                  <p className="text-xl ">{course.course_name}</p>
                </div>
                <div>
                  <p className="text-zinc-600 text-sm">{course.instructor}</p>
                </div>
                <div className="mt-4">
                  <span className="text-lg line-through text-gray-500">${course.price}</span> <span className='text-lg font-semibold'>${course.striked_off_price}</span>
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <div>
                    <p>⭐{course.rating}</p>
                  </div>
                  <div className="">
                    <p>{course.enrollments}+</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className='-left-12 top-40' />
    <CarouselNext className='-right-8 top-40'/>
  </Carousel>

  )
}

export default Limited