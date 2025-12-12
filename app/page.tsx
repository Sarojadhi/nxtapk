import React from 'react'

interface User {
  id: number;
  username: string;
}

const Page = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await resp.json();

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Users
      </h1>

      <ul style={{ 
        listStyle: "none",
        padding: 0,
        maxWidth: "300px",
        margin: "0 auto"
      }}>
        {users.map(user => (
          <li 
            key={user.id}
            style={{ 
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              marginBottom: "8px",
              background: "#f9f9f9",
              color:"black"
            }}
          >
            {user.username}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Page;
