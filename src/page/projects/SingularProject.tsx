import { useParams } from "react-router-dom";
import { projectApi } from "../../api/projectApis";
import NoProject from "../../errors/NoProject";
import { IoIosArrowBack } from "react-icons/io";

const SingularProject = () => {

    const { projectID } = useParams<{ projectID: string }>();

    const project = projectApi.find((el: any) => el?.url === `/projects/${projectID}`);
    console.log("This is the project: ", project)
    if (!project) {
        return (
            <NoProject />
        )
    }

    return (
        <div className="w-full min-h-[100vh] flex flex-col items-center">
            <div className="my-3" />
            <div className="w-[90%] flex "><div className="flex items-center">
                <IoIosArrowBack /> Back</div></div>
            <div>{project?.projectID}</div>
        </div>
    )
}

export default SingularProject;