import { Link } from 'react-router-dom'
import style from './Card.module.css'
import { OrderModal } from '../OrderModal/OrderModal';
import React, { useState } from 'react';

export function Card({id,img,name,count,price}){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function showModal(){
        setModalIsOpen(true);
    }
    return(
        <>

        <div className={style.item}>
        
        <img src={img} alt="" />
        <p >{name}</p>
        <p>Остаток на складе : {count} </p>
    
     
        <div className={style.item_q}>
            <p>{price} ₽</p>
            <button>Добавить в корзину</button>

            {
                count>0 ?
                <Link className={style.btn} to={`${id}`}>Подробнее</Link>
                :
                <button onClick={showModal} className={style.btn}>Заказать</button>
            }
            
        </div>
    </div>
    <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} productName={name} />
    </>
    )
}