import React from "react";

interface User {
  id: number;
  username: string;
}

const Page = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });
  // no -cache lw node js lw sadai naya data fetch garxa .

  /*  cache: "force-cache" → default (static data)

  cache: "no-cache" → always fresh
  
 cache: "no-store" → never cache, full dynamic */

  const users: User[] = await resp.json();

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Users</h1>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          maxWidth: "300px",
          margin: "0 auto",
        }}
      >
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              marginBottom: "8px",
              background: "#f9f9f9",
              color: "black",
            }}
          >
            {user.username}
          </li>
        ))}
      </ul>

      {/* <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul> */}
    </>
  );
};

export default Page;
