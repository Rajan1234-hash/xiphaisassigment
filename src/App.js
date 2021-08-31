
import {useEffect,useLayoutEffect,useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {Photoresponse,Albumrespo} from "./action/index.js";
import axios from "axios";
import logo from './logo.svg';

import { Counter } from './features/counter/Counter';
import {Color} from "./features/color/color"
import './App.css';
import './test.scss';

// how react is looking as it this is the 

function App() {
  const myState = useSelector((state) => state);
  const dispatch = useDispatch();
const [dataphoto,setphotodata]=useState([])
const [dataalbum,setdataalbum]=useState([])
  // GET request for remote image in node.js

  

 useLayoutEffect(()=>{
  callphoto();
 },[])

  const callphoto=()=>{
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/photos',
      responseType: 'stream'
    }).then((data)=>{
      // dispatch(Photoresponse(data));
      
      // setphotodata([...dataphoto,data])
    console.log("data photo",data.data)
    callalbums(data)
    }).then(()=>{
      // console.log("myState",myState)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const callalbums=(getphotodata)=>{
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/photos',
      responseType: 'stream'
    }).then((data)=>{
      // dispatch(Albumrespo(data));
      
      let photdata=getphotodata;
      let arr=[];

      if(photdata){
        photdata.data.map((item,i)=>{
          if(data){
            data.data.map((itemalbum,index)=>{
              if(itemalbum.albumId==item.id)
              arr.push({
                "title":itemalbum.title,
                "image":item.thumbnailUrl,
                "subtitle":item.title,
                "heading":""
              })
              // console.log("itemalbum",itemalbum)
            })
          }
        })
      }
      setphotodata(arr)
      console.log("arr",arr)
      dispatch(Photoresponse(arr));
    // console.log(" daata album",data)

    }).catch((err)=>{
      console.log(err)
    })
  }

  
  return (
    <div className="main p-4">
      <div className="">
        <div className="float-left text-left"><h5>Albums</h5></div>
          </div>
      {myState.Photocall?
      
      myState.Photocall.map((item,i)=>{
        return(
          <div className="row my-2 bg-light p-2"  style={{borderRadius:"20px"}}>
      
          
          <div className="col-md-1 col-12">
            <img src={item.image} width="100" style={{borderRadius:"15px"}} />
          </div>
          <div className="col-md-6 col-12">
        <h6>{item.title}</h6>
        <small>{item.subtitle}</small>
          </div>
        </div>
    
       
        )
      })
      :
      "no data"
    }
     
      </div>
  );
}

export default App;
