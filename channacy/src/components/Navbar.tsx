import "./Navbar.css";

const Navbar = () => {
    return (
        <>
        <div class="sidebar">
        <ul>
            <li><a href="#"><i class="fas fa-home"></i>Channacy</a></li>
            <li><a href="#"><i class="fas fa-project-diagram"></i>Projects</a></li>
            <li><a href="#"><i class="fas fa-user"></i>Profile</a></li>
            <li><a href="#"><i class="fas fa-address-card"></i>About</a></li>
            <li><a href="#"><i class="fas fa-blog"></i>Blogs</a></li>
            <li><a href="#"><i class="fas fa-map-pin"></i>Map</a></li>
        </ul> 
        <div class="social_media">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
      </div>

        </div>
        
        </>
    )
}

export default Navbar
