import LearnMore from "./component/LearnMore";
import Header from "./component/Header";
import Main from "./component/Main";
import Card from "./component/Card";
import "./styles/App.css";
function App() {
  return (
    <div>
      <LearnMore />
      <Header />
      <Main />
      <div className="listings">
        <Card
          src="/images/woodhouse.jpg"
          location="Madison Montana"
          date="Dec 10 - 15"
          price="$330 night"
        />
        <Card
          src="/images/farmhouse.jpg"
          location="Louisville Kentuky"
          date="Dec 14 - 23"
          price="$200 night"
        />
        <Card
          src="/images/modernhouse.jpg"
          location="Los Angeles, California"
          date="Nov 11 - 25"
          price="$300 night"
        />
        <Card
          src="/images/housepool.jpg"
          location="Miami, Florida"
          date="Dec 10 - 15"
          price="$330 night"
        />
      </div>

      <div className="listings">
        <Card
          src="/images/woodhouse.jpg"
          location="Madison Montana"
          date="Dec 10 - 15"
          price="$330 night"
        />
        <Card
          src="/images/farmhouse.jpg"
          location="Louisville Kentuky"
          date="Dec 14 - 23"
          price="$200 night"
        />
        <Card
          src="/images/modernhouse.jpg"
          location="Los Angeles, California"
          date="Nov 11 - 25"
          price="$300 night"
        />
        <Card
          src="/images/housepool.jpg"
          location="Miami, Florida"
          date="Dec 10 - 15"
          price="$330 night"
        />
      </div>

      <div className="listings">
        <Card
          src="/images/woodhouse.jpg"
          location="Madison Montana"
          date="Dec 10 - 15"
          price="$330 night"
        />
        <Card
          src="/images/farmhouse.jpg"
          location="Louisville Kentuky"
          date="Dec 14 - 23"
          price="$200 night"
        />
        <Card
          src="/images/modernhouse.jpg"
          location="Los Angeles, California"
          date="Nov 11 - 25"
          price="$300 night"
        />
        <Card
          src="/images/housepool.jpg"
          location="Miami, Florida"
          date="Dec 10 - 15"
          price="$330 night"
        />
      </div>
    </div>
  );
}

export default App;
