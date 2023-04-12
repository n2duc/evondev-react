import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpForm2 = () => {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                intro: "",
                job: "",
                terms: false,
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required!"),
                lastName: Yup.string()
                    .max(10, "Must be 10 characters or less")
                    .required("Required!"),
                email: Yup.string()
                    .email("Invalid email format")
                    .required("Required!"),
                intro: Yup.string().required("Required!"),
                terms: Yup.boolean(),
            })}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            <Form
                className="p-10 w-full max-w-[500px] mx-auto"
                autoComplete="off"
            >
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="firstName">First name</label>
                    <Field
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        className="p-4 rounded-md outline-none border border-gray-200"
                    ></Field>
                    <ErrorMessage className="text-sm text-red-500" name="firstName" component="div"></ErrorMessage>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="lastName">Last name</label>
                    <Field
                        name="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        className="p-4 rounded-md outline-none border border-gray-200"
                    ></Field>
                    <ErrorMessage className="text-sm text-red-500" name="lastName" component="div"></ErrorMessage>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="email">Email</label>
                    <Field
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="p-4 rounded-md outline-none border border-gray-200"
                    ></Field>
                    <ErrorMessage className="text-sm text-red-500" name="email" component="div"></ErrorMessage>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="intro">Intro</label>
                    <Field
                        name="intro"
                        as="textarea"
                        placeholder="Introduce yourself..."
                        className="p-4 rounded-md outline-none border border-gray-200 h-[150px] resize-none"
                    ></Field>
                    <ErrorMessage className="text-sm text-red-500" name="intro" component="div"></ErrorMessage>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="job">Your job</label>
                    <Field
                        name="job"
                        as="select"
                        className="p-4 rounded-md outline-none border border-gray-200"
                    >
                        <option value="default">Select your job</option>
                        <option value="fe">Front End</option>
                        <option value="be">Back End</option>
                        <option value="fs">Full Stack</option>
                    </Field>
                    <ErrorMessage className="text-sm text-red-500" name="job" component="div"></ErrorMessage>
                </div>
                <div className="flex items-center gap-2 mb-4">
                    <Field
                        name="terms"
                        type="checkbox"
                    ></Field>
                    <p>I accept the terms and conditions</p>
                    <ErrorMessage className="text-sm text-red-500" name="terms" component="div"></ErrorMessage>
                </div>
                <div>
                    <button
                        className="w-full p-3 bg-green-500 rounded-md text-white"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </Form>
        </Formik>
    );
};

export default SignUpForm2;
