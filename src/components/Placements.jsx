import React from 'react'
import Navbar from './Navbar'
import college from '/college.png'
import person from '/person.png'
import CarouselComp from './Carousel'


const Placements = () => {
  return (
    <>
      <Navbar />
      <div className='relative h-[650px]'>
        <img src={college} alt='' className='w-screen h-[665px]' />
        <div className='absolute top-0 left-0 mt-[150px] ml-[300px] w-3/5 h-1/2 flex items-center justify-center'>
          <div className='bg-slate-950 bg-opacity-50 p-8 rounded-lg'>
            <h1 class="mb-4 text-lg font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">A one stop portal for<span class="text-transparent bg-clip-text bg-gradient-to-r from-black via-sky-500 to-black"> Placements & Internships</span></h1>
            <br></br>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, rem! Repudiandae officia deleniti molestiae eligendi dolore voluptas. Ipsa modi a fuga amet unde dolores at. Voluptates unde iure aut itaque laborum sint, enim aliquam, nam non ipsam fugiat eum officiis amet molestias expedita eligendi soluta vero, odit nisi quibusdam labore voluptatum? Ipsa, veniam dolor? Architecto, temporibus tempora numquam ex sit expedita laboriosam dolor. Nobis, dignissimos excepturi? Qui eaque cumque iure. Tempora saepe similique iusto repellendus facere veniam! Numquam dolor consequatur ipsa minima accusamus facilis doloremque ullam hic ab sunt, aliquam ipsam quas dolorum aut quo quod voluptatibus, quaerat provident maiores?</p>
          </div>
        </div>
      </div>

      {/* Objectives */}
      <div className='bg-gray-100 flex justify-center'>
        <div className='border-2 border-black border-solid p-11 rounded-2xl mt-[100px] bg-gradient-to-r from-gray-900 to-cyan-900'>
          <h2 class="mb-2 text-center font-bold text-3xl text-gray-900 dark:text-white">Objectives</h2><br></br>
          <ul class=" space-y-1 text-gray-500 list-disc list-inside dark:text-white text-lg">
            <li>
              Create illustrious Placement Record by facilitating dream job opportunities for the students at topmost multinational companies.
            </li>
            <li>
              Strive for sheer diversity of recruiters and the job profiles across all domains and the sectors.
            </li>
            <li>
              Facilitate vigorous institute-industry collaborations for placement and internship opportunities .
            </li>
            <li>
              Collaborate with industry for live projects, Research work, Workshop or any academic alliance.
            </li>
          </ul>
        </div>
      </div>

      {/* too many divs in one section */}
      <div className='flex flex-row bg-gray-100 p-5 mb-[50px]"'>
        <div className='bg-gray-100 flex flex-col justify-start p-6'>
          <div className='mt-[100px]'>
            <ul className='max-w-md divide-y w-80'>
              <li className='p-3 sm:pb-4 border-black border-b-4 bg-gray-300 text-center font-bold text-xl'>Student Corner</li>
              {[
                { text: 'Live Programs', link: '/' },
                { text: 'Part Time and Internships', link: '/' },
                { text: 'Resources', link: '/' },
                { text: 'Students Placed', link: '/' },
                { text: 'Passed out', link: '/' },
              ].map((item, index) => (
                <li key={index} className='p-4 sm:pb-4 border-black border-b-2 font-medium  hover:bg-gray-300 text-base'>
                  <a href={item.link} className="flex items-center hover:text-sky-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right mr-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-[50px]'>
            <ul className='max-w-md divide-y w-80'>
              <li className='p-3 sm:pb-4 border-black border-b-4 bg-gray-300 text-center font-bold text-xl'>Announcement</li>
              {[
                { text: 'Circular 1 - 13th April 2022', link: '/' },
                { text: 'Internshala Annual Rankings 21', link: '/' },
              ].map((item, index) => (
                <li key={index} className='p-4 sm:pb-4 border-black border-b-2 font-medium  hover:bg-gray-300 text-base'>
                  <a href={item.link} className="flex items-center hover:text-sky-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right mr-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-[50px]'>
            <ul className='max-w-md divide-y w-80'>
              <li className='p-3 sm:pb-4 border-black border-b-4 bg-gray-300 text-center font-bold text-xl'>Training and Placements</li>
              {[
                { text: '2020-2021', link: '/' },
                { text: '2022-2023', link: '/' },
                { text: '2023-2024', link: '/' },
              ].map((item, index) => (
                <li key={index} className='p-4 sm:pb-4 border-black border-b-2 font-medium  hover:bg-gray-300 text-base'>
                  <a href={item.link} className="flex items-center hover:text-sky-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right mr-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-[50px]'>
            <ul className='max-w-md divide-y w-80'>
              <li className='p-3 sm:pb-4 border-black border-b-4 bg-gray-300 text-center font-bold text-xl'>Annual Reports</li>
              {[
                { text: '2023-2024', link: '/' },
                { text: '2022-2023', link: '/' },
              ].map((item, index) => (
                <li key={index} className='p-4 sm:pb-4 border-black border-b-2 font-medium  hover:bg-gray-300 text-base'>
                  <a href={item.link} className="flex items-center hover:text-sky-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right mr-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-[50px]'>
            <ul className='max-w-md divide-y w-80'>
              <li className='p-3 sm:pb-4 border-black border-b-4 bg-gray-300 text-center font-bold text-xl'>News and Events</li>
              {[
                { text: '2023-2024', link: '/' },
              ].map((item, index) => (
                <li key={index} className='p-4 sm:pb-4 border-black border-b-2 font-medium  hover:bg-gray-300 text-base'>
                  <a href={item.link} className="flex items-center hover:text-sky-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right mr-2" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Paragraph part */}
        <div className='ml-14 mt-[100px] p-10 bg-white max-w-xl max-h-lvh'>
          <h2 class="mb-2 text-center font-semibold font-serif text-3xl text-gray-900 dark:text-black">Placements</h2>
          <br></br>
          <p className='text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, maiores aut veritatis amet tempore cumque quas excepturi, quam reiciendis voluptate et necessitatibus exercitationem ipsa maxime aliquid provident iste suscipit reprehenderit.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eligendi neque consequuntur nostrum quas officia dolor natus? Consequuntur, tempora quisquam. Illo, enim laudantium quod, asperiores assumenda atque error, voluptates nesciunt quasi ab laboriosam. Saepe enim officia quod, illo suscipit soluta, laudantium culpa porro autem maxime possimus veniam recusandae fugit sunt.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde id consectetur vel voluptas aliquam atque, officiis, sunt, delectus modi facilis earum! Omnis quidem unde doloribus sapiente harum id, nesciunt eos laudantium. Veritatis, quisquam ducimus. Deleniti sapiente nulla dicta sequi! Eaque?
          </p>
          <br></br>
          <p className='p-4 sm:pb-4 font-medium text-base'>
            <a href='/' className="flex items-center hover:text-sky-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right mr-2" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
              Read more
            </a>
          </p>
        </div>

        {/* Person's info */}
        <div className='flex flex-col'>
          <div className="ml-16 mt-[100px] w-96 bg-white flex flex-col items-center max-w-md max-h-lvh">
            <h2 className="p-4 border-black border-b-4 bg-gray-300 text-center font-bold text-xl w-full">Director's Desk</h2>
            <img src={person} alt="Director" className="mt-4 mb-4 w-64 h-64 rounded-full" />
            <h2 className="mb-2 text-center font-semibold font-serif text-xl text-black">Mr. Ravin Singh</h2>
            <address className="text-lg text-left">
              <p>Training & Placement,</p>
              <p>Inseed College (Autonomous),</p>
              <p>Chennai - 600 034.</p>
              <p>Tel: +91 44 28178309</p>
              <p>Mobile/WhatsApp: 0091 - 9884925258</p>
              <br />
              <p>For Corporate Enquiries:</p>
              <p><a href="mailto:placement@inseedcollege.edu">placement@inseedcollege.edu</a></p>
              <br />
              <p>For Student Enquiries:</p>
              <p><a href="mailto:support.placement@inseedcollege.edu">support.placement@inseedcollege.edu</a></p>
            </address>
            <a href="/" className="p-4 sm:pb-4 font-medium text-base flex items-center hover:text-sky-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right mr-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
              Read more
            </a>
          </div>

          {/* gallery */}
          <div className="ml-16 mt-[100px] w-96 bg-white flex flex-col items-center max-w-md max-h-lvh">
            <h2 className="p-4 border-black border-b-4 bg-gray-300 text-center font-bold text-xl w-full">Gallery</h2>
            <CarouselComp />
          </div>
        </div>
      </div>


      {/* footer part */}
      <footer className="bg-gray-800 text-white py-4 ">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 College Name. All rights reserved.</p>
          <p className="text-sm">
            <a href="/about" className="hover:underline">About</a> |
            <a href="/contact" className="hover:underline"> Contact</a> |
            <a href="/privacy" className="hover:underline"> Privacy Policy</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Placements
