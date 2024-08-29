import React from 'react'
import Link from 'next/link'
function Header() {
  return (
   <main>
    <header>
    <nav>
        {/* <img src="">Logo</img> */}
        <Link href="/presentation">Presentation</Link>
        <p></p>
        <Link href="/events">Events</Link>
        <p></p>
        <Link href="/personnel">Notre personnel</Link>
      </nav>
    </header>
   </main>
  )
}

export default Header