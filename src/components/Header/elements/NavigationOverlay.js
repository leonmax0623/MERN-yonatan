import Link from "next/link";
import { IoIosClose } from "react-icons/io";

const NavigationOverlay = ({ activeStatus, getActiveStatus }) => {
  return (
    <div className={`navigation-overlay ${activeStatus ? "active" : ""}`}>
      <div className="navigation-overlay__content">
        <button
          className="navigation-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false);
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <IoIosClose />
        </button>
        <div className="navigation-overlay__content-container">
          <nav>
            <ul>
              <li className="menu-item-has-children">
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
        </div>
      </div>
    </div>
  );
};

export default NavigationOverlay;
