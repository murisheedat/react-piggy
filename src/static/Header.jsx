import React from "react";
import Button from "../components/reusable/Button";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div className="h-24 bg-amber-200">
      <section>
        <main>
          <img src="./logo.svg" alt="" />
        </main>
        <main>
          <nav>
            {" "}
            <span>Save</span>
            <span>
              <IoIosArrowDown />
            </span>
          </nav>
          <nav>Invest</nav>
          <nav>Stories</nav>
          <nav>FAQs</nav>
          <nav>
            <span>Resources</span>
            <span>
              <IoIosArrowDown />
            </span>
          </nav>
        </main>
      </section>
      <section></section>
    </div>
  );
};

export default Header;
