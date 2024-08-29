import React from 'react'
import Link from 'next/link'
function Header() {
  return (
   <main>
    <header>
    <nav>
        {/* <img src="">Logo</img> */}
        <Link href="/presentation">Presentation</Link>
        <Link href="/events">Events</Link>
      </nav>
    </header>
   </main>
  )
}

export default Header