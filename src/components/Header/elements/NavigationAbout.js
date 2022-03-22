import Link from "next/link";
const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a style={{ color: "black" }}>Home</a>
          </Link>
        </li>
        <li>
          <Link
            href="/other/about"
            as={process.env.PUBLIC_URL + "/other/about"}
          >
            <a style={{ color: "black" }}>About</a>
          </Link>
        </li>
        <li>
          <Link
            href="/shop/left-sidebar"
            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
          >
            <a style={{ color: "black" }}>Shop</a>
          </Link>
        </li>
        <li>
          <Link
            href="/shop/left-sidebar"
            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
          >
            <a style={{ color: "black" }}>Custom Orders</a>
          </Link>
        </li>
        <li>
          <Link
            href="/shop/left-sidebar"
            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
          >
            <a style={{ color: "black" }}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
