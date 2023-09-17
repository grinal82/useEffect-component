/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState, useEffect} from 'react'

export default function Details({info}) {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        if (info) {
          setLoading(true);
          fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .then((data) => {
              setUserData(data);
              setLoading(false);
            })
            .catch((error) => {
              console.error('Error fetching user data:', error);
              setLoading(false);
            });
        }
      }, [info]); /* ставим зависимость от изменения прилетевшего из пропсов юзера чтобы useEffect перевызывался и запрашивал данные по новому url (с новым id) */
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (!info || !userData) {
        return <div>Select a user to see details.</div>;
      }
    

    return (
    <div className='details-wrapper'>
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={userData.avatar} alt="User's picture"/>
            <div className="card-body">
                <p className="card-text">{userData.name}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">City: {userData.details.city}</li>
                <li className="list-group-item">Company: {userData.details.company}</li>
                <li className="list-group-item">Position: {userData.details.position}</li>
            </ul>
        </div>
    </div>
  )
}
