
const About = () => {
    return (
        <div className="w-full min-h-[200vh] flex flex-col items-center" id="about">
            <div className="font-black text-[20px] mt-10">About Me</div>

            <div className="w-[90%] my-2 text-[20px] font-bold">Education:</div>
            <div className="w-[90%]  ">
                <p> High School Diploma </p>
                <p>     Holy Ghost Technical School, Umuahia-North, Abia State </p>
                <p>  Graduated: September 2021 </p>
            </div>
            <div className="my-2" />
            <div className="w-[90%] my-2 text-[20px] font-bold">Skills:</div>
            <div className="w-[90%]  ">
                <li>HTML: Proficient in structuring web pages using semantic HTML5.  </li>
                <li>CSS: Experienced in styling and designing responsive layouts with CSS3, including flexbox and grid</li>
                <li>JavaScript: Strong skills in vanilla JavaScript for creating interactive and dynamic web experiences.</li>
                <li>Frontend Frameworks: Familiar with React.js for building efficient and scalable user interfaces.</li>
                <li>Backend Development: Proficient in Node.js and Express.js for building server-side logic and RESTful APIs.</li>
                <li>Database Management: Knowledgeable in SQL and MongoDB for database design and manipulation.</li>
                <li>Version Control: Experienced in Git for managing codebase and collaboration with teams.</li>
                <li>Web Performance Optimization: Skilled in optimizing website performance using techniques like minification and lazy loading.
                </li>
                <li>Cross-Browser Compatibility: Ensuring consistent user experiences across different browsers.</li>
                <li>Problem-Solving: Strong analytical and problem-solving skills to debug code and find effective solutions.</li>
                <li>Security Principles: Awareness of web security best practices to develop secure web applications. </li>
                <li>TailwindCSS: For fast easy and modern styling.</li>
            </div>
        </div>
    )
}

export default About
