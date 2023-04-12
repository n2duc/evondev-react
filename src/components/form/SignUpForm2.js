import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpForm2 = () => {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required"),
                lastName: Yup.string()
                    .max(10, "Must be 10 characters or less")
                    .required("Required"),
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
