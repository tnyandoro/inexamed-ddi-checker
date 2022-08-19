import "./Navbar.css";

export default function Navbar() {
  return <nav className="nav">
    <a href="/" className="navbar-brand">INEXAMED</a>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/interactions">Interactions</a></li>
      <li><a href="/pregnancy">Pregnancy</a></li>
      <li><a href="/login">Login</a></li>
    </ul>
  </nav>
}