import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <Image src="/sticker.png" width={100} height={77}/>
            </div>
        <Link href="/">
        Home
        </Link>
        <Link href="/about">
        About
        </Link>
        <Link href="/people/test">
        Person Listing
        </Link>
    </nav>
  )
}

export default Navbar