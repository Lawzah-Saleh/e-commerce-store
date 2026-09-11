type NavbarProps = {
  storeName: string
}

function Navbar({ storeName }: NavbarProps) {
  return (
    <nav>
      <h2>{storeName}</h2>

      <div>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
      </div>
    </nav>
  )
}

export default Navbar