"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Selection = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  if (!courses) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <Tabs defaultValue={courses.categories[0]?.name} className="">
      {/* Tabs List */}
      <TabsList className="flex justify-start  gap-2">
        {courses.categories.map((item, index) => (
          <TabsTrigger key={index} value={item.name}>
            {item.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tabs Content */}
      {courses.categories.map((category, index) => (
        <TabsContent key={index} value={category.name}>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="flex ">
              {category.courses.map((course, courseIndex) => (
                <CarouselItem key={courseIndex} className="basis-full md:basis-1/2 lg:basis-1/4">
                  <Card className="h-[400px]">
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
                          <p className="text-lg ">${course.price}</p>
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Selection;
