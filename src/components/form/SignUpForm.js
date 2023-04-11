import React from "react";
import { useFormik } from "formik";

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
        },
        onSubmit: values => {
            console.log(values)
        }
    });
    // console.log(formik);
    return (
        <form onSubmit={formik.handleSubmit} className="p-10 w-full max-w-[500px] mx-auto">
            <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    className="p-4 rounded-md outline-none border border-gray-200"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                />
            </div>
            <div>
                <button className="w-full p-3 bg-green-500 rounded-md text-white" type="submit">Submit</button>
            </div>
        </form>
    );
};

export default SignUpForm;
