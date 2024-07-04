import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import computerImage from "/comp.jpg";
import itImage from "/it.jpg";
import mechanicalImage from "/mechanical.jpg";
import metallurgyImage from "/metallurgy.jpg";
import civilImage from "/civil.jpg";
import entcImage from "/entc.jpg";
import electricalImage from "/electrical.jpg";
import aimlImage from "/aiml.jpg";
import profile from "/profile.jpg"
import profile2 from "/profile2.jpg"
import { useParams } from "react-router-dom";
const courses = [
  {
    srNo: 1,
    name: "Computer Engineering",
    approvedBy:
      "AICTE, New Delhi F.No. Western/1-9317827728/2021/EOA Date: 02-Jul-2021.",
    affiliatingBody: "Maharashtra State Board of Technical Education, Mumbai",
    intake: 180,
    description:
      "Department was established in year 1993. It started functioning under Autonomous Polytechnic when the Institute was awarded Academic Autonomy.",
    image: computerImage,
    hod: "John Doe",
    hodImage :profile,
    vision:
      "To develop competent, self-reliant and progressive Information Technology Engineers to cater to technological advancements and societal needs.",
    mission: {
      1: "Design, develop and implement state-of-art curriculum with industry co-ordination to acquire knowledge and skill",
      2: "Provide competitive infrastructure with well-developed lab facilities and upgrade staff knowledge and skills.",
      3: "Groom student personality and inculcate soft skills.",
      4: "Expand IT based developments in institute.",
    },
    programOutcomes: {
      1: "Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the IT related engineering problems.",
      2: "Problem analysis: Identify and analyse well-defined IT related engineering problems using codified standard methods",
      3: "Design/ development of solutions: Design IT solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.",
      4: "Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements to IT related processes.",
      5: "Engineering practices for society, sustainability and environment: Apply IT (automation) solutions in context of society, sustainability, environment and ethical practices.",
    },
  },
  {
    srNo: 1,
    name: "IT Engineering",
    approvedBy:
      "AICTE, New Delhi F.No. Western/1-9317827728/2021/EOA Date: 02-Jul-2021.",
    affiliatingBody: "Maharashtra State Board of Technical Education, Mumbai",
    intake: 180,
    description:
      "Government Polytechnic Pune is offering three years Diploma Programme in Information Technology. Institute has academic Autonomy since1994. Department of IT is established in year 2000 with this autonomous institute. The department has well qualified and experienced faculty members and supporting staff. All laboratories are equipped with high configuration computers and required equipments.",
    image: itImage,
    hod: "John Doe",
    hodImage :profile,
    vision:
      "To develop competent, self-reliant and progressive Information Technology Engineers to cater to technological advancements and societal needs.",
    mission: {
      1: "Design, develop and implement state-of-art curriculum with industry co-ordination to acquire knowledge and skill",
      2: "Provide competitive infrastructure with well-developed lab facilities and upgrade staff knowledge and skills.",
      3: "Groom student personality and inculcate soft skills.",
      4: "Expand IT based developments in institute.",
    },
    programOutcomes: {
      1: "Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the IT related engineering problems.",
      2: "Problem analysis: Identify and analyse well-defined IT related engineering problems using codified standard methods",
      3: "Design/ development of solutions: Design IT solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.",
      4: "Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements to IT related processes.",
      5: "Engineering practices for society, sustainability and environment: Apply IT (automation) solutions in context of society, sustainability, environment and ethical practices.",
    },
  },
  {
    srNo: 1,
    name: "Mechanical Engineering",
    approvedBy:
      "AICTE, New Delhi F.No. Western/1-9317827728/2021/EOA Date: 02-Jul-2021.",
    affiliatingBody: "Maharashtra State Board of Technical Education, Mumbai",
    intake: 180,
    description: "Study mechanics, thermodynamics, and material science.",
    image: mechanicalImage,
    hod: "John Doe",
    hodImage :profile,
    vision:
      "To develop competent, self-reliant and progressive Information Technology Engineers to cater to technological advancements and societal needs.",
    mission: {
      1: "Design, develop and implement state-of-art curriculum with industry co-ordination to acquire knowledge and skill",
      2: "Provide competitive infrastructure with well-developed lab facilities and upgrade staff knowledge and skills.",
      3: "Groom student personality and inculcate soft skills.",
      4: "Expand IT based developments in institute.",
    },
    programOutcomes: {
      1: "Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the Electrical Engineering problems.",
      2: "Problem analysis: Identify and analyse well-defined Electrical Engineering problems using codified standard methods.",
      3: "Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs in Electrical Engineering.",
      4: "Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.",
      5: "Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.",
      6: "Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.",
      7: "Life-long learning: Ability to analyse individual needs and engage in updating in the context of technological changes in Electrical Engineering."
    },      
  },
  {
    srNo: 1,
    name: "Metallurgy Engineering",
    approvedBy:
      "AICTE, New Delhi F.No. Western/1-9317827728/2021/EOA Date: 02-Jul-2021.",
    affiliatingBody: "Maharashtra State Board of Technical Education, Mumbai",
    intake: 60,
    description: "Explore materials science and metallurgical processes.",
    image: metallurgyImage,
    hod: "John Doe",
    hodImage :profile,
    vision:
      "To develop competent, self-reliant and progressive Information Technology Engineers to cater to technological advancements and societal needs.",
    mission: {
      1: "Design, develop and implement state-of-art curriculum with industry co-ordination to acquire knowledge and skill",
      2: "Provide competitive infrastructure with well-developed lab facilities and upgrade staff knowledge and skills.",
      3: "Groom student personality and inculcate soft skills.",
      4: "Expand IT based developments in institute.",
    },
    programOutcomes: {
      1: "Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science, engineering fundamentals and discipline specific knowledge to solve core Metallurgical engineering related problems.",
      2: "Problem analysis: Identify and analyse well-defined Metallurgical engineering problems using codified standard methods.",
      3: "Design/ development of solutions: Design and develop solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.",
      4: "Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements related to Metallurgical engineering.",
      5: "Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.",
      6: "Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.",
      7: "Life-long learning: Engage in independent and life-long learning activities in the context of technological changes in the Metallurgical engineering field and allied industry."
    }    
  },
  {
    srNo: 1,
    name: "Civil Engineering",
    approvedBy:
      "AICTE, New Delhi F.No. Western/1-9317827728/2021/EOA Date: 02-Jul-2021.",
    affiliatingBody: "Maharashtra State Board of Technical Education, Mumbai",
    intake: 120,
    description:
      "Learn about structural engineering, construction, and infrastructure.",
    image: civilImage,
    hod: "John Doe",
    hodImage :profile,
    vision:
      "To develop competent, self-reliant and progressive Information Technology Engineers to cater to technological advancements and societal needs.",
    mission: {
      1: "Design, develop and implement state-of-art curriculum with industry co-ordination to acquire knowledge and skill",
      2: "Provide competitive infrastructure with well-developed lab facilities and upgrade staff knowledge and skills.",
      3: "Groom student personality and inculcate soft skills.",
      4: "Expand IT based developments in institute.",
    },
    programOutcomes: {
      1: "Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.",
      2: "Problem analysis: Identify and analyse well-defined engineering problems using codified standard methods.",
      3: "Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.",
      4: "Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.",
      5: "Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.",
      6: "Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.",
      7: "Life-long learning: Ability to analyse individual needs and engage in updating in the context of technological changes."
    }
  },
  {
    srNo: 1,
    name: "ENTC Engineering",
    approvedBy:
      "AICTE, New Delhi F.No. Western/1-9317827728/2021/EOA Date: 02-Jul-2021.",
    affiliatingBody: "Maharashtra State Board of Technical Education, Mumbai",
    intake: 60,
    description:
      "Focus on electronics, communication systems, and signal processing.",
    image: entcImage,
    hod: "John Doe",
    hodImage :profile,
    vision:
      "To develop competent, self-reliant and progressive Information Technology Engineers to cater to technological advancements and societal needs.",
    mission: {
      1: "Design, develop and implement state-of-art curriculum with industry co-ordination to acquire knowledge and skill",
      2: "Provide competitive infrastructure with well-developed lab facilities and upgrade staff knowledge and skills.",
      3: "Groom student personality and inculcate soft skills.",
      4: "Expand IT based developments in institute.",
    },
    programOutcomes: {
      1: "Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the IT related engineering problems.",
      2: "Problem analysis: Identify and analyse well-defined IT related engineering problems using codified standard methods",
      3: "Design/ development of solutions: Design IT solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.",
      4: "Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements to IT related processes.",
      5: "Engineering practices for society, sustainability and environment: Apply IT (automation) solutions in context of society, sustainability, environment and ethical practices.",
    },
  },
  {
    srNo: 1,
    name: "Electrical Engineering",
    approvedBy:
      "AICTE, New Delhi F.No. Western/1-9317827728/2021/EOA Date: 02-Jul-2021.",
    affiliatingBody: "Maharashtra State Board of Technical Education, Mumbai",
    intake: 120,
    description:
      "The Electrical Engineering Department was established in 1957. It offers three years' duration post SSC Full time and Part-time Diplomas in Electrical Engineering approved by All India Council for Technical Education (AICTE), New Delhi. Well qualified and experienced faculty members and supporting staff, well equipped laboratories, excellent academic results, strong connection with the industries and the alumni are the strengths of the department",
    image: electricalImage,
    hod: "John Doe",
    hodImage :profile,
    vision:
      "To develop competent, self-reliant and progressive Information Technology Engineers to cater to technological advancements and societal needs.",
    mission: {
      1: "Design, develop and implement state-of-art curriculum with industry co-ordination to acquire knowledge and skill",
      2: "Provide competitive infrastructure with well-developed lab facilities and upgrade staff knowledge and skills.",
      3: "Groom student personality and inculcate soft skills.",
      4: "Expand IT based developments in institute.",
    },
    programOutcomes: {
      1: "Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the Electrical Engineering problems.",
      2: "Problem analysis: Identify and analyse well-defined Electrical Engineering problems using codified standard methods.",
      3: "Design/ development of solutions: Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs in Electrical Engineering.",
      4: "Engineering Tools, Experimentation and Testing: Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.",
      5: "Engineering practices for society, sustainability and environment: Apply appropriate technology in context of society, sustainability, environment and ethical practices.",
      6: "Project Management: Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.",
      7: "Life-long learning: Ability to analyse individual needs and engage in updating in the context of technological changes in Electrical Engineering."
    }    
  },
  {
    srNo: 1,
    name: "AI and ML Engineering",
    approvedBy:
      "AICTE, New Delhi F.No. Western/1-9317827728/2021/EOA Date: 02-Jul-2021.",
    affiliatingBody: "Maharashtra State Board of Technical Education, Mumbai",
    intake: 60,
    description:
      "Explore artificial intelligence, machine learning, and data science.",
    image: aimlImage,
    hod: "John Doe",
    hodImage :profile,
    vision:
      "To develop competent, self-reliant and progressive Information Technology Engineers to cater to technological advancements and societal needs.",
    mission: {
      1: "Design, develop and implement state-of-art curriculum with industry co-ordination to acquire knowledge and skill",
      2: "Provide competitive infrastructure with well-developed lab facilities and upgrade staff knowledge and skills.",
      3: "Groom student personality and inculcate soft skills.",
      4: "Expand IT based developments in institute.",
    },
    programOutcomes: {
      1: "Basic and Discipline specific knowledge: Apply knowledge of basic mathematics, science, engineering fundamentals, and specialized knowledge in AI and ML to solve complex engineering problems.",
      2: "Problem analysis: Identify, formulate, and analyze complex AI and ML engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
      3: "Design/ development of solutions: Design solutions for complex AI and ML problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and cultural, societal, and environmental considerations.",
      4: "Engineering Tools, Experimentation and Testing: Apply modern AI and ML tools and techniques to conduct experiments, interpret data, and provide valid conclusions.",
      5: "Engineering practices for society, sustainability, and environment: Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues and the consequent responsibilities relevant to the professional engineering practice in AI and ML.",
      6: "Project Management: Demonstrate knowledge and understanding of AI and ML engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      7: "Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change in AI and ML."
    },    
  },
];
const Course = () => {
  const { cname } = useParams();

  const [course, setCourse] = useState({});
  useEffect(() => {
    setCourse(
      courses.find(function (c) {
        return c.name == cname;
      })
    );
  }, [cname]);
  return (
    <>
     {course && <div className="w-full min-h-screen absolute bg-zinc-800 flex">
        <div className="h-[70%] w-[15%] pb-3 m-7 rounded-xl bg-white ">
          <h1 className="text-center text-white text-2xl p-3 w-full border rounded-xl border-white bg-[#1F2937]">
            Courses
          </h1>
          <nav>
            <ul className="mt-3 flex flex-col text-center">
              <Link to={`/courses/${courses[0].name}`}>
                <li className="hover:bg-orange-600 rounded-lg p-5 ">Computer</li>
              </Link>
              <Link to={`/courses/${courses[1].name}`}>
                <li className="hover:bg-orange-600 rounded-lg p-5">Information Technology</li>
              </Link>
              <Link to={`/courses/${courses[2].name}`}>
                <li className="hover:bg-orange-600 rounded-lg p-5">Mechanical Engineering</li>
              </Link>
              <Link to={`/courses/${courses[3].name}`}>
                <li className="hover:bg-orange-600 rounded-lg p-5">{courses[3].name}</li>
              </Link>
              <Link to={`/courses/${courses[4].name}`}>
                <li className="hover:bg-orange-600 rounded-lg p-5">{courses[4].name}</li>
              </Link>
              <Link to={`/courses/${courses[5].name}`}>
                <li className="hover:bg-orange-600 rounded-lg p-5 ">{courses[5].name}</li>
              </Link>
              <Link to={`/courses/${courses[6].name}`}>
                <li className="hover:bg-orange-600 rounded-lg p-5">{courses[6].name}</li>
              </Link>
              <Link to={`/courses/${courses[7].name}`}>
                <li className="hover:bg-orange-600 rounded-lg p-5">{courses[7].name}</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="w-[80%] h-[fit] my-7 rounded-xl bg-white">
          <h1 className="text-center text-white text-2xl p-3 w-full border rounded-xl border-white bg-[#1F2937]">
            {course.name}
          </h1>
          <div>
          <div className="mx-[45vw] pb-3 my-2">
              <h1 className="text-nowrap mx-3 font-bold">HOD'S Desk</h1>
          </div>
          <div className="flex flex-row w-fit">
          <img src={course.hodImage} className="w-28 mx-[700px] rounded-full border border-black" alt="" />
          <p className="text-wrap w-80 -mx-[650px] my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis recusandae aliquam distinctio dicta vero deserunt aspernatur? Asperiores, eligendi iste!</p>
          </div></div>
          <p className="text-md max-w-[550px] mx-6 mt-[-150px]">
            {course.description}
          </p>
          <table className="w-2/4 mx-6 border-collapse my-5">
            <thead>
              <tr>
                <th className="border p-1 bg-orange-500 text-white text-sm">
                  Sr.no.
                </th>
                <th className="border p-1 bg-orange-500 text-white text-sm">
                  Name of the Programme
                </th>
                <th className="border p-1 bg-orange-500 text-white text-sm">
                  Approved by
                </th>
                <th className="border p-1 bg-orange-500 text-white text-sm">
                  Affiliating Body (University /Body)
                </th>
                <th className="border p-1 bg-orange-500 text-white text-sm">
                  Annual Intake
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-1 text-sm">{course.srNo}</td>
                <td className="border p-1 text-sm">{course.name}</td>
                <td className="border p-1 text-sm">{course.approvedBy}</td>
                <td className="border p-1 text-sm">{course.affiliatingBody}</td>
                <td className="border p-1 text-sm">{course.intake}</td>
              </tr>
            </tbody>
          </table>
          <div className="vision">
            <h1 className="text-lg font-bold mx-7 pb-4">Vision</h1>
            <hr className="mx-7" />
            <p className="mx-7 my-3">{course.vision}</p>
          </div>
          <div className="mission">
            <h1 className="text-lg font-bold mx-7 pb-4">Mission</h1>
            <hr className="mx-7" />
            <ul className="my-3">
              {course.mission &&
                Object.values(course.mission).map((element, index) => (
                  <li className="mx-7" key={index}>
                    {index + 1} : {element}
                  </li>
                ))}
            </ul>
          </div>
          <div className="outcomes">
          <h1 className="text-lg font-bold mx-7 pb-4">Programme Outcomes</h1>
            <hr className="mx-7" />
            <ul className="my-3">
              {course.programOutcomes &&
                Object.values(course.programOutcomes).map((element, index) => (
                  <li className="mx-7" key={index}>
                    {index + 1} : {element}
                  </li>
                ))}
            </ul>
          </div>
          
        </div>
      </div>
}
    </>
  );
};

export default Course;
