import React from "react";
// import { Transition } from "@headlessui/react";
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

import './Header.css';
export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      
        <nav className="navbar w-full flex relative shadow justify-between items-center px-8 h-20">
            <div className="inline-flex navbar">
                <a className="" href="/">
                    <img src={logo} alt="" />
                </a>
                
            </div>
        <div>
        <label htmlFor="" className="relative text-xl inline-flex navbar lg:text-3xl text-white	 py-3 px-8">Community Feed</label>
        </div>
          
            <div className="relative hidden sm:block flex-shrink flex-grow-0">
                <input type="text" className="bg-purple-white bg-gray-100 rounded-lg border-0 p-3 w-1/2" placeholder="Search something..." style={{minWidth:'400px'}}/>
                <div className="absolute top-0 right-0 p-4 pr-3 text-purple-lighter">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
            
            <div className="flex-initial">
              <div className="flex justify-end items-center relative">
                <div className="block">
                    <div className="inline relative">
                        <button type="button" className="inline-flex items-center bg-white relative px-2 border rounded-full hover:shadow-lg">
                            <div className="pl-1">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '3', overflow: 'visible'}}>
                                    <g fill="none" fillRule="nonzero">
                                        <path d="m2 16h28"></path>
                                        <path d="m2 24h28"></path>
                                        <path d="m2 8h28"></path>
                                    </g>
                                </svg>
                            </div>

                            <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '100%', width: '100%', fill: 'currentcolor'}}>
                                    <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
              </div>
            </div>
        </nav>

     
    </div>
  );
}

