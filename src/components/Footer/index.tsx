import React from "react";
import s from "./s.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        {/* TOP */}
        <div className={s.top}>
          {/* SECTION 1 */}
          <div className={s.section}>
            <h5 className={s.logo}>Furnito.</h5>
            <p className={s.address}>
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL
              33134 USA
            </p>
          </div>
          {/* SECTION 2 */}
          <div className={s.section}>
            <h6 className={s.listTitle}>Links</h6>
            <ul className={s.list}>
              <li className={s.link}>
                <Link href="/">Home</Link>
              </li>
              <li className={s.link}>
                <Link href="/shop">Shop</Link>
              </li>
              <li className={s.link}>
                <Link href="/about">About</Link>
              </li>
              <li className={s.link}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* SECTION 3 */}
          <div className={s.section}>
            <h6 className={s.listTitle}>Help</h6>
            <ul className={s.list}>
              <li className={s.link}>Payment Options</li>
              <li className={s.link}>Returns</li>
              <li className={s.link}>Privacy Policies</li>
            </ul>
          </div>
          {/* SECTION 4 */}
          <div className={s.section}>
            <h6 className={s.listTitle}>Newsletter</h6>
            <form className={s.form}>
              <div className={s.input}>
                <input type="email" placeholder="Enter Your Email Address" />
              </div>
              <button className={s.btn}>SUBSCRIBE</button>
            </form>
          </div>
        </div>
        {/* BOTTOM */}
        <div className={s.bottom}>
          <p>2024 furnito. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
