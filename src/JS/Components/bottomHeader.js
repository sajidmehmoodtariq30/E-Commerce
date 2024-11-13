import '../../Styles/components/bottom-header.css'
import logo from '/images/amazon-logo.png'

const bottomHeader = `
  <div class="container">
    <div class="navbar-brand">
      <a href="index.html">
        <img
          src="${logo}"
          alt="Amazon"
          class="logo"
          width="80%"
          height="auto"
        />
      </a>
    </div>
    <nav class="navbar">
      <ul>
        <li class="nav-item">
          <a href="/" class="nav-link">Home </a>
        </li>
        <li class="nav-item">
          <a href="about.html" class="nav-link">about</a>
        </li>
        <li class="nav-item">
          <a href="/all-products.html" class="nav-link">products</a>
        </li>
        <li class="nav-item">
          <a href="contact.html" class="nav-link">contact</a>
        </li>
        <li class="nav-item">
          <a
            href="addToCart.html"
            class="nav-link add-to-cart-button"
            id="cartValue"
          >
            <i class="fa-solid fa-cart-shopping"></i> 0</a
          >
        </li>
      </ul>
    </nav>
  </div>
`;

export default bottomHeader;