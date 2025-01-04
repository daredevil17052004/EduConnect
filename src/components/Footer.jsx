"use client"
import React, { useEffect, useState } from 'react'

const Footer = () => {

  const [footerData,setFooterdata] = useState(null);

  useEffect(() =>{
    fetch("/data/footer.json")
      .then((res) => res.json())
      .then((data) => setFooterdata(data))
  },[]);

  if(!footerData){
    return(
      <div>
        Loading.......
      </div>
    )
  }

  console.log(footerData)

  return (
    <div className='h-[70vh] bg-slate-200 px-20'>
      <div className='w-full h-[60vh] grid grid-cols-4 gap-4 pt-10'>
        {
          footerData.footer.sections.map((item,index)=>{
            return(
              <div className='' key={index}>
                <div className='mb-5'>
                  <p className='font-bold'>{item.title}</p>
                </div>
                <div className='flex flex-col items-start gap-y-2'>
                  {
                    item.links.map((item,index)=>{
                      return(
                        <div className=''>
                          <p className='hover:underline hover:underline-offset-2 hover:cursor-pointer hover:text-primary transition-all duration-300'>{item}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>

      <div className='flex items-center justify-between '>
          <div className=''>
            <p>© 2025 | EduConnect | All Rights Reserved</p>
          </div>

          <div className='links'>

          </div>
      </div>
    </div>

  )
}

export default Footer