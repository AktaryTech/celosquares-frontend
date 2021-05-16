import React from "react";
import styles from "../styles/AppNavigation.module.css";
import Link from "next/link";
import cx from "classnames";
import Image from 'next/image'

export default function AppNavigation() {
  const linkItems = [{name: "Home", link: "/"}, {name: "Claims", link: "/claims"}];

  const listItems = linkItems.map((linkItem, index) => (
    <Link href={cx(`${linkItem.link}`)}>
      <li key={index} className="mr-8">
        {linkItem.name}
      </li>
    </Link>
  ));

  return (
    <div className="w-full flex">
      {" "}
      <Image
        src="/images/CELOSQUARES.png"
        height={65}
        width={353}
        className="mr-8"
      />
      <ul className={cx("flex cursor-pointer")}>{listItems}</ul>
    </div>
  );
}
