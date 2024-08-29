import React from 'react'
import Link from 'next/link'
function Header() {
  return (
   <main>
    <header>
    <nav>
        <Link href="/presentation">Presentation</Link>
        <p></p>
        <Link href="/events">Events</Link>
      </nav>
    </header>
   </main>
  )
}

export default Header