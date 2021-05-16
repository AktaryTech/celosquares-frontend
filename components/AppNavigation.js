import React from "react";
import styles from "../styles/AppNavigation.module.css";
import Link from "next/link";
import cx from "classnames";
import Image from 'next/image'

export default function AppNavigation() {
  const linkItems = [{name: "Home", link: "/"}, {name: "My Games", link: "/claims"}, {name: "News", link: "/news"}, {name: "About", link: "/about"}];

  const listItems = linkItems.map((linkItem, index) => (
    <Link href={cx(`${linkItem.link}`)}>
      <li key={index} className="mr-8 text-xl">
        {linkItem.name}
      </li>
    </Link>
  ));

  return (
    <div className="w-full flex items-center">
      {" "}
      <img 
        src="/images/CELOSQUARES.png"
    className="mr-8"
      />
      <ul className={cx("flex cursor-pointer")}>{listItems}</ul>
    </div>
  );
}
