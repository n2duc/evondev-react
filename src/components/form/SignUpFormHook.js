import React from "react";
// using react hook form
import { useForm } from "react-hook-form";

const SignUpFormHook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
        >
            <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="firstName">First name</label>
                <input
                    {...register("firstName", { required: true, maxLength: 20 })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="p-4 rounded-md outline-none border border-gray-200"
                />
                {errors.firstName?.type === 'required' && <p className="text-red-500">First name is required</p>}
                {errors.firstName?.type === 'maxLength' && <p className="text-red-500">First name must be 20 character or less.</p>}
            </div>
            <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="lastName">Last name</label>
                <input
                    {...register("lastName", { required: true, maxLength: 12 })}
                    aria-invalid={errors.lastName ? "true" : "false"}
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name"
                    className="p-4 rounded-md outline-none border border-gray-200"
                />
                {errors.lastName?.type === 'required' && <p className="text-red-500">Last name is required</p>}
            </div>
            <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="email">Email address</label>
                <input
                    {...register("email", { required: "Email Address is required" })}
                    aria-invalid={errors.email ? "true" : "false"}
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="p-4 rounded-md outline-none border border-gray-200"
                />
                {errors.email && <p className="text-red-500">{errors.email?.message}</p>}
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

export default SignUpFormHook;
