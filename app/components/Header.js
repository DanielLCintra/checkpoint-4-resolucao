import Link from 'next/link'

// Componente Header: recebe props title e action
function Header({ title, action }) {
  return (
    <header>
      <h1>{title}</h1>
      <Link href="/">{action}</Link>
    </header>
  )
}

export default Header
