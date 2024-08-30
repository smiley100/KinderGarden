import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
<footer>
  <div>
    {/* <img src="/images/logo/" alt="Kinder Garden"/> */}
    <div>
      <Link href="https://www.instagram.com" target="_blank"> @KinderGarden  </Link>
    </div>
    <div>
      <Link href="mailto:example@example.com" target="_blank">exemple@gmail.com</Link>
    </div>
    <div>
      <p> 00220 3842612</p>
    </div>
      
  </div>
</footer>
       
  )
}
