import React from "react";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">MailCanvas</div>
        <div className="items">
            <ul>
                <li>template</li>
                <li>solution</li>
            </ul>
        </div>
        <div className="login">
                <button>Login</button>
            
            </div>
    </nav>
  );
};

export default Header;
