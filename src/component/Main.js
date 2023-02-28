import "../styles/Main.css";

function Main() {
  return (
    <div className="background">
      <img src="/images/beach.jpg" alt="Beach" className="beach-img" />
      <div className="content">
        <h1>Find your place Work from anywhere</h1>
        <h5>Why work from home when you can be anywhere in the world.</h5>
        <button type="search" className="explore-btn">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Main;
