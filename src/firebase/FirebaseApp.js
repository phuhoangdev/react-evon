import {
     collection,
     getDocs,
     addDoc,
     deleteDoc,
     doc,
     onSnapshot,
     serverTimestamp,
     updateDoc,
     getDoc,
     query,
     limit,
     orderBy,
     where,
} from "firebase/firestore";
import { db } from "./firebase-config";
import { useEffect } from "react";
import { useState } from "react";

const FirebaseApp = () => {
     const colRef = collection(db, "posts");
     const [title, setTitle] = useState("");
     const [author, setAuthor] = useState("");
     const [postId, setPostId] = useState("");
     const [posts, setPosts] = useState([]);
     const [singlePost, setSinglePost] = useState("");

     useEffect(() => {
          // getDocs(colRef)
          //      .then((snapshot) => {
          //           let posts = [];
          //           snapshot.docs.forEach((doc) => {
          //                posts.push({
          //                     id: doc.id,
          //                     ...doc.data(),
          //                });
          //           });
          //           setPosts(posts);
          //      })
          //      .catch((err) => {
          //           console.log(err);
          //      });
          // eslint-disable-next-line react-hooks/exhaustive-deps

          //2. Get documents in realtime
          onSnapshot(colRef, (snapshot) => {
               let posts = [];
               snapshot.docs.forEach((doc) => {
                    posts.push({
                         id: doc.id,
                         ...doc.data(),
                    });
               });
               setPosts(posts);
          });

          // Fetching single document
          const docRefSingle = doc(db, "posts", "wIZ8yo3x8NDUHfZLmjpM");
          // getDoc(docRefSingle).then((doc) => {
          //      console.log(doc.id, doc.data());
          // });
          onSnapshot(docRefSingle, (doc) => {
               // console.log(doc.id, doc.data());
          });
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);
     const handleAddPost = (e) => {
          e.preventDefault();
          addDoc(colRef, {
               title,
               author,
               createdAt: serverTimestamp(),
          })
               .then(() => {
                    console.log("success");
               })
               .catch((err) => {
                    console.log(err);
               });
     };

     const handleRemovePost = async (e) => {
          e.preventDefault();
          const colRefDelete = doc(db, "posts", postId);
          await deleteDoc(colRefDelete);
     };

     const handleUpdatePost = async (e) => {
          e.preventDefault();
          const colRefUpdate = doc(db, "posts", postId);
          await updateDoc(colRefUpdate, {
               title: title,
               author: author,
               updatedAt: serverTimestamp(),
          });
     };

     useEffect(() => {
          //Queries
          const q = query(colRef, where("author", "==", "test"), orderBy("author"), limit(3));
          onSnapshot(q, (snapshot) => {
               let posts = [];
               snapshot.docs.forEach((doc) => {
                    posts.push({
                         id: doc.id,
                         ...doc.data(),
                    });
               });

               console.log(posts);
          });
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     return (
          <div className="p-10">
               <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
                    <form onSubmit={handleAddPost}>
                         <input
                              type="text"
                              className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
                              placeholder="Enter your title"
                              name="title"
                              onChange={(e) => setTitle(e.target.value)}
                         />
                         <input
                              type="text"
                              className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
                              placeholder="Enter your author"
                              name="author"
                              onChange={(e) => setAuthor(e.target.value)}
                         />
                         <button type="submit" className="p-3 bg-blue-500 text-white text-sm font-semibold rounded-lg w-full">
                              Add post
                         </button>
                    </form>
               </div>

               <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
                    <form onSubmit={handleRemovePost}>
                         <input
                              type="text"
                              className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
                              placeholder="Enter your id"
                              name="postId"
                              onChange={(e) => setPostId(e.target.value)}
                         />
                         <button type="submit" className="p-3 bg-red-500 text-white text-sm font-semibold rounded-lg w-full">
                              Remove post
                         </button>
                    </form>
               </div>

               <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
                    <form onSubmit={handleUpdatePost}>
                         <input
                              type="text"
                              className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
                              placeholder="Enter your id"
                              name="postId"
                              onChange={(e) => setPostId(e.target.value)}
                         />
                         <input
                              type="text"
                              className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
                              placeholder="Enter your title"
                              name="title"
                              onChange={(e) => setTitle(e.target.value)}
                         />
                         <input
                              type="text"
                              className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
                              placeholder="Enter your author"
                              name="author"
                              onChange={(e) => setAuthor(e.target.value)}
                         />
                         <button type="submit" className="p-3 bg-blue-500 text-white text-sm font-semibold rounded-lg w-full">
                              Update post
                         </button>
                    </form>
               </div>

               <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
                    {posts?.length > 0 &&
                         posts.map((item) => (
                              <div key={item.title}>
                                   <div>
                                        {item.title} - {item.author}
                                   </div>
                              </div>
                         ))}
               </div>
          </div>
     );
};

export default FirebaseApp;
