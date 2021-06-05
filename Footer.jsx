import React from "react";

function Footer() {
  var curryear = new Date().getFullYear();

  return (
    <div className="footer">
      <footer>
        <p>Copyright@ {curryear}</p>
      </footer>
    </div>
  );
}

export default Footer;
