import React from "react";

const Image = (image) => {
    
   
    return (
        <div>
           {image.data.map(d=> <img src={d.src} key={d._id} alt=""/> )}
          
        </div>
     );
};

export default Image;