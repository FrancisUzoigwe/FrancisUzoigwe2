
const About = () => {
    return (
        <div className="w-full min-h-[70vh] flex flex-col items-center bg-[#f0f3f5]" id="about">
            <div className="font-black text-[20px] mt-10 uppercase max-md:text-[17px]">About Me</div>

            <div className="w-[90%] my-2 text-[20px] font-bold max-md:text-[16px]">Education:</div>
            <div className="w-[90%] max-md:text-[15px] ">
                <p> High School Diploma </p>
                <p>     Holy Ghost Technical School, Umuahia-North, Abia State </p>
                <p>  Graduated: September 2021 </p>
            </div>
            <div className="my-2" />
            <div className="w-[90%] my-2 text-[20px] font-bold max-md:text-[16px]">Skills:</div>
            <div className="w-[90%] max-md:text-[15px]">
                <li>HTML: Proficient in structuring web pages using semantic HTML5.  </li>
                <li>TailwindCSS: Experienced in styling and designing responsive layouts.</li>
                <li>TypeScript | JavaScript: For creating interactive and dynamic web experiences.</li>
                <li>Frontend Frameworks: Familiar with React.js for building efficient and scalable user interfaces.</li>
                <li>Backend Development: Proficient in Node.js and Express.js for building server-side logic and RESTful APIs.</li>
                <li>Database Management: Knowledgeable in SQL and MongoDB for database design and manipulation.</li>
                <li>Version Control: Experienced in Git for managing codebase and collaboration with teams.</li>
                <li>Problem-Solving: Strong analytical and problem-solving skills to debug code and find effective solutions.</li>
            </div>
        </div>
    )
}

export default About
