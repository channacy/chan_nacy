import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <ul>
          <li>
            <a class="header" href="/">
              Channacy Un
            </a>
            <a class="subheader" href="#">
              About
            </a>
          </li>
          <li>
            <a class="header" href="#">
              Projects
            </a>
            <a class="subheader" href="#">
              Web
            </a>
            <a class="subheader" href="#">
              AI/ML
            </a>
            <a class="subheader" href="#">
              Mobile
            </a>
            <a class="subheader" href="#">
              Other
            </a>
          </li>
          <li>
            <a class="header" href="#">
              Education
            </a>
            <a class="subheader" href="#">
              Courses
            </a>
          </li>
          <li>
            <a class="header" href="#">
              Experience
            </a>
            <a class="subheader" href="#">
              Professional
            </a>
            <a class="subheader" href="#">
              Volunteer
            </a>
          </li>
          <li>
            <a class="header" href="#">
              Blog
            </a>
            <a class="subheader" href="#">
              Sept 2024
            </a>
          </li>
          <li>
            <a class="header" href="#">
              Contact
            </a>
            <a class="subheader" href="#">
              GitHub
            </a>
            <a class="subheader" href="#">
              Gmail
            </a>
            <a class="subheader" href="#">
              Linkedin
            </a>

            <div class="social_media">
              <a href="https://github.com/channacy" target="_blank">
                <img src="assets/github.png" />
              </a>
              <a href="mailto:channacyun@gmail.com" target="_blank">
                <img src="assets/gmail.png" />
              </a>
              <a
                href="https://www.linkedin.com/in/channacy-un/"
                target="_blank"
              >
                <img src="assets/linkedin.png" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
