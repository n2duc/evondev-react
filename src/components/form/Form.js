import React, { useState } from "react";
import useHandleChange from "../customHooks/useHandleChange";

const Form = () => {
    // const [fullName, setFullName] = useState("");
    // const [message, setMessage] = useState("");
    // const [country, setCountry] = useState("");
    // const handleInputChange = (e) => {
    //     setFullName(e.target.value);
    // };
    // const handleTextareaChange = (e) => {
    //     setMessage(e.target.value);
    // }
    // const handleSelectChange = (e) => {
    //     setCountry(e.target.value);
    // }

    // const [values, setValues] = useState({
    //     name: "",
    //     email: "",
    //     hobby: false,
    // });
    // const handleInputChange = (e) => {
    //     const type = e.target.type;
    //     setValues({
    //         ...values,
    //         [e.target.name]:
    //             type === "checkbox" ? e.target.checked : e.target.value,
    //     });
    // };

    // Use customHook instead of rewriting it many times
    const { values, handleChange }  = useHandleChange({
        name: "",
        email: "",
        hobby: false,
    });
    console.log(values)
    const [ nameError, setNameError ] = useState("");
    const handleSubmit = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();
        if (values.name === '') {
            setNameError('Your name is empty!')
        } else {
            setNameError('')
        }
    }
    // Formik + Yup vs React hook form
    return (
        <div className="p-5">
            <form className="flex gap-x-3" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-2">
                    <input
                        type="text"
                        name="name"
                        className="max-w-[300px] w-full p-5 border border-gray-300 outline-none rounded-lg"
                        placeholder="Enter your name"
                        onChange={handleChange}
                    />
                    {nameError}
                </div>
                <input
                    type="email"
                    name="email"
                    className="max-w-[300px] w-full p-5 border border-gray-300 outline-none rounded-lg"
                    placeholder="Enter your email address"
                    onChange={handleChange}
                />
                <input
                    type="checkbox"
                    name="hobby"
                    defaultChecked={values.hobby}
                    onChange={handleChange}
                />
                {values.hobby && <p>is Checked</p>}
                <button type="submit" className="p-3 rounded-lg text-white bg-green-500">Submit</button>
            </form>

            {/* {message}
            <textarea
                className="max-w-[300px] w-full p-5 border border-gray-300 outline-none rounded-lg"
                placeholder="Enter your message"
                name="message"
                onChange={handleTextareaChange}
            ></textarea>
            {country}
            <select name="country" onChange={handleSelectChange}>
                <option value="vietnam">VietNam</option>
                <option value="japan">Japan</option>
                <option value="germany">Germany</option>
            </select> */}
        </div>
    );
};

export default Form;
