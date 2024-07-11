import { useNavigate, useParams } from "react-router-dom";
import { projectApi } from "../../api/projectApis";
import NoProject from "../../errors/NoProject";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { useSelector } from "react-redux";

const SingularProject = () => {
    const visibility = useSelector((state: any) => state.visibility);
    const { projectID } = useParams<{ projectID: string }>();
    const navigate = useNavigate();
    const project = projectApi.find((el: any) => el?.url === `/projects/${projectID}`);
    if (!project) {
        return (
            <NoProject />
        )
    }

    return (
        <div className="w-full min-h-[100vh] flex flex-col items-center">
            <div className="my-2" />
            <div className="w-[90%] flex "><div className="flex items-center hover:cursor-pointer text-[14px]" onClick={() => {
                navigate(-1)
            }}>
                <IoIosArrowBack /> Back</div></div>
            <div className="w-[90%] flex items-center justify-center font-bold text-[20px] max-md:text-[14px]">{project?.projectName}</div>
            <div className="w-[90%] h-[450px] max-md:h-[300px] max-lg:h-[350px]  rounded-md my-2">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    speed={2000}
                    modules={[Autoplay, Scrollbar, A11y, Pagination]}
                    onSlideChange={() => { }}
                    onSwiper={() => { }}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                >
                    {project.projectImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`${project.alt}`}
                                className="w-full object-cover rounded-md h-[450px] max-md:h-[300px] max-lg:h-[350px]"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="w-[90%] flex items-center justify-center mt-3">
                <a href={`${project?.liveDemoUrl}`} className={`mx-2 px-4 py-2 rounded-md  ${!visibility ? "bg-black text-white" : "bg-white text-black"}`}>Live Demo</a>
                <a href={`${project?.githubUrl}`} className="mx-2 border px-4 py-2 rounded-md">Source Code</a>
            </div>
            <div className="w-[90%] mb-2">
                {project?.descriptions?.map((el: any) => {
                    return (
                        <p className="font-semibold max-md:text-[14px]">{el}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default SingularProject;