import React from 'react'
import Link from 'next/link'

const Presentation  = () => {
  return (
    <main>
      <div>The presentation page </div>
      <Link href="./events">Events</Link>
      <Link href='../'>Acceuille</Link>
    </main>
    
  )
}

export default Presentation 