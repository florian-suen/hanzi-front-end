import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({
  href,
  activeClassName,
  children,
}: {
  href: string;
  activeClassName?: string;
  children: any;
}) => {
  const router = useRouter();
  const child = React.Children.only(children);

  let className = child.props.className || "";
  if (router.pathname === href && activeClassName) {
    className = `${className} ${activeClassName}`.trim();
  }

  return <Link href={href}>{React.cloneElement(child, { className })}</Link>;
};

export default ActiveLink;
