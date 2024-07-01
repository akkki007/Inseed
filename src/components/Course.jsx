import React from 'react';
import { useParams } from 'react-router-dom';
import computerImage from './computer.jpg';
import itImage from './it.jpg';
import mechanicalImage from './mechanical.jpg';
import metallurgyImage from './metallurgy.jpg';
import civilImage from './civil.jpg';
import entcImage from './entc.jpg';
import electricalImage from './electrical.jpg';
import aimlImage from './aiml.jpg';

const courseImages = {
  'computer-engineering': computerImage,
  'it-engineering': itImage,
  'mechanical-engineering': mechanicalImage,
  'metallurgy-engineering': metallurgyImage,
  'civil-engineering': civilImage,
  'entc-engineering': entcImage,
  'electrical-engineering': electricalImage,
  'ai-ml-engineering': aimlImage,
};

const Course = () => {
  const { courseName } = useParams();

  const courseInfo = courses.find(course => course.path === `/courses/${courseName}`);

  if (!courseInfo) {
    return <div className="container mx-auto p-4">Course not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{courseInfo.name}</h1>
      <img src={courseInfo.image} alt={courseInfo.name} className="w-full h-auto mb-4 rounded-lg shadow-lg" />
      <p>{courseInfo.description}</p>
    </div>
  );
};

export default Course;
