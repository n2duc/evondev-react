import { collection, getDocs, addDoc, deleteDoc, doc, onSnapshot, serverTimestamp, updateDoc, getDoc, where, orderBy, limit, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from './firebase-config'

const FirebaseApp = () => {
    const [post, setPost] = useState([]);
    const [postId, setPostId] = useState('');
    const [singlePost, setSinglePost] = useState("");
    const collectionRef = collection(db, 'posts');
    // console.log(collectionRef);
    useEffect(() => {
        // 1. Get all documents in a collection
        // getDocs(collectionRef).then((querySnapshot) => {
        //     // console.log("snapShot", querySnapshot)
        //     let posts = [];
        //     querySnapshot.forEach((doc) => {
        //         // console.log("doc", doc.data())
        //         posts.push({
        //             id: doc.id,
        //             ...doc.data()
        //         })
        //     })
        //     setPost(posts);
        //     // console.log(posts);
        // }).catch((error) => {
        //     console.log(error);
        // });
        // 2. Get realtime update
        onSnapshot(collectionRef, (snapshot) => {
            let posts = [];
            snapshot.forEach((doc) => {
                // console.log("doc", doc.data())
                posts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setPost(posts);
        });

        const docRefSingle = doc(db, 'posts', 'PlySSYHw5504aKScYoLO');
        getDoc(docRefSingle).then((doc) => {
            // console.log(doc.id, doc.data());
        });
        onSnapshot(docRefSingle, (doc) => {
            // console.log(doc.id, doc.data());
        });
    }, []);

    const handleAddPost = (e) => {
        e.preventDefault();
        addDoc(collectionRef, {
            title: e.target.title.value,
            author: e.target.author.value,
            createAt: serverTimestamp(),
        }).then(() => {
            console.log("Document successfully written!");
            // reset form
        }).catch((error) => {
            console.error("Error writing document: ", error);
            // reset form
        });
    }

    const handleRemovePost = async (e) => {
        e.preventDefault();
        const collectionRefDelete = doc(db, 'posts', postId);
        await deleteDoc(collectionRefDelete);
        console.log("success remove");
    };
    
    const handleUpdatePost = async (e) => {
        e.preventDefault();
        const collectionRefUpdate = doc(db, 'posts', postId);
        await updateDoc(collectionRefUpdate, {
            title: e.target.title.value,
        });
    };

    useEffect(() => {
        // const colRefQuery = collection(db, 'posts');
        const q = query(collectionRef, where("author", "==", "n2duc"), orderBy("author"), limit(5));
        onSnapshot(q, (snapshot) => {
            let posts = [];
            snapshot.forEach((doc) => {
                // console.log("doc", doc.data())
                posts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            // console.log(posts)
        });
    }, []);

    return (
        <div className='p-10'>
            <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 rounded-md mb-10">
                <form action="" onSubmit={handleAddPost}>
                    <input type="text" className="p-3 rounded border border-gray-300 w-full mb-5 outline-none focus:border-green-400" placeholder='Enter your title' name='title'/>
                    <input type="text" className="p-3 rounded border border-gray-300 w-full mb-5 outline-none focus:border-green-400" placeholder='Enter your author' name='author'/>
                    <button type='submit' className='w-full p-3 bg-green-500 text-white text-sm font-semibold rounded-md'>Add post</button>
                </form>
            </div>
            <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 rounded-md mb-10">
                <form action="" onSubmit={handleRemovePost}>
                    <input type="text" className="p-3 rounded border border-gray-300 w-full mb-5 outline-none focus:border-red-400" placeholder='Enter your post ID' name='postId' onChange={(e) => setPostId(e.target.value)}/>
                    <button type='submit' className='w-full p-3 bg-red-400 text-white text-sm font-semibold rounded-md'>Remove post</button>
                </form>
            </div>
            <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 rounded-md mb-10">
                { post.length > 0 && post.map((item, index) => (
                    <div key={item.title + index}>
                        <div>{item.title} - {item.author}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FirebaseApp