import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <div className="container w-screen">
        <Navbar></Navbar>
        <div className="img w-screen">
          <img
            src="public/loyola-university-chicago-lakeshore-campus-2400x750.jpg "
            alt="image"
          />
        </div>
        <div className="text mx-3 my-2 ">
          <h1 className="course-post-title text-[#003a6a] mb-0 text-3xl p-2">
            About Us
          </h1>
          <p>
            <p>
              The Government Polytechnic, Pune is one of the prominent
              institutes among polytechnics in Maharashtra. The institute was
              established in the year 1957, under the academic control of
              Maharashtra State Board of Technical Education, Maharashtra State.
              The institute was awarded academic autonomy in May 1994.
            </p>
            <br />
            <p>
              In early 1960s institute acquired current land and constructed its
              own infrastructure. Today it houses in its 28-acre campus, a main
              building, student hostels, classNamerooms for various courses,
              laboratories, library, canteen, post office, auditorium, and many
              more facilities. Entire campus is equipped with internet facility
              and secured connection.
            </p>
            <br />
            <p>
              Over the last four decades, more than 8000 diploma engineers from
              various disciplines are passed out. The institute has won several
              awards in academics as well as in socio-cultural activities and on
              the whole has succeeded in contributing humble positive efforts
              towards the building of a progressive society.
            </p>
            <br />
            The institute runs regular diploma programmes as:
            <ul className="list-disc list-inside">
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
              Advanced Diploma in Automotive Mechatronics Yamaha training school
              (Affiliated to ASDC, New Delhi) Awards received by the institute:
            </p>
            <ul className="list-disc list-inside">
              <li>
                'Best Polytechnic Award - 1998-99' by Government of Maharashtra
                for consistent excellent performance in technical education.
              </li>
              <li>ISTE - Narsee Monji - Best Overall Performance - 2007-08</li>
              <li>
                Government Polytechnic Pune received Best Polytechnic Award of
                ISTE (Maharashtra and Goa section) on 05th January, 2019 for
                outstanding contribution in the field of engineering
              </li>
              <li>
                'Nation Builder Award' for prolonged and dedicated services in
                the field of education from Uttar Bhartiya Sangh, Pune and
                Rotary Club Riverside jointly received by faculties of
                Government Polytechnic Pune consecutively from 2016 to 2018.
              </li>
            </ul>
          </p>
          <br />
          <br />

          <div className="mission text-center">
            <h1 className="course-post-title text-[#003a6a] mb-0 text-3xl p-2">
              Vission
            </h1>
            <p>
              To develop self-reliant, versatile, innovative, quality conscious
              engineers for betterment of society.
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
          </div>
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
                      <h3 className="course-post-title text-[#003a6a] mb-0 text-3xl p-2">
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
                                  DBT activity and coordination
                                </td>
                                <td className="p-6 text-sm">
                                  SHRI. S. S. KHULE
                                </td>
                                <td className="p-6 text-sm">
                                  off.ss@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">020-25559210</td>
                              </tr>
                              <tr>
                                <td className="p-6 text-sm">
                                  <center>8</center>
                                </td>
                                <td className="p-6 text-sm">
                                  DBT activity and coordination
                                </td>
                                <td className="p-6 text-sm">
                                  Shri. V. G. Tambe.{" "}
                                </td>
                                <td className="p-6 text-sm">
                                  off.ss@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">020-25559265</td>
                              </tr>
                              <tr className="bg-gray-200">
                                <td className="p-6 text-sm">
                                  <center>9</center>
                                </td>
                                <td className="p-6 text-sm">
                                  Account Section (Tuition Fees/ Dues/ etc)
                                </td>
                                <td className="p-6 text-sm">
                                  SHRI. SANTOSH SHINDE
                                </td>
                                <td className="p-6 text-sm">
                                  off.ss@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">020-25559208</td>
                              </tr>
                              <tr>
                                <td className="p-6 text-sm">
                                  <center>10</center>
                                </td>
                                <td className="p-6 text-sm">
                                  Training & Placement Officer
                                </td>
                                <td className="p-6 text-sm">
                                  DR. D. N. REVADKAR
                                </td>
                                <td className="p-6 text-sm">
                                  tpo@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">
                                  020-25559230/020-25559281
                                </td>
                              </tr>
                              <tr className="bg-gray-200">
                                <td className="p-6 text-sm">
                                  <center>11</center>
                                </td>
                                <td className="p-6 text-sm">NBA Coordinator</td>
                                <td className="p-6 text-sm">
                                  {" "}
                                  SMT. NAMITA KADAM
                                </td>
                                <td className="p-6 text-sm">
                                  mt.hod@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">020-25559230</td>
                              </tr>
                              <tr>
                                <td className="p-6 text-sm">
                                  <center>12</center>
                                </td>
                                <td className="p-6 text-sm">Gymkhana</td>
                                <td className="p-6 text-sm">
                                  Mr. H. P. Naiknavare
                                </td>
                                <td className="p-6 text-sm">
                                  hanumant@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">020-25559250</td>
                              </tr>
                              <tr className="bg-gray-200">
                                <td className="p-6 text-sm">
                                  <center>13</center>
                                </td>
                                <td className="p-6 text-sm">
                                  Cell for Persons with Disability
                                </td>
                                <td className="p-6 text-sm">
                                  Shri. P. B. Kamble
                                </td>
                                <td className="p-6 text-sm">
                                  kamble.p@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">020-25559266</td>
                              </tr>
                              <tr>
                                <td className="p-6 text-sm">
                                  <center>14</center>
                                </td>
                                <td className="p-6 text-sm">
                                  Entrepreneurship and Incubation center
                                </td>
                                <td className="p-6 text-sm">
                                  DR. D. N. REVADKAR,
                                </td>
                                <td className="p-6 text-sm">
                                  tpo@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">020-25561986</td>
                              </tr>
                              <tr className="bg-gray-200">
                                <td className="p-6 text-sm">
                                  <center>15</center>
                                </td>
                                <td className="p-6 text-sm">
                                  AICTE related activity
                                </td>
                                <td className="p-6 text-sm">
                                  Shri. N. D. Toradmal
                                </td>
                                <td className="p-6 text-sm">
                                  nitin.toradmal@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm"> 020-25561986</td>
                              </tr>
                              <tr>
                                <td className="p-6 text-sm">
                                  <center>16</center>
                                </td>
                                <td className="p-6 text-sm">
                                  Central Stores and Purchase officer
                                </td>
                                <td className="p-6 text-sm">SUDIN KULKARNI</td>
                                <td className="p-6 text-sm">
                                  stores@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">-</td>
                              </tr>
                              <tr className="bg-gray-200">
                                <td className="p-6 text-sm">
                                  <center>17</center>
                                </td>
                                <td className="p-6 text-sm">Civil Works</td>
                                <td className="p-6 text-sm">
                                  Dr. V. B. Kondawar
                                </td>
                                <td className="p-6 text-sm">
                                  ce.hod@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">020-25559210</td>
                              </tr>
                              <tr>
                                <td className="p-6 text-sm">
                                  <center>18</center>
                                </td>
                                <td className="p-6 text-sm">
                                  Electrical Works
                                </td>
                                <td className="p-6 text-sm">
                                  Mr. S. S. Ashtaputre
                                </td>
                                <td className="p-6 text-sm">
                                  ashtaputre.sunil@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">020-25559220</td>
                              </tr>
                              <tr className="bg-gray-200">
                                <td className="p-6 text-sm">
                                  <center>19</center>
                                </td>
                                <td className="p-6 text-sm">
                                  Students Sports Activity: Inter Engineering
                                  Diploma Sports Association (IEDSSA)
                                </td>
                                <td className="p-6 text-sm">
                                  DR. S. S. BHARATKAR
                                </td>
                                <td className="p-6 text-sm">
                                  ee.hod@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">020-25559236</td>
                              </tr>
                              <tr>
                                <td className="p-6 text-sm">
                                  <center>20</center>
                                </td>
                                <td className="p-6 text-sm">
                                  Students Sports Activity: Inter Engineering
                                  Diploma Sports Association (IEDSSA)
                                </td>
                                <td className="p-6 text-sm">
                                  SUNIL ASHTAPUTRE, SUNIL DATE
                                </td>
                                <td className="p-6 text-sm">
                                  ashtaputre.sunil@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">020-25559286</td>
                              </tr>
                              <tr className="bg-gray-200">
                                <td className="p-6 text-sm">
                                  <center>21</center>
                                </td>
                                <td className="p-6 text-sm">MIS Cell</td>
                                <td className="p-6 text-sm">SMT. S. S. SANT</td>
                                <td className="p-6 text-sm">
                                  mis_coord@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">020-25559284</td>
                              </tr>
                              <tr>
                                <td className="p-6 text-sm">
                                  <center>22</center>
                                </td>
                                <td className="p-6 text-sm">Website</td>
                                <td className="p-6 text-sm">
                                  SMT. J. R. HANGE
                                </td>
                                <td className="p-6 text-sm">
                                  hod_comp@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">020-25559287</td>
                              </tr>
                              <tr className="bg-gray-200">
                                <td className="p-6 text-sm">
                                  <center>23</center>
                                </td>
                                <td className="p-6 text-sm">
                                  Alumni Association
                                </td>
                                <td className="p-6 text-sm">
                                  Shri. V. G. Tambe
                                </td>
                                <td className="p-6 text-sm">
                                  ce.hod@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">020-25559250</td>
                              </tr>
                              <tr>
                                <td className="p-6 text-sm">
                                  <center>24</center>
                                </td>
                                <td className="p-6 text-sm">
                                  Alumni Association
                                </td>
                                <td className="p-6 text-sm">
                                  SHRI. S. S. KHULE
                                </td>
                                <td className="p-6 text-sm">
                                  office.ss@gppune.ac.in
                                </td>
                                <td className="p-6 text-sm">020-25559210</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* <!-- /.course-post --> */}
                  </div>
                  {/* <!-- /.col-md-12 --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
            </div>
            {/* <!-- /.row --> */}
          </div>

          <div className="history">
            <h1 className="course-post-title text-[#003a6a] mt-4 mb-2 text-3xl p-2">
              History
            </h1>
            <p>
              {" "}
              This institute was created by Board of Technical Education,
              Maharashtra State, India. Government of Maharashtra granted
              initial funding and started 3 years Diploma in Engineering
              courses. Initial years the Institute did not have its own building
              and class rooms. They used College of Engineering, Pune premises
              to conduct classes. Later in the early 1960s they acquired land
              from Shirole (Patil) family and constructed current building.
            </p>
            <br />
            <p>
              The Institute also owns its own boat club next to College of
              Engineering, Pune. They have fleet of many boats for students to
              practice and participate in annual race called Regatta. Many past
              students have enjoyed this rare opportunity to go on boat rides in
              the junction of two rivers "Mula" and "Mutha"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
