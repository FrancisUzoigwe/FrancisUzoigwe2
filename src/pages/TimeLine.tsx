
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimeLine = () => {
    return (
        <div className='my-2'>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'black', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}
                    date="Feb 2024 - present"
                    dateClassName='text-black font-black'
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={""}
                >
                    <h3 className="vertical-timeline-element-title">Lead Frontend Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Lagos, Chyme</h4>
                    <li className='text-[14px] my-2'>
                        Drove a 10-member team to develop a fintech platform facilitating instant money transfers, savings, airtime purchases, and utility payments.
                    </li>
                    <li className='text-[14px] my-2'>
                        Ensured mobile responsiveness and cross-platform compatibility for seamless user experience.
                    </li>
                    <li className='text-[14px] my-2'>
                        Implemented code-splitting which resulted in a 43.2% increase in loading time.
                    </li>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'black', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}
                    date="Sept 2023 - Dec 2023"
                    dateClassName='text-black font-black'
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={""}
                >
                    <h3 className="vertical-timeline-element-title"> Frontend Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Lagos, Dirt2school</h4>
                    <li className='text-[14px] my-2'>
                        Built a website that facilitates the exchange of recycleble material for school fees.
                    </li>
                    <li className='text-[14px] my-2'>
                        Ensured mobile responsiveness and cross-platform compatibility for seamless user experience.
                    </li>
                    <li className='text-[14px] my-2'>
                        Ensured all functionalities works perfectly and is user-friendly.
                    </li>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'black', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid black' }}
                    date="May 2023 - Sept 2023"
                    dateClassName='text-black font-black'
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={""}
                >
                    <h3 className="vertical-timeline-element-title">Lead Frontend Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Lagos, AjConnect</h4>
                    <li className='text-[14px] my-2'>
                        Built a chat application which enables the people of Ajegunle, have real-time-chat exprience and also integrated functionalities which captures in-the-now moment.
                    </li>
                    <li className='text-[14px] my-2'>
                        Ensured mobile responsiveness and cross-platform compatibility for seamless user experience.
                    </li>
                    <li className='text-[14px] my-2'>
                        Ensured all functionalities works perfectly and is user-friendly.
                    </li>
                    <li className='text-[14px] my-2'>
                        Implemented code-splitting which resulted in a 20% increase in loading time.
                    </li>

                </VerticalTimelineElement>


            </VerticalTimeline>
        </div>
    )
}

export default TimeLine
