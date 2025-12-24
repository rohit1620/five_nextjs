import Link from "next/link";
import React from "react";

const Employees = () => {
  return (
    <div>
      <h1>Employees page</h1>
      <ul>
        <li>
          <Link href="/employees/rohit">rohit</Link>
        </li>
        <li>
          <Link href="/employees/kishan">kishan</Link>
        </li>
        <li>
          <Link href="/employees/abishek">abishek</Link>
        </li>
        <li>
          <Link href="/employees/vikash">vikash</Link>
        </li>
        <li>
          <Link href="/employees/sunil">sunil</Link>
        </li>
      </ul>
    </div>
  );
};

export default Employees;
