import React from "react";

const Comment = (comment) => {
  
    return (
        <div>
         {/* Adding images available in post */}
           {comment.data.map(d=> <div className="flex" key={d._id}> <img className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src={d.user.profile.picture}  alt=""/> <p className="text-gray-500 text-sm mb-6 mx-3 w-full px-2">{d.body}</p></div> )}
           
        </div>
     );
};

export default Comment;