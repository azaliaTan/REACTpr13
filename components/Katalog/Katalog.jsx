import { useState } from 'react'
import { products } from '../../data/data'
import { Card } from '../Card/Card'
import style from './Katalog.module.css'
import { Search } from '../Search/Search'



export function Katalog(){
    const [sorting, setSorting]=useState('');
    const[query,setQuery]=useState('');
    function sort(e){
        setSorting(e.target.value);
    }
    function handleChange(e){
        setQuery(e.target.value)
    }
    const filteredProducts=products.filter((product)=>{
        return product.name.toLowerCase().includes(query.toLowerCase());
    })
    const sortProducts =(sorting,products)=>{
        switch(sorting){
            case 'price_asc':
                return [...products].sort((a,b)=>a.price - b.price);
                case 'price_desc':
                    return [...products].sort((a,b)=>b.price - a.price);
        case 'count_asc':
            return [...products].sort((a,b)=>a.count - b.count);
        case 'count_desc':
          return [...products].sort((a,b)=>b.count - a.count);
                default:
                    return products;
        }
    };
    const sortedFilteredProducts=sortProducts(sorting,filteredProducts);
    return(
        
        
           <div className={style.katalog}>
            <h5>Каталог товаров</h5>
             
            <div className={style.kateg}>
                <p>Категории</p>
                <button className={style.kk}>Все товары</button>
                <button className={style.k}>Шины\колеса</button>
                <button className={style.k}>Масла</button>
                <button className={style.k}>Ароматизаторы</button>
            </div>
            <Search handleChange={handleChange}/>
            <select onChange={sort}>
            <option value="1">Выберите..</option>
                <option value="price_asc">По возрастанию цены</option>
                <option value="price_desc">По убыванию цены</option>
                <option value="count_asc">По возрастанию наличия</option>
                <option value="count_desc">По убыванию наличия</option>

            </select>
            <div className={style.list}>
           
            {
            sortedFilteredProducts.length ?
            sortedFilteredProducts.map((product)=>{
                return(
                    <Card {...product}/>
                )
            })
            :
            <p className="er">Не найдено</p>
              }
               


            </div>

            <div className={style.qq}>
             
             <button className={style.more}>Загрузить еще товары</button></div>

           </div>



      
       
    )
}