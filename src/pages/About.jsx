import React from "react";
const About = () => {
  return (
    <>
      <div className="container w-screen">
        <div className="img w-screen flex">
          <img
            src="public/loyola-university-chicago-lakeshore-campus-2400x750.jpg"
            alt="image"
          />
        </div>
        <div className="mainText w-screen flex flex-wrap bg-zinc-200 p-4">
          <div className="textInfo flex-1 mx-3 my-2 ml-0 bg-white pl-2 pr-2">
            <h1 className="course-post-title text-[#003a6a] mb-0 text-3xl p-2">
              About Us
            </h1>
            <p>
              <p>
                The Inseed, Pune is one of the prominent institutes among
                polytechnics in Maharashtra. The institute was established in
                the year 1957, under the academic control of Maharashtra State
                Board of Technical Education, Maharashtra State. The institute
                was awarded academic autonomy in May 1994.
              </p>
              <br />
              <p>
                In early 1960s institute acquired current land and constructed
                its own infrastructure. Today it houses in its 28-acre campus, a
                main building, student hostels, classrooms for various courses,
                laboratories, library, canteen, post office, auditorium, and
                many more facilities. The entire campus is equipped with
                internet facility and secured connection.
              </p>
              <br />
              <p>
                Over the last four decades, more than 8000 diploma engineers
                from various disciplines have passed out. The institute has won
                several awards in academics as well as in socio-cultural
                activities and on the whole has succeeded in contributing humble
                positive efforts towards the building of a progressive society.
              </p>
              <br />
              The institute runs regular diploma programmes as:
              <ul className="list-disc list-inside mx-5">
                <li>Diploma in Civil Engineering</li>
                <li>Diploma in Electrical Engineering</li>
                <li>Diploma in Electronic and Telecommunication</li>
                <li>Diploma in Mechanical Engineering</li>
                <li>Diploma in Metallurgical Engineering</li>
                <li>Diploma in Computer Engineering</li>
                <li>Diploma in Information Technology</li>
                <li>Diploma in Dress Design and Garment Manufacturing</li>
              </ul>
              <br />
              <p>Institute also runs courses:</p>
              <p>
                Advanced Diploma in Automotive Mechatronics Yamaha training
                school (Affiliated to ASDC, New Delhi) Awards received by the
                institute:
              </p>
              <ul className="list-disc list-inside mx-5">
                <li>
                  'Best Polytechnic Award - 1998-99' by Government of
                  Maharashtra for consistent excellent performance in technical
                  education.
                </li>
                <li>
                  ISTE - Narsee Monji - Best Overall Performance - 2007-08
                </li>
                <li>
                  Inseed Pune received Best Polytechnic Award of ISTE
                  (Maharashtra and Goa section) on 05th January, 2019 for
                  outstanding contribution in the field of engineering
                </li>
                <li>
                  'Nation Builder Award' for prolonged and dedicated services in
                  the field of education from Uttar Bhartiya Sangh, Pune and
                  Rotary Club Riverside jointly received by faculties of Inseed
                  Pune consecutively from 2016 to 2018.
                </li>
              </ul>
            </p>
            <br />
            <br />

            <div className="container mx-auto px-4">
              <div className="row">
                {/* <!-- Here begin Main Content --> */}
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-12">
                      <br />
                      <div className="course-details clearfix pb-0">
                        <h3
                          id="administration"
                          className="course-post-title text-[#003a6a] mb-0 text-3xl p-2"
                        >
                          Administration
                        </h3>
                        <hr />
                        <p></p>
                        <div className="container mx-auto">
                          <div className="table-responsive">
                            <table className="w-full">
                              <thead className="bg-gray-50 border-b-130 border-white">
                                <tr>
                                  <th className="bg-slate-900 text-white p-2 text-md tracking-wide">
                                    Sr.no.
                                  </th>
                                  <th className="bg-slate-900 text-white p-2 text-sm tracking-wide">
                                    Activity/Dept/Cell
                                  </th>
                                  <th className="bg-slate-900 text-white p-2 text-sm tracking-wide">
                                    Name of Officer
                                  </th>
                                  <th className="bg-slate-900 text-white p-2 text-sm tracking-wide">
                                    Email
                                  </th>
                                  <th className="bg-slate-900 text-white p-2 text-sm tracking-wide">
                                    Contact No.
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="bg-gray-200">
                                  <td className="p-6 text-sm">
                                    <center>1</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    Academic Coordination and Curriculum
                                    Development
                                  </td>
                                  <td className="p-6 text-sm">
                                    DR. V. B. JAWARE
                                  </td>
                                  <td className="p-6 text-sm">
                                    me.hod@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559230</td>
                                </tr>
                                <tr>
                                  <td className="p-6 text-sm">
                                    <center>2</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    Academic Coordination and Curriculum
                                    Development
                                  </td>
                                  <td className="p-6 text-sm">
                                    Dr. S. S Bharatkar
                                  </td>
                                  <td className="p-6 text-sm">
                                    cdc@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559263</td>
                                </tr>
                                <tr className="bg-gray-200">
                                  <td className="p-6 text-sm">
                                    <center>3</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    Office Registrar
                                  </td>
                                  <td className="p-6 text-sm">
                                    Shri. S. S Khule <br /> Mr. S. A. Patil
                                  </td>
                                  <td className="p-6 text-sm">
                                    off.ss@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559202</td>
                                </tr>
                                <tr>
                                  <td className="p-6 text-sm">
                                    <center>4</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    Examination Cell
                                  </td>
                                  <td className="p-6 text-sm">
                                    Dr. V. B. Jaware
                                  </td>
                                  <td className="p-6 text-sm">
                                    exam.co@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559262</td>
                                </tr>
                                <tr className="bg-gray-200">
                                  <td className="p-6 text-sm">
                                    <center>5</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    First Year Admissions
                                  </td>
                                  <td className="p-6 text-sm">
                                    DR. KISHOR KALE, HEAD APPLIED MECHANICS
                                    DEPARTMENT
                                  </td>
                                  <td className="p-6 text-sm">
                                    admission@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559265</td>
                                </tr>
                                <tr>
                                  <td className="p-6 text-sm">
                                    <center>6</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    Students Section (Scholarships/ Leaving
                                    Certificate/ Bonafide Certificate, etc)
                                  </td>
                                  <td className="p-6 text-sm">
                                    Shri. S. S. Khule <br /> Mr. S. A. Patil
                                  </td>
                                  <td className="p-6 text-sm">
                                    off.ss@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559203</td>
                                </tr>
                                <tr className="bg-gray-200">
                                  <td className="p-6 text-sm">
                                    <center>7</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    Training and Placement Cell
                                  </td>
                                  <td className="p-6 text-sm">
                                    Prof. S. G. Dhamal
                                  </td>
                                  <td className="p-6 text-sm">
                                    tpo@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559246</td>
                                </tr>
                                <tr>
                                  <td className="p-6 text-sm">
                                    <center>8</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    Gymkhana Coordinator (Sports Activities)
                                  </td>
                                  <td className="p-6 text-sm">
                                    Prof. R. P. Nikam
                                  </td>
                                  <td className="p-6 text-sm">
                                    gymkhana@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559237</td>
                                </tr>
                                <tr className="bg-gray-200">
                                  <td className="p-6 text-sm">
                                    <center>9</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    National Service Scheme (NSS)
                                  </td>
                                  <td className="p-6 text-sm">
                                    Prof. H. V. Patil
                                  </td>
                                  <td className="p-6 text-sm">
                                    nss@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559238</td>
                                </tr>
                                <tr>
                                  <td className="p-6 text-sm">
                                    <center>10</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    Cultural Activities
                                  </td>
                                  <td className="p-6 text-sm">
                                    Prof. S. S. Chavan
                                  </td>
                                  <td className="p-6 text-sm">
                                    cultsec@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559238</td>
                                </tr>
                                <tr className="bg-gray-200">
                                  <td className="p-6 text-sm">
                                    <center>11</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    Industry Institute Interaction Cell
                                  </td>
                                  <td className="p-6 text-sm">
                                    Dr. P. R. Thube
                                  </td>
                                  <td className="p-6 text-sm">
                                    iiicell@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559264</td>
                                </tr>
                                <tr>
                                  <td className="p-6 text-sm">
                                    <center>12</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    Internal Complaint Committee (ICC)
                                  </td>
                                  <td className="p-6 text-sm">
                                    Prof. U. G. Kawade
                                  </td>
                                  <td className="p-6 text-sm">
                                    icc@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559266</td>
                                </tr>
                                <tr className="bg-gray-200">
                                  <td className="p-6 text-sm">
                                    <center>13</center>
                                  </td>
                                  <td className="p-6 text-sm">SC-ST Cell</td>
                                  <td className="p-6 text-sm">
                                    Prof. P. D. Wani
                                  </td>
                                  <td className="p-6 text-sm">
                                    scstcell@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559234</td>
                                </tr>
                                <tr>
                                  <td className="p-6 text-sm">
                                    <center>14</center>
                                  </td>
                                  <td className="p-6 text-sm">Hostel Rector</td>
                                  <td className="p-6 text-sm">
                                    Prof. S. S. Wagh
                                  </td>
                                  <td className="p-6 text-sm">
                                    hostelrector@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559241</td>
                                </tr>
                                <tr className="bg-gray-200">
                                  <td className="p-6 text-sm">
                                    <center>15</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    EARN AND LEARN SCHEME
                                  </td>
                                  <td className="p-6 text-sm">
                                    Prof. B. D. Patil
                                  </td>
                                  <td className="p-6 text-sm">
                                    earnlearn@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559233</td>
                                </tr>
                                <tr>
                                  <td className="p-6 text-sm">
                                    <center>16</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    Vishakha Samiti
                                  </td>
                                  <td className="p-6 text-sm">
                                    Prof. U. G. Kawade
                                  </td>
                                  <td className="p-6 text-sm">
                                    vsamiti@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559266</td>
                                </tr>
                                <tr className="bg-gray-200">
                                  <td className="p-6 text-sm">
                                    <center>17</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    Right to Information (RTI) Cell
                                  </td>
                                  <td className="p-6 text-sm">
                                    Dr. S. S. Bharatkar
                                  </td>
                                  <td className="p-6 text-sm">
                                    rti@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559240</td>
                                </tr>
                                <tr>
                                  <td className="p-6 text-sm">
                                    <center>18</center>
                                  </td>
                                  <td className="p-6 text-sm">
                                    Vishakha Samiti
                                  </td>
                                  <td className="p-6 text-sm">
                                    Prof. U. G. Kawade
                                  </td>
                                  <td className="p-6 text-sm">
                                    vsamiti@gppune.ac.in
                                  </td>
                                  <td className="p-6 text-sm">020-25559266</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        {/* <!-- /.End of table div --> */}
                      </div>
                      {/* <!-- /.End of Course-details --> */}
                    </div>
                    {/* <!-- /.End of row div --> */}
                  </div>
                  {/* <!-- /.End of col-md-8 div --> */}
                </div>
                {/* <!-- /.End of col-md-12 div --> */}
              </div>
              {/* <!-- /.End of row div --> */}
            </div>

            <div id="history" className="history">
              <h1 className="course-post-title text-[#003a6a] mt-4 mb-2 text-3xl p-2">
                History
              </h1>
              <p className="mx-2">
                {" "}
                This institute was created by Board of Technical Education,
                Maharashtra State, India. Government of Maharashtra granted
                initial funding and started 3 years Diploma in Engineering
                courses. Initial years the Institute did not have its own
                building and class rooms. They used College of Engineering, Pune
                premises to conduct classes. Later in the early 1960s they
                acquired land from Shirole (Patil) family and constructed
                current building.
              </p>
              <br />
              <p className="mx-2">
                The Institute also owns its own boat club next to College of
                Engineering, Pune. They have fleet of many boats for students to
                practice and participate in annual race called Regatta. Many
                past students have enjoyed this rare opportunity to go on boat
                rides in the junction of two rivers "Mula" and "Mutha"
              </p>
            </div>
            <br />
            <br />
            <div id="mission-and-vision" className="mission text-center">
              <h1 className="course-post-title text-[#003a6a] mb-0 text-3xl p-2">
                Vission
              </h1>
              <p>
                To develop self-reliant, versatile, innovative, quality
                conscious engineers for betterment of society.
              </p>
              <br />
              <h1 className="course-post-title text-[#003a6a] mb-0 text-3xl p-2">
                Mission
              </h1>
              <ol className="list-inside list-decimal text-balance">
                <li>
                  Imparting updated curriculum in association with stakeholders.
                </li>
                <li>
                  Providing with the state of art infrastructure & facilities.{" "}
                </li>
                <li>Set up strategic alliance with industries.</li>
                <li>Enhancing e-governance.</li>
                <li>Continuous development of faculty & staff.</li>
              </ol>
              <br /> <br />
            </div>
          </div>

          <div className="rightText w-1/3 mx-3 my-2 bg-white pl-2 pr-2">
            <h1 className="course-post-title text-[#003a6a] mb-0 text-3xl p-2">
              Principal's Message
            </h1>
            <div className="image flex justify-center items-center p-4">
              <img
                src="public/high-school-principal.jpg"
                alt="principal"
                className="h-56 w-56"
              />
            </div>
            <p>
              It gives me immense pride and pleasure to welcome you to our 5
              college which aims at transforming young minds into competent
              engineers. Our dedicated faculty, industry-oriented curriculum,
              and state-of-the-art facilities create an ideal environment for
              learning and innovation. We believe in holistic development and
              encourage our students to participate in various extracurricular
              activities to enhance their skills.
            </p>
            <br />
            <p>
              We strive to impart quality education and produce graduates who
              are not only academically proficient but also possess strong
              ethical values. I invite you to join us on this journey of
              knowledge, growth, and excellence.
            </p>
            <br />
            <p className="text-right font-bold">- Dr. [Travis Head]</p>
            <div className="gallery">
              <h1 className="course-post-title text-[#003a6a] mb-0 text-3xl p-2">
                Gallery
              </h1>
              <div className="image overflow-auto touch-y max-h-96 space-y-2 p-4">
                <img
                  src="public/galleryImage/g1.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g2.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g3.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g4.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g5.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g6.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g7.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g8.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g9.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g10.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g11.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g12.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g13.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g14.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g15.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g16.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g17.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g18.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g19.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g20.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
                <img
                  src="public/galleryImage/g21.jpeg"
                  alt="image"
                  className="hover:opacity-75"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;