
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

  useEffect(()=>{
    callalbums();
    callphoto();
// console.log("myState",myState)

  },[])

  useEffect(()=>{
    // console.log("myState",myState.Photocall.data)
    setphotodata(myState.Photocall.data)
    setdataalbum(myState.AlbumCall.data)
  })
  
  useEffect(()=>{
    // if()
  })

  const callphoto=()=>{
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/photos',
      responseType: 'stream'
    }).then((data)=>{
      dispatch(Photoresponse(data));
      
      // setphotodata([...dataphoto,data])
    console.log("data photo",data.data)
    }).then(()=>{
      // console.log("myState",myState)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const callalbums=()=>{
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/photos',
      responseType: 'stream'
    }).then((data)=>{
      dispatch(Albumrespo(data));
      
      // setdataalbum([...dataalbum,data])
    console.log(" daata album",data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  
  return (
    <div className="main p-4">
      {dataphoto?
      
      dataphoto.map((item,i)=>{
        return(
          <div className="row">
      
          <div className="col-md-12">
          <div className="float-left text-left"><h5>Title</h5></div>
          </div>
          <div className="col-1">
            <img src={item.thumbnailUrl} width="100" />
          </div>
          <div className="col-6">
        <h6>{item.id}</h6>
        <small>{item.title}</small>
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
