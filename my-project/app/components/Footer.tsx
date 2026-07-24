"use client";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Employee Management System. All Rights Reserved.</p>

      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <span>|</span>
        <a href="/terms">Terms & Conditions</a>
      </div>
    </footer>
  );
}