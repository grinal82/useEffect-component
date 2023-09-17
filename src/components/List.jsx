import React, { useEffect, useState } from 'react'

export default function List({onSelectUser}) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')

            if(!response.ok){
                throw new Error(response.statusText)
            }
            const info = await response.json()
            // Обновляем список юзеров данными полученными по запросу на url
            setUsers(info)
            // меняем состояние `loading` на `false` чтобы убрать промпт о том, чтоидет загрузка
            setLoading(false)
            } catch(e){
            console.log(e)
            }
        }
        fetchData();
    },[]);// Пустой массив зависимостей означает выполнение только при первичной загрузке

    if (loading) {
        return <div>Loading ....</div>
    }
// пробегаемся мэпом, передаем на каждой итеррации полученную из пропсов функцию `onSelectUser`
  return (
    <div className='list-wrapper'>
        {users.map(user=><div className='list-item' key={user.id} onClick={()=>onSelectUser(user)}><p>{user.name}</p></div>)}
    </div>
  )
}
