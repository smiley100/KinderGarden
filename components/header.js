import React from 'react'
import Link from 'next/link'
function Header() {
  return (
   <main>
    <header>
    <nav>
        {/* <img src="">Logo</img> */}
      <div>
        <Link href="/presentation">Presentation</Link>
      </div>
      <div>
        <Link href="/events">Events</Link>
      </div>
      <div>
      <Link href="/personnel">Notre personnel</Link>
      </div>
      </nav>
    </header>
   </main>
  )
}

export default Header