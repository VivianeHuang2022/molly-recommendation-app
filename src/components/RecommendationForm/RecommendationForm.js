// RecommendationForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.js'
import "./RecommendationForm.css"

// Validation Schema
const validationSchema = Yup.object({
  applySchool: Yup.string().required('Required'),
  applyProgram: Yup.string().required('Required'),
  recommendeeName: Yup.string().required('Required'),
  recommenderName: Yup.string().required('Required'),
  recommenderPosition: Yup.string().required('Required'),
  recommenderInstitution: Yup.string().required('Required'),
  recommenderPhone: Yup.string().required('Required'),
  recommenderEmail: Yup.string().email('Invalid email address').required('Required'),
  recommenderAddress: Yup.string().required('Required'),
  recommenderZipCode: Yup.string().required('Required'),
  recommenderIntro: Yup.string().required('Required'),
  recommendRelationship: Yup.string().required('Required'),
  recommendActivity: Yup.string().required('Required'),
});

const initialValues = {
  applySchool: '',
  applyProgram: '',
  recommendeeName: '',
  recommenderName: '',
  recommenderPosition: '',
  recommenderInstitution: '',
  recommenderPhone: '',
  recommenderEmail: '',
  recommenderAddress: '',
  recommenderZipCode: '',
  recommenderIntro: '',
  recommendRelationship: '',
  recommendActivity: '',
};

// Labels Mapping
const labelsMapping = {
    applySchool: 'School Applied To',
    applyProgram: 'Program Applied To',
    recommendeeName: 'Name of the person you want to recommend',
    recommenderName: 'Recommender\'s Name',
    recommenderPosition: 'Recommender\'s Position',
    recommenderInstitution: 'Recommender\'s Institution',
    recommenderPhone: 'Recommender\'s Phone Number',
    recommenderEmail: 'Recommender\'s Email Address',
    recommenderAddress: 'Recommender\'s Address',
    recommenderZipCode: 'Recommender\'s Zip Code',
    recommenderIntro: 'Introduction of Recommender',
    recommendRelationship: 'Your Relationship with the Recommender',
    recommendActivity: 'Activities Involved',
};
  
// Placeholders Mapping
const placeholders = {
    applySchool: 'Enter the school you are applying to',
    applyProgram: 'Enter the program you are applying to',
    recommendeeName: 'Enter your full name',
    recommenderName: 'Enter the full name of your recommender',
    recommenderPosition: 'Specify the position or title of your recommender',
    recommenderInstitution: 'Name of the institution or company',
    recommenderPhone: 'Contact number of the recommender',
    recommenderEmail: 'Email address for contact',
    recommenderAddress: 'Physical address of the recommender',
    recommenderZipCode: 'Zip code for the address',
    recommenderIntro: 'A brief introduction',
    recommendRelationship: 'Example: Mentor/Professor/Supervisor/Manager',
    recommendActivity: "Describe a key activity or achievement of the recommendee using the STAR principle. Start by setting the Scene (Situation) - give context about what was happening and why the activity was undertaken. Then, define the Task - what was the goal or problem to be addressed? Next, describe the Action taken by the recommendee - what specific steps did they take to address the task or challenge? Finally, detail the Result - what was the outcome of their actions, and were there any notable achievements or recognitions? Include quantitative results or specific accomplishments to illustrate the impact of their actions. Example: 'Situation: During an internship at Tech Innovations, the recommendee noticed a recurring issue with our customer service workflow. Task: They were tasked with devising a solution to enhance efficiency and customer satisfaction. Action: The recommendee analyzed customer feedback, identified key bottlenecks, and implemented a new ticketing system that prioritized urgent queries. Result: This led to a 30% improvement in response times and a 20% increase in customer satisfaction scores within three months.'"
};

const RecommendationForm = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    navigate('/DownloadPage', { state: { formData: values } });
  };


return (
<Navbar>
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
    {() => (
        <Form>
        {Object.keys(initialValues).map(key => (
            <div key={key} className="form-field">
            <label htmlFor={key}>{labelsMapping[key]}</label>
            <Field name={key} placeholder={placeholders[key]} className="input-field"/>
            <ErrorMessage name={key} component="div" className="error" />
            </div>
        ))}
        <button type="submit">Submit</button>
        </Form>
    )}
    </Formik>
</Navbar>
  );
};

export default RecommendationForm;