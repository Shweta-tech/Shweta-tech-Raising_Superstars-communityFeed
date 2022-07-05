import {useState,useEffect} from 'react';


export const useData = (asc,des) =>{
    const [data,setData] = useState(null);
    let uri = 'https://api.xcess.cloud/users/feed?limit=10&page=1';
    if(asc && !des){
      uri = "https://api.xcess.cloud/users/feed?limit=10&page=1&sort=createdAt.asc";
    }else if(!asc && des){
      uri = "https://api.xcess.cloud/users/feed?limit=10&page=1&sort=createdAt.desc";
    }else{
      uri = 'https://api.xcess.cloud/users/feed?limit=10&page=1';
    }
   
    useEffect(()=>{
        let head = new Headers();
        head.append('Accept', 'application/json');
        head.append('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVkYXlAaHlkLmh5ZCIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.jVAWWrvQ6gQOQbmonmL8Fbl_l0tfwksW6L20wlUcMhY');
        head.append('Access-Control-Allow-Origin','*');
      
        let req = new Request(uri, {
          method: 'GET',
          headers: head,
          mode: 'cors',
          
      });
    
        fetch(req)
        .then( (response)=> response.json())
        .then(setData)
        .catch( (err) =>{
            console.log('ERROR:', err.message);
        });
      },[uri]);
      return data;
}