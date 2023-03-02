import LearnMore from "./component/LearnMore";
import Header from "./component/Header";
import Main from "./component/Main";
import Card from "./component/Card";
import "./styles/App.css";
import Footer from "./component/Footer";
function App() {
  return (
    <div>
      <LearnMore />
      <Header />
      <Main />
      <div className="listings">
        <Card
          src="/images/woodhouse.jpg"
          location="Madison, Montana"
          rating="4.6"
          date="Dec 10 - 15"
          price="$330 night"
        />
        <Card
          src="/images/cabin.jpg"
          location="Bear Mountain, New York"
          rating="4.2"
          date="May 12 - 25"
          price="$400 night"
        />
        <Card
          src="/images/farmhouse.jpg"
          location="Louisville, Kentuky"
          rating="4.5"
          date="Dec 14 - 23"
          price="$200 night"
        />
        <Card
          src="/images/modernhouse.jpg"
          location="Los Angeles, California"
          rating="4.9"
          date="Nov 11 - 25"
          price="$300 night"
        />
        <Card
          src="/images/housepool.jpg"
          location="Miami, Florida"
          rating="4.8"
          date="Dec 10 - 15"
          price="$330 night"
        />
      </div>

      <div className="listings">
        <Card
          src="/images/lakehouse.jpg"
          location="Lake George, Ny"
          rating="4.4"
          date="Jan 10 - 15"
          price="$200 night"
        />
        <Card
          src="/images/deserthouse.jpg"
          location="Phoenix, Arizona"
          rating="4.2"
          date="Jan 11 - 17"
          price="$150 night"
        />
        <Card
          src="/images/mountainhouse.jpg"
          location="Cloverdale, Oregon"
          rating="4.3"
          date="Nov 13 - 30"
          price="$250 night"
        />
        <Card
          src="/images/nighthouse.jpg"
          location="Los Angeles, California"
          rating="4.5"
          date="May 21 - 25"
          price="$500 night"
        />
        <Card
          src="/images/snowhouse.jpg"
          location="Green bay, Wisconsin"
          rating="4.1"
          date="Dec 10 - 15"
          price="$350 night"
        />
      </div>

      <div className="listings">
        <Card
          src="/images/woodhouse.jpg"
          location="Madison, Montana"
          rating="4.5"
          date="Dec 10 - 15"
          price="$330 night"
        />
        <Card
          src="/images/cabin.jpg"
          location="Bear Mountain, New York"
          rating="4.2"
          date="May 12 - 25"
          price="$400 night"
        />
        <Card
          src="/images/farmhouse.jpg"
          location="Louisville, Kentuky"
          rating="4.7"
          date="Dec 14 - 23"
          price="$200 night"
        />
        <Card
          src="/images/modernhouse.jpg"
          location="Los Angeles, California"
          rating="5.0"
          date="Nov 11 - 25"
          price="$300 night"
        />
        <Card
          src="/images/housepool.jpg"
          location="Miami, Florida"
          rating="4.2"
          date="Dec 10 - 15"
          price="$330 night"
        />
      </div>
      <div className="listings">
        <Card
          src="/images/lakehouse.jpg"
          location="Lake George, Ny"
          rating="4.1"
          date="Jan 10 - 15"
          price="$200 night"
        />
        <Card
          src="/images/deserthouse.jpg"
          location="Phoenix, Arizona"
          rating="4.2"
          date="Jan 11 - 17"
          price="$150 night"
        />
        <Card
          src="/images/mountainhouse.jpg"
          location="Cloverdale, Oregon"
          rating="4.2"
          date="Nov 13 - 30"
          price="$250 night"
        />
        <Card
          src="/images/nighthouse.jpg"
          location="Los Angeles, California"
          rating="4.4"
          date="May 21 - 25"
          price="$500 night"
        />
        <Card
          src="/images/snowhouse.jpg"
          location="Green bay, Wisconsin"
          rating="4.9"
          date="Dec 10 - 15"
          price="$350 night"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
