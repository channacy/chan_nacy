import "./Navbar.css";

const Navbar = () => {
    return (
        <>
        <div class="sidebar">
        <ul>
            <li>
                <a class="header" href="#">Channacy</a>
                <a class="subheading" href="#">About</a>
            </li>
            <li>
                <a class="header" href="#">Projects</a>
                <a class="subheader" href="#">Web</a>
                <a class="subheader" href="#">AI/ML</a>
                <a class="subheader" href="#">Mobile</a>
                <a class="subheader" href="#">Other</a>
            </li>
            <li>
                <a class="header" href="#">Education</a>
                <a class="subheader" href="#">Drexel University</a>
            </li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Blog</a></li>
        </ul> 
        <div class="social_media">
          <a href="#"><img src="assets/github.png"/></a>
          <a href="#"><img src="assets/gmail.png"/></a>
          <a href="#"><img src="assets/linkedin.png"/></a>
      </div>

        </div>
        
        </>
    )
}

export default Navbar
