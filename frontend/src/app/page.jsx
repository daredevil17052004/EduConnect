import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import Selection from "@/components/Selection";
import Timer from '@/components/Timer'
import Limited from '@/components/Limited'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'

const AvatarItem = ({ src, fallback, isLast = false }) => {
  return (
    <div
      className={`w-10 h-10 rounded-full border-2 border-white overflow-hidden ${
        !isLast && "-ml-6"
      }`}
    >
      <Avatar>
        {src ? <AvatarImage src={src} /> : null}
        <AvatarFallback className="text-sm overflow-auto flex items-center justify-center">{fallback}</AvatarFallback>
      </Avatar>
    </div>
  );
};




const  Home = () =>{


  const avatars = [
    { src: "https://github.com/shadcn.png", fallback: "CN" },
    { src: "https://github.com/shadcn.png", fallback: "AN" },
    { src: "https://github.com/shadcn.png", fallback: "YU" },
    { src: "https://github.com/shadcn.png", fallback: "YU" },
    { src: "https://github.com/shadcn.png", fallback: "YU" },
    { src: "", fallback: "+25K" },
  ];

  const companies = [
    { src : "/ibm.png"},
    { src : "/adobe.png"},
    { src : "/google.png"},
    { src : "/microsoft.png"},
    { src : "/cisco.png"},
    { src : "/dell.png"},
    { src : "/logo.png"}
  ]

  return (
    <div>
      <div className="min-h-screen">
        
        <NavigationBar/>

        {/* Hero Section */}
        <div className="h-[86vh]  w-full flex items-center">
          {/* text */}
          <div className="pl-20 flex flex-col w-1/2 items-start justify-between ">
            {/* header line */}
            <div className="text-4xl my-6 font-semibold">
              <span className="text-primary">Boost Your Career </span>
              <span>with <br /> Industry-Recognised Skills</span>
            </div>

            {/* description */}
            <div className="my-6 text-md"> 
              <p>Flexible, affordable courses designed to help you achieve <br /> your goals, whether you are at home, on the go, or anywhere <br />in between.</p>
            </div>

            {/* stacked-icons */}

            <div className="flex items-center my-6">

              <div className="flex items-center  ml-5 ">
                {avatars.map((avatar, index) => (
                  <AvatarItem
                    key={index}
                    src={avatar.src}
                    fallback={avatar.fallback}
                    isLast={index === avatars.length - 1} // Last item doesn't need the overlap
                  />
                ))}
              </div>

              <div className="ml-4">
                <p>Join with us</p>
              </div>

            </div>

            {/* call to action */}
            <div className="flex items-center justify-start my-6">
                <div>
                  <button className="rounded-full p-2 w-52  bg-primary text-white">Start Your Certification</button>
                </div>

                <div className="ml-4 underline underline-offset-2 ">
                  <Link href='/'>Browse All Courses</Link>
                </div>
            </div>
          </div>

          {/* image */}
          <div className="w-1/2 relative h-full">
            <Image src="/sdhjweid.jpg" layout="fill" objectFit="cover" className=" " alt='sds'/>
          </div>
        </div>

      </div>

      {/* Companies */}
      <div className="h-[30vh] bg-slate-200 flex flex-col items-center justify-center">
        <div>
          <span>Trusted by </span>
          <span className="text-primary underline underline-offset-2">200+ Leading Comapnies and Universities</span>
        </div>

        <div className="flex justify-center items-center w-full mt-6">
          {
            companies.map((item,index)=>{
              return(
                <div className="mx-6" key={index}>
                  <Image src={item.src} width={80} height={80} alt="company"/>
                </div>
              )
            })
          }
        </div>
      </div>


      {/* Trending Courses */}

      <div className="h-screen px-10 w-full py-20">
          <div className="flex flex-col items-start">
            <div>
              <p className="text-3xl">Trending Courses Across Diverse Fields</p>
            </div>
            <div className="mt-4">
              <p>Handpicked courses across various categories to help you achieve your learning goals.</p>
            </div>
          </div>

          <div className="w-full mt-20">
            <Selection/>
          </div>

      </div>

      {/* Limited time offer */}

      <div className="h-[50vh] w-full bg-slate-200 flex items-center justify-between px-20">
        {/* Limited time text */}
          <div className="w-1/2 ">
            <div>
              <p className="text-3xl">Limited Time Deals on Top <br /> Courses!</p>
            </div>

            <div className="my-4 text-xl">
              <p>Special prices on selected courses for a limited <br /> period. Countdown to savings starts now!</p>
            </div>

            <div className="my-4">
                <Timer/>
            </div>

            <div className="py-4">
              <button className="p-2 rounded-full bg-primary hover:bg-accent  transition-all duration-300 text-white w-40">Explore All Deals</button>
            </div>
          </div>

          {/* limited carousel */}

          <div className="w-1/2 ">
            <Limited/>
          </div>
      </div>

        {/* key benefits */}

      <div className="h-screen w-full flex items-center justify-between p-10">
          <div className="flex flex-col items-start justify-center gap-y-6 h-full p-10">
            <div className="">
              <div>
                <p className="text-xl font-semibold">
                  Learn from Industry Experts
                </p>
              </div>
              <div>
                <p>Gain knowledge from professionals with real-world experience. <br /> Learn insights, tips and strategies used by industry leaders.</p>
              </div>
              <hr className="my-2 border-3"/>
            </div>

            <div>
              <div>
                <p className="text-xl font-semibold">
                  Flexible Learning Options
                </p>
              </div>
              <div>
                <p>
                  Study at your own pace, anytime and anywhere. Choose from self<br />-paced courses and live sessions that suit your schedule.
                </p>
              </div>
              <hr className="my-2 border-3"/>
            </div>

            <div>
              <div>
                <p className="text-xl font-semibold">
                  Interactive Learning Experience
                </p>
              </div>
              <div>
                <p>Engage with quizzes, assignments, and peer interactions to solidify <br /> your knowledge and improve learning outcomes</p>
              </div>
              <hr className="my-2 border-3"/>
            </div>

            <div>
              <div>
                <p className="text-xl font-semibold">
                  Get Certified & Boost Your Career
                </p>
              </div>
              <div>
                <p>Earn certificates that validate your skills and increase your job <br /> oppurtunities. Showcase your expertise to potential employees.</p>
              </div>
              <hr className="my-2 border-3"/>
            </div>

            <div>
              <div>
                <p className="text-xl font-semibold">
                  Wide Range of Courses
                </p>
              </div>
              <div>
                <p>Access diverse courses across various fields and disciplines, from <br /> technology to personal development and more</p>
              </div>
              <hr className="my-2 border-3"/>
            </div>

          </div>

          <div className="flex flex-col items-start  h-full justify-around">
            <div className="flex flex-col items-start ">
              <div className="my-4">
                <p className="text-3xl text-primary font-semibold">Key Benefits of Learning with Us</p>
              </div>

              <div className="my-4">
                <p>Explore the unique features that make our platform the perfect choice <br /> for your learning journey.</p>
              </div>

              <div className="my-4">
                <button className="rounded-full border-2 border-primary text-primary bg-white p-2 w-40 hover:bg-primary hover:text-white transition duration-300">Start From Today</button>
              </div>
            </div>
            <div className="border w-full border-slate-300">
            </div>
            <div>
              <Image src='/learning.jpg' width={700} height={100} className="rounded-lg" alt="image"/>
            </div>
          </div>
      </div>

          {/* Exploration */}

      <div className=" h-[50vh] flex flex-col items-center justify-center">
        <div>
          <p className="text-2xl font-semibold">Explore Our Courses</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="flex items-center border-2 p-3 w-80 rounded-md shadow-lg">
            <div>
              <Image src='/innovation.png' width={40} height={100} alt="img" className="rounded-full bg-secondary p-2"/>
            </div>
            <div className="flex flex-col items-start pl-4">
              <div>
                <p className="text-md">Technology</p>
              </div>
              <div className="text-sm text-zinc-500">
                20450+ courses
              </div>
            </div>
          </div>

          <div className="flex items-center border-2 p-3 w-80 rounded-md shadow-lg">
            <div>
              <Image src='/growth.png' width={40} height={100} alt="img" className="rounded-full bg-secondary p-2"/>
            </div>
            <div className="flex flex-col items-start pl-4">
              <div>
                <p className="text-md">Business</p>
              </div>
              <div className="text-sm text-zinc-500">
                2150+ courses
              </div>
            </div>
          </div>

          <div className="flex items-center border-2 p-3 w-80 rounded-md shadow-lg">
            <div>
              <Image src='/art.png' width={40} height={100} alt="img" className="rounded-full bg-secondary p-2"/>
            </div>
            <div className="flex flex-col items-start pl-4">
              <div>
                <p className="text-md">Design & Art</p>
              </div>
              <div className="text-sm text-zinc-500">
                250+ courses
              </div>
            </div>
          </div>

          <div className="flex items-center border-2 p-3 w-80 rounded-md shadow-lg">
            <div>
              <Image src='/personal.png' width={40} height={100} alt="img" className="rounded-full bg-secondary p-2"/>
            </div>
            <div className="flex flex-col items-start pl-4">
              <div>
                <p className="text-md">Personal Deveploment</p>
              </div>
              <div className="text-sm text-zinc-500">
                175+ courses
              </div>
            </div>
          </div>

          <div className="flex items-center border-2 p-3 w-80 rounded-md shadow-lg">
            <div>
              <Image src='/photography.png' width={40} height={100} alt="img" className="rounded-full bg-secondary p-2"/>
            </div>
            <div className="flex flex-col items-start pl-4">
              <div>
                <p className="text-md">Photography</p>
              </div>
              <div className="text-sm text-zinc-500">
                2050+ courses
              </div>
            </div>
          </div>

          <div className="flex items-center border-2 p-3 w-80 rounded-md shadow-lg">
            <div>
              <Image src='/heart.png' width={40} height={100} alt="img" className="rounded-full bg-secondary p-2"/>
            </div>
            <div className="flex flex-col items-start pl-4">
              <div>
                <p className="text-md">Health & Wellnes</p>
              </div>
              <div className="text-sm text-zinc-500">
                250+ courses
              </div>
            </div>
          </div>

        </div>

        <div className="mt-6">
           <button className="w-24 p-2 rounded-full border border-secondary text-sm">See All</button>
        </div>
      </div>



      {/* instructors */}


      <div className="h-[60vh] w-full flex items-center justify-between px-20">
          <div className="flex flex-col items-start">
            <div className="my-4">
              <p className="text-2xl text-primary font-semibold">Meet Our Top Instructors</p>
            </div>
            
            <div className="w-[500px] my-4">
              <p>Learn from the best in the field. Our top instructor bring  industry experience and expertise across various subjects, guiding you to achieve your coming goals.</p>
            </div>

            <div className="my-4">
              <button className="w-52 rounded-full p-2 text-primary border border-primary">Meet All Our Experts</button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <Image src='/ex1.jpg' height={400} width={300}  alt="img" className="rounded-full"/>
            </div>
            <div>
              <Image src='/ex2.jpg' width={300} height={100} alt="img" className="rounded-bl-3xl rounded-tr-3xl"/>
            </div>
            <div>
              <Image src='/ex3.jpg' width={300} height={100} alt="img" className=" rounded-br-3xl rounded-tl-3xl"/>
            </div>
            <div>
              <Image src='/ex4.jpg' width={300} height={200} alt="img" className="rounded-full"/>
            </div>

          </div>
      </div>


      <div className="h-screen w-full bg-slate-200 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center my-4">
            <div>
              <p className="text-3xl text-primary font-semibold">What Our Learner Are Saying </p>
            </div>

            <div className="w-[540px] flex items-center justify-center text-center my-4 text-md">
              <p>Hear from our student and professionals whove transformed their careers and lives thorugh our courses.</p>
            </div>
          </div>

          <div>
            <Reviews align="start" direction="ltr"/>
          </div>

          <div className="">
            <Reviews align="start" direction="ltr"/>
          </div>
      </div>


      {/*  */}

      <div className="h-screen w-full flex items-center justify-center px-20">
          <div className="w-1/2">
            <div className="my-4">
              <p className="text-3xl text-primary font-semibold">Share Your Knowledge. Inspire <br /> Learners</p>
            </div>

            <div className="my-4">
              <p>Join our community of expert instructors and create your own <br /> courses to reach thousands of learners worldwide.</p>
            </div>

            <div className="my-4">
              <button className="bg-primary text-white w-52 p-2 rounded-full">Start Learning Today</button>
            </div>
          </div>

          <div className="w-1/2">
            <Image src='/study.jpg' width={700} height={700} alt="imgae" className=""/>
          </div>
      </div>

      {/* Footer */}

      <div>
        <Footer/>
      </div>
    </div>

  )
}


export default Home;