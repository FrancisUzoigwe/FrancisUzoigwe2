import TimeLine from "./TimeLine"

const Projects = () => {
    return (
        <>
            <div className="w-full min-h-[100vh]  flex flex-col items-center bg-[#f0f3f5]" id="project">
                <div className="mt-10 w-[90%] flex items-center justify-center font-black text-[20px] uppercase max-md:text-[17px]">Projects</div>
                <TimeLine />
            </div>

        </>
    )
}

export default Projects
