import React, { useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth";
import { auth, db } from "./firebase-config";
import { addDoc, collection } from "firebase/firestore";

const FirebaseAuth = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [userInfo, setUserInfo] = useState("");
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserInfo(user);
            } else {
                setUserInfo("");
            }
        });
    }, []);
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const handleCreateAcc = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            await updateProfile(auth.currentUser, {
                displayName: "Nguyen Ngoc Duc 2",
            });
            setUserInfo(user);
            console.log("Success!!");
            const userRef = collection(db, "users");
            await addDoc(userRef, {
                email: values.email,
                password: values.password,
                id: user.user.uid,
            });
        } catch (error) {
            console.log(error);
        }
    };
    const handleSignOut = async () => {
        await signOut(auth);
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            setUserInfo(user);
            console.log("Login Success!!");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-10">
            <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 rounded-md mb-10">
                <form action="" onSubmit={handleCreateAcc}>
                    <input
                        type="email"
                        className="p-3 rounded border border-gray-300 w-full mb-5 outline-none focus:border-green-400"
                        placeholder="Enter your email"
                        name="email"
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        className="p-3 rounded border border-gray-300 w-full mb-5 outline-none focus:border-green-400"
                        placeholder="Enter your password"
                        name="password"
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="w-full p-3 bg-green-500 text-white text-sm font-semibold rounded-md"
                    >
                        Sign In
                    </button>
                </form>
                <div className="mt-10 flex items-center gap-x-5">
                    <span>{userInfo?.displayName}</span>
                    <button
                        className="p-3 bg-red-500 text-white text-sm font-semibold rounded-md"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                </div>
            </div>
            <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 rounded-md mb-10">
                <form action="" onSubmit={handleLogin}>
                    <input
                        type="email"
                        className="p-3 rounded border border-gray-300 w-full mb-5 outline-none focus:border-green-400"
                        placeholder="Enter your email"
                        name="email"
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        className="p-3 rounded border border-gray-300 w-full mb-5 outline-none focus:border-green-400"
                        placeholder="Enter your password"
                        name="password"
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="w-full p-3 bg-green-500 text-white text-sm font-semibold rounded-md"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FirebaseAuth;
