import React from "react";

const Header = () => {
  return (
    <div className="flex px-28 justify-between items-center">
      <section className="flex">
        <img src="" alt="Logo" />
        <div>Save</div>
        <div>Invest</div>
        <div>Stories</div>
        <div>FAQs</div>
        <div>Resource</div>
      </section>
      <section>
        <button>Sign in</button>
        <button>Create free account</button>
      </section>
    </div>
  );
};

export default Header;
