import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

/*const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = "Required";
    } else if (values.firstName.length > 20) {
        errors.firstName = "Must be 20 characters or less";
    }
    if (!values.lastName) {
        errors.lastName = "Required";
    } else if (values.lastName.length > 10) {
        errors.lastName = "Must be 10 characters or less";
    }
    return errors;
};*/

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            lastName: Yup.string()
                .max(10, "Must be 10 characters or less")
                .required("Required"),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    console.log(formik);
    return (
        <form
            onSubmit={formik.handleSubmit}
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
        >
            <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="firstName">First name</label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="p-4 rounded-md outline-none border border-gray-200"
                    // name="firstName"
                    // value={formik.values.firstName}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    { ...formik.getFieldProps("firstName")}
                    // Tu dong Add cac name, value, onChange, onBlur voi value la firstName
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-sm text-red-500">
                        {formik.errors.firstName}
                    </div>
                ) : null}
            </div>
            <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name"
                    className="p-4 rounded-md outline-none border border-gray-200"
                    { ...formik.getFieldProps("lastName")}
                />
                { formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-sm text-red-500">
                        {formik.errors.lastName}
                    </div>
                ) : null}
            </div>
            <div>
                <button
                    className="w-full p-3 bg-green-500 rounded-md text-white"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default SignUpForm;
