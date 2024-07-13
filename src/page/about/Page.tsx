import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSelector } from "react-redux";

const Page = () => {
  const visibility = useSelector((state: any) => state.visibility)

  useGSAP(() => {
    gsap.to("#animate", { x: 0, opacity: 1, delay: 1 })
    gsap.to("#sub", { y: 0, opacity: 1, delay: 1.5 })
    gsap.to("#main", { y: 0, opacity: 1, delay: 1, stagger: 0.5 })
  }, [])
  return (
    <div className="w-full min-h-[calc(100vh-55px)] flex flex-col items-center " id="about">
      <div className="my-5" />
      <div className="flex w-[90%] justify-between max-md:flex-col-reverse">
        <div className=" w-[70%] max-md:w-full" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
          <div className="text-[14px] w-[95%]">
            <div id="main" className="opacity-0 translate-y-4 w-full"><span className=" font-bold text-[15px]">Francis Kossyrisochukwu Uzoigwe</span>, a 19-year-old <span className="italic font-semibold">(28-10-2004)</span> frontend developer based in Lagos, Nigeria, with over 3 years of experience. My journey includes successful collaborations with teams and companies across Africa, Europe, and Asia, creating exceptional user experiences. I have honed my skills in various web technologies, delivering outstanding digital solutions for small business websites and large-scale web applications.</div>
          </div>

          <div className="text-[14px] w-[95%] mt-3">
            <div id="main" className="opacity-0 translate-y-4 w-full"> <span className="font-bold">My journey </span>into web development began in 2016 when I discovered a free coding workshop at my local library. Fascinated by how websites were built, Igot enrolled in a coding institute <a className="underline font-bold italic" href="https://codelab-home.web.app">CodeLab</a> where I met like minds. I created my first site using HTML and CSS. This initial project ignited my passion for web development, leading me to explore various online resources such as Codecademy and freeCodeCamp and books like "HTML and CSS: Design and Build Websites" to build a strong foundation. </div>
          </div>
          <div className="text-[14px] w-[95%] mt-3">
            <div id="main" className="opacity-0 translate-y-4 w-full">Dedicated time to mastering core web technologies, learning the intricacies of HTML5, CSS3, and responsive design techniques. I delved into JavaScript (TypeScript), to make my websites interactive and started using Git fo version control and GitHub to collaborate with developers.</div>
          </div>
          <div className="text-[14px] w-[95%] mt-3">
            <div id="main" className="opacity-0 translate-y-4 w-full">As my skills improved, I ventured into more advanced topics and frameworks. Learning React allowed me to build dynamic and scalable web applications, while CSS frameworks Tailwind CSS helped me speed up my development process. Each step of this journey has been driven by a passion for creating innovative and user-friendly web experiences.</div>
          </div>

          <div id="main" className="max-md:mb-5 opacity-0 translate-y-4 w-[95%]  text-[14px]">
            <div className="my-4" />
            <div>Graduated from <span className="font-bold italic"><a href="https://codelab-home.web.app/" className="underline">CodeLab</a></span> <span className="text-[13px]">Lagos state, Nigeria.</span></div>
            <div><span className="font-bold">x3</span> Frontend Developer of the Month.</div>
            <div><span className="font-bold">x5</span> Best performing team player.</div>
            <div></div>
          </div>
        </div>
        <div id="animate" className={`w-[400px] max-md:mb-7 relative max-md:w-full ${!visibility ? "border border-black" : "border border-white"} ml-4 max-md:ml-0 opacity-0 translate-x-8 rounded-md h-[400px]`}>
          <img id="sub" loading="lazy" src="http://res.cloudinary.com/dhu54k4vh/image/upload/v1718576177/qvzizaqyqv0dqoyyc3av.jpg" alt="Francis Uzoigwe's Image" className="opacity-0 -translate-y-5 absolute w-[400px] max-md:w-full h-[400px] object-cover object-top rounded-md mt-5 max-md:-ml-3 -ml-5" />
        </div>
      </div>
    </div>
  )
}

export default Page



