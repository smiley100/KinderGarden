import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>This is the contact page.</p>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
}
