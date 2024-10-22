import { useState } from "react";
import style from '../Accordeon.module.css'


export function AccordeonItem({title,content}){
    const [isActive, setIsActive]=useState(false);
    return(
        <div className={style.item}>
<div onClick={()=>setIsActive(!isActive)} className={style.title}>
    <p>{title}</p>
    <div className={style.arrow}>
        {
            isActive ? <img src="./o.png" alt="" /> : <img src="./z.png" alt="" />
        }
    </div>
</div>
{
    isActive &&
    <div className={style.text}>{content}</div>
}
        </div>
    )
}