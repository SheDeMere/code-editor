import React, {useState} from 'react';
import s from './Header.module.css'
import {BsFillCameraVideoFill, BsFillCameraVideoOffFill } from "react-icons/bs";
import Webcam from "react-webcam";
import Draggable from "react-draggable";

const Header = () => {
    const [camera, setCamera] = useState(false)
    return (
       <>
           <header className={s.header}>
               <button onClick={() => setCamera(!camera)} className={s.button}>
                   {camera ?
                       <BsFillCameraVideoFill fill='#fff' size={23} />
                       : <BsFillCameraVideoOffFill fill='#fff' size={23}  />
                   }
               </button>
           </header>
           {
               camera && <Draggable>
                   <Webcam
                       className={s.camera}
                       audio={false}
                       width={300}
                       height={300}
                       videoConstraints={{
                           width: 300,
                           height: 300,
                           facingMode: 'user'
                       }}
                   />
               </Draggable>
           }
       </>
    );
};

export default Header;