import React, {useState,useEffect} from 'react'

export default function Favorites() {


    const [favorites, setFavorites] = useState({})


    axios.get(`http://localhost:8000/api/v1/customers/${id}/favorites`)
    .then(res => {setFavorites(res.data)})
    .catch(err => console.log(err.message))



  return (
    <div>
      
    </div>
  )
}
