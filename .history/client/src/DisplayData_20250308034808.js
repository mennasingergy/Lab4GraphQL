import React, { useState } from 'react'
import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client"

const QUERY_ALL_Users = gql`
query getUsers{
  users {
    id,
    name,
    username,
    nationality
    friends{
      name
      age
    }
  }
}

`
const GET_USER_BY_ID = gql`
query User($id:ID!){
  user(id:$id){
    id,
    name,
    username, 
    age 
  }}                                                 
    `
const CREATE_USER_MUTATION = gql`
     mutation CreateUser ($user:CreateUserInput!){
        createUser(user:$user){
            id
            name
            username
            age
            nationality
        }
     }
    `
//create update user mutation here  :)


//create delete user mutation here :) 



function DisplayData() {
    const [userId, setUserId] = useState("");
    //create user state 
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(0);
    const [nationality, setNationality] = useState("");
    const { data, loading, error, refetch } = useQuery(QUERY_ALL_Users)
    const [fetchUserById, { data: userById, error: fetchUserError, }] = useLazyQuery(GET_USER_BY_ID)
    const [createUser] = useMutation(CREATE_USER_MUTATION)
    if (loading) {
        return <h1>DATA IS LOADING...</h1>
    }
    if (error) {
        console.log(error)
    }
    if (data) {
        console.log(data)
    }


    return (

        <div>
            <div>
                <input type="text" placeholder="Name:" onChange={(event) => {
                    setName(event.target.value)
                }} />
                <input type="text" placeholder="Username:" onChange={(event) => { setUsername(event.target.value) }} />
                <input type="number" placeholder="Age:" onChange={(event) => { setAge(event.target.value) }} />
                <input type="text" placeholder="Nationality:" onChange={(event) => { setNationality(event.target.value.toUpperCase()) }} />
                <button onClick={() => {
                    createUser({
                        variables: {
                            user: { name: name, username: username, age: Number(age), nationality: nationality },
                        },
                    });
                    refetch();//automatically updates the page to load newly created users.
                }}
                >Create User </button>
            </div>

            {data && data.users.map((user) => {
                return <div key={user.id}>
                    <h1>Name:{user.name}</h1>
                    <h1>Username:{user.username}</h1>
                    <h1>Age:{user.age}</h1>
                    <h1>Nationality:{user.nationality}</h1>
                </div>
            })}
            <div>
                <input type="text" placeholder="Enter User Id" onChange={(event) => { setUserId(event.target.value) }} />
                <button onClick={() => {
                    fetchUserById({
                        variables: {
                            id: userId
                        }
                    })
                }}>Get User</button>
                <div>
                    {userById && <h1>Name:{userById.user.name}</h1>}
                    {userById && <h1>Username:{userById.user.username}</h1>}
                    {userById && <h1>Age:{userById.user.age}</h1>}
                </div>
            </div>
        </div>

    )
}

export default DisplayData