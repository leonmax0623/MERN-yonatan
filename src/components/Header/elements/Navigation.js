import Link from "next/link";
const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link
            href="/other/about"
            as={process.env.PUBLIC_URL + "/other/about"}
          >
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link
            href="/shop/left-sidebar"
            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
          >
            <a>Shop</a>
          </Link>
        </li>
        <li>
          <Link
            href="/shop/order-tracking"
            as={process.env.PUBLIC_URL + "/other/order-tracking"}
          >
            <a>Custom Orders</a>
          </Link>
        </li>
        <li>
          <Link
            href="/other/contact"
            as={process.env.PUBLIC_URL + "/other/contact"}
          >
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
