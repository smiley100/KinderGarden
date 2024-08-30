import React from 'react'
import Link from 'next/link'

const Presentation  = () => {
  return (
    <main>
      <div>The presentation page </div>
      <div><Link href="./events">Events</Link></div>
      <div><Link href='../'>Acceuille</Link></div>
    </main>
    
  )
}

export default Presentation 