/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState, useEffect } from 'react'
import clsx from 'clsx'
import {
  toAbsoluteUrl,
  defaultMessages,
  defaultUserInfos,
  MessageModel,
  UserInfoModel,
  messageFromClient,
  KTSVG
} from '../../helpers'

type Props = {
  isDrawer?: boolean
  job?: any
}

const bufferMessages = defaultMessages

const ChatInner: FC<Props> = ({ isDrawer = false, job }) => {
  const [rerender, setRerender] = useState(false);
  const [chatUpdateFlag, toggleChatUpdateFlat] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const [messages, setMessages] = useState<MessageModel[]>(bufferMessages)
  const [userInfos] = useState<UserInfoModel[]>(defaultUserInfos)

  const sendMessage = () => {
    const newMessage: MessageModel = {
      user: 2,
      type: 'out',
      text: message,
      time: 'Just now',
    }

    bufferMessages.push(newMessage)
    setMessages(bufferMessages)
    toggleChatUpdateFlat(!chatUpdateFlag)
    setMessage('')
    setTimeout(() => {
      bufferMessages.push(messageFromClient)
      setMessages(() => bufferMessages)
      toggleChatUpdateFlat((flag) => !flag)
    }, 1000)
  }

  const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault()
      sendMessage()
    }
  }

  useEffect(() => {
    if (job) document.getElementById('jobDescMain')!.scrollTo({ top: 0, behavior: 'smooth' });
  }, [job]);



  return (
    <>
      {job && <div
        className='card-body'
        id={isDrawer ? 'kt_drawer_chat_messenger_body' : 'kt_chat_messenger_body'}
      >
        <div
          className={clsx('scroll-y me-n5 pe-5 mt-0 pt-0', { 'h-500px': !isDrawer })}
          id='jobDescMain'
          data-kt-element='messages'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height={rerender ? '490px' : '490px'}
          data-kt-scroll-dependencies={
            isDrawer
              ? '#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer'
              : '#kt_header, #kt_app_header, #kt_app_toolbar, #kt_toolbar, #kt_footer, #kt_app_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer'
          }
          data-kt-scroll-wrappers={
            isDrawer
              ? '#kt_drawer_chat_messenger_body'
              : '#kt_content, #kt_app_content, #kt_chat_messenger_body'
          }
          data-kt-scroll-offset={isDrawer ? '0px' : '-2px'}
        >

          {/*<div className='d-flex flex-column fs-6'>
            <div className='row flex-grow-1 mb-5 '>

              <div className='col-lg-6 d-flex align-items-center mb-3 mb-lg-0'>
                <span className=""><i className="bi text-gray-800 bi-briefcase fs-4 me-2"></i>
                  {job!.company} , <span className="badge badge-light-dark">{job!.jobType}</span>
                </span>
              </div>
              <div className='col-lg-6 d-flex align-items-center mb-3 mb-lg-0'>
                <span className=""><i className="bi text-gray-800 bi-buildings fs-4 me-2"></i>
                  Canberra, Australian Capital Territory, Australia
              </span>
              </div>
            </div>
            <div className='row flex-grow-1 mb-5 mb-lg-0'>

              <div className='col-lg-3 d-flex align-items-center mb-3 mb-lg-0'>
                <span className=""><i className="fa-solid fa-wallet fs-4 me-2"></i>
                  {job!.salary}
                </span>
              </div>
              <div className='col-lg-4 d-flex align-items-center mb-3 mb-lg-0'>
                <span className=""><i className="fa-solid fa-envelope-open-text fs-4 me-2"></i>
                  {job!.exp}
                </span>
              </div>
              <div className='col-lg-4 d-flex align-items-center mb-3 mb-lg-0'>
                <span className=""><i className="bi text-gray-800 bi-buildings fs-4 me-2"></i>
                  {job!.jobType}
                </span>
              </div>
            </div>
          </div>*/}

          <div className='d-flex flex-column fs-6'>
            <table className='table  table-row-gray-300 align-middle gs-0 '>
              {/* begin::Table head */}
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                <tr>
                  <td>
                    <div className='d-flex align-items-center '>
                      {/*<div className='symbol symbol-35px me-5'>
                        <img src={toAbsoluteUrl('/media/logos/google.png')} alt='' />
                      </div>*/}
                      <div className='symbol symbol-35px me-3'>
                        <i className=' bi text-gray-800 bi-briefcase fs-5'></i>
                      </div>
                      <div className='d-flex justify-content-start flex-column max-w-250px'>
                        <span className=" fs-5 me-5"><a href='#' className='fw-bold text-dark text-hover-primary fs-5 me-10'>
                          Google
                        </a> <i className='bi text-gray-800 bi-geo-alt fs-5 me-3 '></i>Sydney, New South Wales, Australia</span>
                      </div>
                      <i className='bi text-gray-800 bi-dot fs-3 me-5'></i>

                      <div className='d-flex justify-content-start flex-column max-w-250px'>
                        <span className='text-dark  fs-5 me-5'>
                          Mid Senior level
                        </span>
                      </div>
                    </div>
                  </td>

                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center col-12'>
                      {/*<div className='symbol symbol-35px me-5'>
                        <img src={toAbsoluteUrl('/media/logos/google.png')} alt='' />
                      </div>*/}
                      <div className='symbol symbol-35px me-3'>
                        <i className='bi text-gray-800 bi-cash-stack fs-5 '></i>
                      </div>
                      <div className='d-flex justify-content-start flex-column max-w-250px'>
                        <a href='#' className='text-dark fs-5 me-5'>
                          $100K - $150k
                        </a>
                      </div>

                      <i className='bi text-gray-800 bi-dot fs-3 me-5'></i>

                      <div className='d-flex justify-content-start flex-column max-w-250px'>
                        <span className='text-dark  fs-5 me-10'>
                          Hybrid Working
                        </span>
                      </div>
                      <i className='bi text-gray-800 bi-dot fs-3 me-5'></i>

                      <div className='d-flex justify-content-start flex-column max-w-250px'>
                        <a href='#' className='text-dark  fs-5 me-5'>
                          <span className="badge badge-secondary fs-7">  Full Time</span>
                        </a>
                      </div>

                      <i className='bi text-gray-800 bi-dot fs-3 me-5'></i>
                      <div className='d-flex justify-content-start flex-column max-w-250px'>
                        <span className='badge badge-secondary fs-7 me-10'>
                          Visa Sponsorship
                        </span>
                      </div>
                    </div>


                  </td>

                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center col-12'>
                      {/*<div className='symbol symbol-35px me-5'>
                        <img src={toAbsoluteUrl('/media/logos/google.png')} alt='' />
                      </div>*/}
                      <div className='symbol symbol-35px me-3'>
                        <i className='bi text-gray-800 bi-clock-history fs-5 '></i>
                      </div>
                      <div className='d-flex justify-content-start flex-column max-w-250px'>
                        <a href='#' className='text-dark fs-5 me-10'>
                          Posted 30 days ago
                        </a>
                      </div>
                      <i className='bi text-gray-800 bi-dot fs-3 me-5'></i>
                      <div className='d-flex justify-content-start flex-column max-w-250px'>
                        <span className='text-dark  fs-5 me-10'>
                          70 Applicants
                        </span>
                      </div>
                    </div>


                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='d-flex flex-column fs-6 mt-5'>

            <h3 className="my-5">About the Company</h3>

            <p id="aboutCompany">
              Easygo is a well-established tech start-up, we pride ourselves on being early adopters, progressive in our approach and adaptable to the ever-changing technology landscape. Our brands include Stake.com, Kick.com & Twist Gaming, with more in the pipeline. Our core focus is in the online gaming space building well-designed casino games, crypto platforms, and sportsbooks, and we have launched additional brands to support this.

              Stake & Kick are used by millions of people around the world and you'll see their logos on The Alfa Romeo F1 Team, Everton & Watford Jerseys, the UFC, and we are advocated by Drake and e-gamers. The last 2 years have been huge for us, we have grown from 20 to 160+ team members. Whilst the products that we build are global, the majority of the team sits in Melbourne at our Australian headquarters in the heart of the CBD where we have 3 amazing offices in the same building with all the bells and whistles you could ever want including an in-house barista, pool, and table tennis tables, PS5 and Nintendo Switches, a meditation room, help yourself drinks fridge and snack wall, catered breakfast daily, weekly massages and a pub lunch.
          </p>

            <h3 className="my-5">About the Role</h3>

            <p>

              The role will require you lead business analysis across our web change initiatives, working as part of a larger projects team made up of Project Managers, Programme Managers, and Operations as we support the growth of Stake.com & future projects. In this leadership role, a core element will be to utilise experience to build and develop an effective ‘Centre of Excellence' (CoE) for Business Analysis.

              Leading the team, creating a high performing and efficient function through process optimisation, development and upskilling the team. Engaging with key stakeholders at all levels. Working collaboratively with Executive and Senior Leadership teams as well as wider functions to align with strategic objectives including the prioritised in-plan projects and programmes. Creating, maintaining, and contributing to reporting on key performance indicators such as scope and quality measures as well as driving continuous improvement of the function
            </p>

            <h3 className="my-5">Role Responsibilities:</h3>

            <p>

              Manage a team of business analysts and ensure that the team is effectively supporting the organization's strategic goals.
              Lead the development and implementation of business analysis methodologies, processes, and tools to ensure efficient and effective delivery of projects and initiatives.
              Collaborate with key stakeholders to identify areas for improvement and develop strategies for optimizing business processes, driving operational efficiency, and achieving cost savings.
              Identify and evaluate business opportunities, risks, and trends and provide recommendations to senior management.
              Lead and participate in cross-functional project teams to ensure the successful delivery of projects.
              Develop and maintain relationships with key stakeholders, including business leaders, technology teams, and external vendors.
              Ensure that the team is providing high-quality business analysis services to the organization, and that deliverables are completed on time, within budget, and to the required quality standards.
              Develop and manage the team's performance, ensuring that team members have the necessary training, resources, and support to be successful.
              </p>

            <h3 className="my-5">Requirements:</h3>

            <p>

              5+ years of experience in business analysis or related field, including 3+ years in a leadership role.
              Have worked on complex web development projects previously
              Strong leadership and team management skills, with a track record of building and leading high-performing teams.
              Experience in developing and implementing business analysis methodologies, processes, and tools.
              Strong analytical and problem-solving skills, with the ability to work independently and manage multiple priorities.
              Excellent communication and interpersonal skills, with the ability to build relationships with stakeholders at all levels of the organization.
              Experience in project management and Agile methodologies.
              Knowledge of industry-standard business analysis tools, techniques, and frameworks.
         </p>

            <h3 className="my-5">Benefits:</h3>

            <p>

              Flexible working hours
              Team socials and ad-hoc get-togethers, and events for you to get involved in (if you wish)
              Annual training and development budget
              Optional flu shot
              Daily catered breakfast
              Massage Wednesdays - we get professionals to do this!
              Friday parmas/pub lunch, plus happy hour in the office from 4PM
              Table tennis and pool tables, plus a games room with PS5 and dartboards
              Company retreats each year
              Paid volunteer day
              A full-time barista/kitchen manager who will make you coffee, tea and fresh juices
              Help yourself to the fully stocked drinks fridge and snack shelf
              We have many many more initiatives that we will roll out over the next 12 months.
        </p>


            "We are a 2023 Circle Back Initiative Employer - we commit to respond to every applicant"


            We believe that the unique contributions of everyone at Easygo are the driver of our success.

            To make sure that our products and culture continue to incorporate everyone's perspectives and experience we never discriminate on the basis of race, religion, national origin, gender identity or expression, sexual orientation, age, or marital, veteran, or disability status.

            We are passionate about providing a workplace that encourages great participation and an equal playing field, where merit and accomplishment are the only criteria for success.

        </div>
        </div>
      </div>

      }</>)
}

export { ChatInner }
