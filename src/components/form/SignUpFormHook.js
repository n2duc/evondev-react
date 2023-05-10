import React, { useEffect } from "react";
// using react hook form
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignUpFormHook = () => {
    const schema = yup.object({
        firstName: yup
            .string()
            .max(10, "First name must be 10 character or less.")
            .required("Please enter your first name"),
        lastName: yup.string().required(),
        email: yup.string().email("Invalid email format").required(),
        address: yup.string().required("Please enter your address")
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
        watch,
        reset,
        resetField,
        setFocus,
        setValue,
        control,
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });
    // Form submit
    console.log("~ isSubmitting", isSubmitting);
    // Form da hop le tat ca - isValid
    // console.log("~ isValid", isValid);
    // Focus vao bat ki 1 field nao va go~ gia tri vao no
    // console.log("~ isDirty", isDirty);
    // Tra ve 1 object cac field da cham vao
    // console.log("~ dirtyFields", dirtyFields);
    const onSubmit = (data) => {
        /*
        const res = await axios.get("http://hn.algolia.com/api/v1/search?query=react")
        return res.data
         */
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                if (isValid) {
                    console.log("Send data to backend");
                    console.log(data);
                    // after successfully submitted
                    // then reset form
                    reset({
                        firstName: "",
                        lastName: "",
                        email: "",
                        address: "",
                    });
                }
            }, 3000);
        });
    };

    const watchShowAge = watch("showAge", false);

    // setFocus(): Tu dong focus vao input khi reload
    useEffect(() => {
        setFocus("firstName");
    }, [setFocus]);

    // Demo data with setValue()
    const handleSetDemoData = () => {
        setValue("firstName", "Ngoc");
        setValue("lastName", "Duc");
        setValue("email", "ngocduc@gmail.com");
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
        >
            <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="firstName">First name</label>
                <input
                    {...register("firstName")}
                    // {...register("firstName", { required: true, maxLength: 20 })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    className="p-4 rounded-md outline-none border border-gray-200"
                />
                {/* {errors.firstName?.type === 'required' && <p className="text-red-500">First name is required</p>} */}
                {/* {errors.firstName?.type === 'maxLength' && <p className="text-red-500">First name must be 20 character or less.</p>} */}
                {errors?.firstName && (
                    <p className="text-red-500">{errors.firstName?.message}</p>
                )}
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
                {errors.lastName?.type === "required" && (
                    <p className="text-red-500">Last name is required</p>
                )}
            </div>
            <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="email">Email address</label>
                <MyInput
                    name="email"
                    placeholder="Enter your email address"
                    id="email"
                    control={control}
                />
                {/* <input
                    {...register("email", {
                        required: "Email Address is required",
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="p-4 rounded-md outline-none border border-gray-200"
                /> */}
                {errors.email && (
                    <p className="text-red-500">{errors.email?.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="email">Address</label>
                <MyInput2
                    name="address"
                    placeholder="Enter your address"
                    id="address"
                    control={control}
                />
                {errors.email && (
                    <p className="text-red-500">{errors.email?.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-2 mb-4">
                <input type="checkbox" {...register("showAge")} />
                {watchShowAge && (
                    <input type="number" placeholder="Enter Age" />
                )}
            </div>
            <div>
                <button
                    className="w-full p-3 bg-green-500 rounded-md text-white"
                    type="submit"
                >
                    {isSubmitting ? (
                        <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        "Submit"
                    )}
                </button>
            </div>
            <div>
                <button
                    className="px-2 py-1 bg-green-400 text-white rounded-md mt-2"
                    onClick={handleSetDemoData}
                >
                    Demo data
                </button>
            </div>
        </form>
    );
};

const MyInput = ({ control, ...props }) => {
    return (
        <Controller
            name={props.name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <input
                    className="p-4 rounded-md outline-none border border-gray-200"
                    {...field}
                    {...props}
                />
            )}
        />
    );
};

const MyInput2 = ({ control, ...props }) => {
    const { field } = useController({ control, name: props.name, defaultValue: "" });
    return (
        <input
            className="p-4 rounded-md outline-none border border-gray-200"
            {...field}
            {...props}
        />
    );
};

export default SignUpFormHook;
