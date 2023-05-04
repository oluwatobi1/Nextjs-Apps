import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <Image src="/sticker.png" width={100} height={77} alt="logo"/>
            </div>
        <Link href="/">
        Home
        </Link>
        <Link href="/about">
        About
        </Link>
        <Link href="/people">
        Person Listing
        </Link>
        <Link href="/fancity">
        Fancity
        </Link>
    </nav>
  )
}

export default Navbar