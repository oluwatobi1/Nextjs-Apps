// import { useEffect } from "react"
// import axios from "axios"

// export const getStaticProps = async()=>{
    
//     // const res = await fetch("http://localhost:8081/api/v1/locations?query=lag",{
//     //     headers:{
//     //         Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmYW5jaXR5IiwiZXhwIjoxNzE0MDAwNTkwLCJJZCI6IjYzY2FjZDQ5MGMxYzA2MDRlMjFkY2FiOCIsIklkZW50aWZpZXIiOiJxMUBxLnEifQ.9lthumP-nh3BYd410fxLe2mPcz8gCteFtDb1NLUCSC8"
//     //     }
//     // })
//     // const locations = await res.json()
//     return{
//         props:{
//             locations:"jdojo"
//         }
//     }
// }

// const index = ({locations}) => {
//     useEffect(() => {
//         axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmYW5jaXR5IiwiZXhwIjoxNzE0MDAwNTkwLCJJZCI6IjYzY2FjZDQ5MGMxYzA2MDRlMjFkY2FiOCIsIklkZW50aWZpZXIiOiJxMUBxLnEifQ.9lthumP-nh3BYd410fxLe2mPcz8gCteFtDb1NLUCSC8";
//         const test = async ()=>{
//             axios.get("https://dev.fancity-services.com/api/v1/locations?query=Lagos")
//             const res = await fetch("https://dev.fancity-services.com/api/v1/locations?query=gt",{
//         headers:{
//             Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmYW5jaXR5IiwiZXhwIjoxNzE0MDAwNTkwLCJJZCI6IjYzY2FjZDQ5MGMxYzA2MDRlMjFkY2FiOCIsIklkZW50aWZpZXIiOiJxMUBxLnEifQ.9lthumP-nh3BYd410fxLe2mPcz8gCteFtDb1NLUCSC8"
//         }
//     })
          
// }
//     test()
      
//     }, [])

//   return (
//     <div>{JSON.stringify(locations)}</div>
//   )
// }

// export default index


import { useSession, signIn, signOut } from 'next-auth/react';
export default function IndexPage() {
  const { data, status } = useSession();
  if (status === 'loading') return <h1> loading... please wait</h1>;
  if (status === 'authenticated') {
    return (
      <div>
        {JSON.stringify(data)}
        <h1> hi {data.user.name}</h1>
        <img src={data.user.image} alt={data.user.name + ' photo'} />
        <button onClick={signOut}>sign out</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn('google')}>sign in with gooogle</button>
    </div>
  );
}