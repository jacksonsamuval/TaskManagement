import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logo}>Taskify</h1>
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="#home" style={styles.navLink}>
              Home
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#tasks" style={styles.navLink}>
              Tasks
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#about" style={styles.navLink}>
              About
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#contact" style={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div style={styles.ctaContainer}>
        <button style={styles.ctaButton}>Get Started</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 171px",
    borderRadius:"4px",
    backgroundColor: "#1E293B",
    color: "#F8FAFC",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: 0,
    color: "#38BDF8",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  nav: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    marginLeft:"20px",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "30px",
    margin: 0,
    padding: 0,
  },
  navItem: {},
  navLink: {
    textDecoration: "none",
    color: "#F8FAFC",
    fontSize: "1rem",
    fontWeight: "500",
    position: "relative",
    transition: "all 0.3s ease",
  },
  navLinkHover: {
    color: "#38BDF8", // Bright blue hover
  },
  ctaContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    margin:"15px 15px 15px 278px",
  },
  ctaButton: {
    backgroundColor: "#38BDF8",
    color: "#F8FAFC",
    fontSize: "1rem",
    fontWeight: "200",
    padding: "8px 13px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
};

export default Header;
