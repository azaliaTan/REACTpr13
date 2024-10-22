import { useEffect, useState } from 'react'
import style from './UserPage.module.css'
import { Search } from '../../components/Search/Search';


export function UserPage() {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState(''); 
    const [message, setMessage] = useState(''); 

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData (e.target);
        fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'POST',
            body: formData
        });
        e.target.reset();
        setMessage ('Форма отправлена')
    }


    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);  
    }


    useEffect(() => {
        fetchUsers();
    }, []);

    
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

   
    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(query.toLowerCase()) ||
               user.username.toLowerCase().includes(query.toLowerCase()) ||
               user.email.toLowerCase().includes(query.toLowerCase());
    });

    return (
        <section>
            <div className="container">
                <form action="" className={style.form} onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="введите имя" />
                    <button type="submit">отправить</button>
                    <div className={style.message}>{message}</div>
                </form>
                <p className={style.wq}>Пользователи</p>
                <Search handleChange={handleChange} />
                <div className={style.user_sec}>
                    
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map(user => {
                            return (
                                <div className={style.us_one} key={user.id}>
                                    <p className={style.ee}>Имя пользователя: {user.name}</p>
                                    <p>Фамилия пользователя: {user.username}</p>
                                    <p>email пользователя: {user.email}</p>
                                </div>
                            );
                        })
                    ) : (
                        <p className={style.er}>Не найдено пользователей</p>
                    )}
                </div>
            </div>
        </section>
    );
}