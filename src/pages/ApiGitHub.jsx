import { useState, useEffect } from 'react'

function ApiGitHub () {
    const [user, setUsers]= useState([])
    const getUser = async() => {
      const res = await fetch("https://api.github.com/users/github-john-doe")
      const json = await res.json()
      setUsers(json)
    }
    useEffect(() =>{
      getUser()
    },[])
  
    return(
      <div className='conternair text-center'>
        <h2>Github user</h2>
        <h3>{user.name}</h3>
        <img src={user.avatar_url} alt={user.name} style={{width: 200+"px"}}></img>
        <p>{user.bio}</p>
        <p>Abonnés : {user.followers}</p>
        <p>Abonnements : {user.following}</p>
        <p>Créé le : {user.created_at}</p>
        <p>Modifié le : {user.updated_at}</p>
        <p>URL repositories : <a href={user.repos_url} target="_blank" rel="noopener noreferrer" className='text-primary'>{user.repos_url}</a></p>
      </div>
    )
}

export default ApiGitHub