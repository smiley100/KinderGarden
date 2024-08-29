import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
<footer>
  <div>
    {/* <img src="/images/logo/" alt="Kinder Garden"/> */}
    <Link href="https://www.instagram.com" target="_blank">
    @KinderGarden
    </Link>
    <Link href="mailto:example@example.com" target="_blank">
    exemple@gmail.com
    </Link>
    <p> 00220 3842612</p>
      
  </div>
</footer>
       
  )
}
