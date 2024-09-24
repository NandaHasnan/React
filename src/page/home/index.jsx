import './style.css';
import vector from './gambar/Vector.png';
import mov from './gambar/mov.png';
import spider from './gambar/spider.png';
import lion from './gambar/lion.png';
import jonh from './gambar/jonh.png';
import widow from './gambar/widow.png';
import witches from './gambar/witches.png';
import tenet from './gambar/tenet.png';
import ebv from './gambar/ebv.png';
import CineOne21 from './gambar/CineOne212.png';
import hiflix from './gambar/hiflix2.png';
import fb from './gambar/fb.png';
import ig from './gambar/ig.png';
import tw from './gambar/tw.png';
import yt from './gambar/yt.png';
import { useNavigate } from 'react-router-dom';
function Home () {
  const navigate = useNavigate();

  return ( 
    <>
      {/* Navbar */}
      <header>
        <nav className="container">
          <div className="logo">
            <img src={vector} alt="Logo" />
            <ul className="nav-link">
              <li><a href="#">Home</a></li>
              <li><a href="#">List Movie</a></li>
            </ul>
          </div>
          <div className="sign-up">
            <button onClick={() => navigate('./signup.jsx')}>Sign Up</button>
          </div>
          <label htmlFor="check" className="open-menu">
            <i className="fas fa-bars"></i>
          </label>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero container">
          <div className="hero-content">
            <p>Nearest Cinema, Newest Movie,</p>
            <h2>Find out now!</h2>
          </div>
          <div className="hero-image">
            <img src={mov} alt="Hero Image" />
          </div>
        </section>

        {/* Now Showing */}
        <section className="now-showing container">
          <div className="hero2">
            <h2>Now Showing</h2>
            <h3 className="view-all">view all</h3>
          </div>
          <div className="slider-wrapper">
            <div className="movies-grid">
              <div className="movie-img">
                <img src={spider} alt="Spider-Man" />
              </div>
              <div className="movie-img">
                <img src={lion} alt="The Lion King" />
              </div>
              <div className="movie-img">
                <img src={jonh} alt="John Wick" />
              </div>
              <div className="movie-img">
                <img src={spider} alt="Spider-Man" />
              </div>
              <div className="movie-img">
                <img src={lion} alt="The Lion King" />
              </div>
              <div className="movie-img">
                <img src={jonh} alt="John Wick" />
              </div>
              <div className="movie-img">
                <img src={spider} alt="Spider-Man" />
              </div>
              <div className="movie-img">
                <img src={lion} alt="The Lion King" />
              </div>
              <div className="movie-img">
                <img src={jonh} alt="John Wick" />
              </div>
              <div className="movie-img">
                <img src={spider} alt="Spider-Man" />
              </div>
              <div className="movie-img">
                <img src={lion} alt="The Lion King" />
              </div>
              <div className="movie-img">
                <img src={jonh} alt="John Wick" />
              </div>
              <div className="movie-img">
                <img src={spider} alt="Spider-Man" />
              </div>
              <div className="movie-img">
                <img src={lion} alt="The Lion King" />
              </div>
              <div className="movie-img">
                <img src={jonh} alt="John Wick" />
              </div>
            </div>

            {/* Navigation Buttons */}
            <button className="slider-button-prev">
              <i className="fas fa-angle-left"></i>
            </button>
            <button className="slider-button-next">
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
        </section>

        {/* Upcoming Movies */}
        <section className="upcoming-movies container">
          <div className="hero3">
            <h2>Upcoming Movies</h2>
            <a href="#" className="view-all">view all</a>
          </div>
          <div className="month-tabs">
            <button>January</button>
            <button>February</button>
            <button>March</button>
            <button>April</button>
            <button>May</button>
            <button>June</button>
            <button>July</button>
            <button>August</button>
            <button className="active">September</button>
            <button>October</button>
            <button>November</button>
            <button>December</button>
          </div>

          <div className="slider-wrapper2">
            <div className="movies-grid2">
              <div className="movie-img2">
                <img src={widow} alt="Black Widow" />
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button className="details-btn">Details</button>
              </div>
              <div className="movie-img2">
                <img src={witches} alt="The Witches" />
                <h3>The Witches</h3>
                <p>Adventure, Comedy, Family</p>
                <button className="details-btn">Details</button>
              </div> 
              <div className="movie-img2">
                <img src={tenet} alt="Tenet" />
                <h3>Tenet</h3>
                <p>Action, Sci-Fi</p>
                <button className="details-btn">Details</button>
              </div>
              <div className="movie-img2">
                <img src={widow} alt="Black Widow" />
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button className="details-btn">Details</button>
              </div>
              <div className="movie-img2">
                <img src={witches} alt="The Witches" />
                <h3>The Witches</h3>
                <p>Adventure, Comedy, Family</p>
                <button className="details-btn">Details</button>
              </div> 
              <div className="movie-img2">
                <img src={tenet} alt="Tenet" />
                <h3>Tenet</h3>
                <p>Action, Sci-Fi</p>
                <button className="details-btn">Details</button>
              </div>
              <div className="movie-img2">
                <img src={widow} alt="Black Widow" />
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button className="details-btn">Details</button>
              </div>
              <div className="movie-img2">
                <img src={witches} alt="The Witches" />
                <h3>The Witches</h3>
                <p>Adventure, Comedy, Family</p>
                <button className="details-btn">Details</button>
              </div> 
              <div className="movie-img2">
                <img src={tenet} alt="Tenet" />
                <h3>Tenet</h3>
                <p>Action, Sci-Fi</p>
                <button className="details-btn">Details</button>
              </div>
              <div className="movie-img2">
                <img src={widow} alt="Black Widow" />
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button className="details-btn">Details</button>
              </div>
              <div className="movie-img2">
                <img src={witches} alt="The Witches" />
                <h3>The Witches</h3>
                <p>Adventure, Comedy, Family</p>
                <button className="details-btn">Details</button>
              </div> 
              <div className="movie-img2">
                <img src={tenet} alt="Tenet" />
                <h3>Tenet</h3>
                <p>Action, Sci-Fi</p>
                <button className="details-btn">Details</button>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button className="slider-button-prev2">
              <i className="fas fa-angle-left"></i>
            </button>
            <button className="slider-button-next2">
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
        </section>

        {/* Signup Section */}
        <section className="signup-section">
          <div className="signup-container">
            <p className="tittle">Be the vanguard of the <h1 className="highlight">Moviegoers</h1></p>
            <form className="signup-form">
              <input type="email" placeholder="Type your email" required />
              <button type="submit">Join now</button>
            </form>
            <p className="signup-text">By joining you as a Tickitz member,<br />
              we will always send you the latest updates via email.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-container">
            <div className="footer-logo">
              <img src={vector} alt="Logo" />
              <p>Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
            </div>
            <div className="footer-links">
              <h2>Explore</h2>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">List Movie</a></li>
              </ul>
            </div>
            <div className="footer-sponsor">
              <h2>Our Sponsor</h2>
              <ul>
                <li><img src={(ebv)} alt="EBV" /></li>
                <li><img src={(CineOne21)} alt="CineOne21" /></li>
                <li><img src={(hiflix)} alt="Hiflix" /></li>
              </ul>
            </div>
            <div className="footer-follow">
              <h2>Follow us</h2>
              <ul>
                <li><img src={(fb)} alt="Facebook" /><a href="#">Tickitz Cinema id</a></li>
                <li><img src={(ig)} alt="Instagram" /><a href="#">tickitz.id</a></li>
                <li><img src={(tw)} alt="Twitter" /><a href="#">tickitz.id</a></li>
                <li><img src={(yt)} alt="YouTube" /><a href="#">Tickitz Cinema id</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2020 Tickitz. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Home;
