import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
       const redirectTimeout =  setTimeout(()=>{
            router.push("/")
        }, 3000)
        return ()=> clearTimeout(redirectTimeout)
    }, [])
    
  return (
    <div className="not-found">
        <h1>Oooops....</h1>
        <h2>That page cannot be found.</h2>
        <p>Go back to the <Link href="/">Homepage</Link></p>
    </div>
  )
}

export default NotFound