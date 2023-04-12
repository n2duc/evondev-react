import React from "react";
import { Formik, Form, useField } from "formik";
// import { Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpFinal = () => {
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
                job: Yup.string().required(),
                terms: Yup.boolean().oneOf([true], "Please check the terms and conditions"),
            })}
            onSubmit={(values, actions) => {
                console.log(values);
                
                setTimeout(() => {
                    actions.resetForm({
                        firstName: "",
                        lastName: "",
                        email: "",
                        intro: "",
                        job: "",
                        terms: false,
                    });
                    actions.setSubmitting(false);
                }, 3000);
            }}
        >
        { (formik) => {
            return (
                <Form
                    className="p-10 w-full max-w-[500px] mx-auto"
                    autoComplete="off"
                >   
                    <InputField label="First name" id="firstName" name="firstName" placeholder="Enter your first name"/>
                    <InputField label="Last name" id="lastName" name="lastName" placeholder="Enter your last name"/>
                    <InputField label="Email Address" type="email" id="email" name="email" placeholder="Enter your email address"/>
                    <TextareaField label="Intro" id="intro" name="intro" placeholder="Introduce yourself..."/>
                    <SelectField label="Your job" name="job">
                        <option value="default">Select your job</option>    
                        <option value="fe">Front End</option>
                        <option value="be">Back End</option>
                        <option value="fs">Full Stack</option>
                    </SelectField>
                    <CheckField name="terms">
                        <p>I accept the terms and conditions</p>
                    </CheckField>
                    <div>
                        <button
                            className="w-full p-3 bg-green-500 rounded-md text-white"
                            type="submit"
                            disabled={formik.isSubmitting}
                        >
                            Submit
                        </button>
                    </div>
                </Form>
        )}}
        </Formik>
    );
};

const InputField = ({ label, ...props }) => {
    const [ field, meta ] = useField(props);
    return (
        <div className="flex flex-col gap-2 mb-4">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input
                type="text"
                className="p-4 rounded-md outline-none border border-gray-200"
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div className="text-sm text-red-500">{meta.error}</div>
            ) : null }
        </div>
    );
};

const TextareaField = ({ label, ...props }) => {
    const [ field, meta ] = useField(props);
    return (
        <div className="flex flex-col gap-2 mb-4">
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea
                className="p-4 rounded-md outline-none border border-gray-200 h-[150px] resize-none"
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div className="text-sm text-red-500">{meta.error}</div>
            ) : null }
        </div>
    );
}

const SelectField = ({ label, ...props }) => {
    const [ field, meta ] = useField(props);
    return (
        <div className="flex flex-col gap-2 mb-4">
            <label htmlFor={props.id || props.name}>{label}</label>
            <select
                className="p-4 rounded-md outline-none border border-gray-200"
                {...field}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div className="text-sm text-red-500">{meta.error}</div>
            ) : null }
        </div>
    );
}

const CheckField = ({ children, ...props }) => {
    const [ field, meta ] = useField(props);
    return (
        <div className="flex flex-col gap-2 mb-4">
            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    {...field}
                    {...props}
                />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="text-sm text-red-500">{meta.error}</div>
            ) : null }
        </div>
    );
}

export default SignUpFinal;
