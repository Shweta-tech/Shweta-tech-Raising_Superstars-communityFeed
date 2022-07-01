import React from "react";
import './Post.css'
import Comment from './Comment/Comment';
import user_img from './Image/User_Shweta.jpeg'
import Image from './Image/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faComment, faArrowUp, faShareSquare , faReply} from '@fortawesome/fontawesome-free-solid'
const Post = (post) => {
    // console.log(post.post.post.images)
    console.log(post.post._id,"ye")
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let created_at = new Date(post.post.post.createdAt);
    let created_day = created_at.getDay() + ' ' +  months[created_at.getMonth()] + ' '+ created_at.getFullYear();
    
    return (
     
            <div className="bg-white shadow mt-2 rounded-lg">
                <div className="flex flex-row px-2 py-3 mx-3">
                    <div className="w-auto h-auto rounded-full">
                        <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src={post.post.post.user.profile.picture}/>
                    </div>
                    <div className="flex flex-col mb-2 ml-4 mt-1">
                        <div className="text-gray-600 text-md font-semibold">{post.post.post.user.profile.name}</div>
                        <div className="flex w-full mt-1">
                            <div className="text-orange-700 font-base text-xs mr-1 cursor-pointer">
                            {post.post.post.group.name}
                            </div> 
                            <div className="text-gray-800 font-light text-xs">
                                • {created_day} • Followers:{post.post.post.counts.followers}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-100"></div> 
                <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">

                    <Image data={post.post.post.images} key={post.post._id}></Image>
                </div>
                <div className="text-gray-800 text-md mb-6 mx-3 px-2">{post.post.post.content}</div>
                <div className="flex w-full border-t border-gray-100">
                    <div className="mt-3 mx-5 flex flex-row text-xs">
                    <div className="flex text-gray-700  rounded-md mb-2 mr-4 items-center"><FontAwesomeIcon icon={faArrowUp}  size="lg"/> <div className="ml-1 text-gray-400 text-ms"> {post.post.post.counts.upvotes}</div></div>

                        <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center"><FontAwesomeIcon icon={faComment} size="xl"/><div className="ml-1 text-gray-400 text-ms"> {post.post.post.counts.comments}</div></div>
                        <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center"><FontAwesomeIcon icon={faShareSquare}  size="xl"/></div>

                    </div>
                    <div className="mt-3 mx-5 w-full flex justify-end text-xs">
                    <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center"><FontAwesomeIcon icon={faEye}  size="xl" /><div className="ml-1 text-gray-400 text-ms">{post.post.post.counts.views}</div></div>

                    </div>
                </div>
                <div className="flex justify-in-between mb-4 border-t border-gray-100">
                    <div className="flex w-full mt-1 pt-2 pl-5">
                       
                        <Comment className data={post.post.post.comments} key={post.post._id}></Comment>
                       
                    </div>

                    {post.post.post.comments.length >0 ?  <div className="flex justify-end w-full mt-1 pt-2 pr-5">
                        <span className="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                            <FontAwesomeIcon icon={faReply} style={{verticalAlign:'-0.02rem'}}></FontAwesomeIcon>
                        </span>
                        <span className="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                            <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </span>
                    </div>: <div></div>
                    }
                    
                </div>
               
                <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                    <img className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" alt="User avatar" src={user_img}/>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                        <button type="submit" className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                        <svg className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>

                        </button>
                    </span>
                     <input type="search" className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"  placeholder="Post a comment..." autoComplete="off"/>
                </div>
            </div>
    );
  };
  
export default Post;