import "./App.scss";
import "./App.css";
import mountain from "./assets/mountain.jpg";
import star from "./assets/favorite.png";
import halfStar from "./assets/rating.png";

const itemTab = [
  {
    id: "1",
    name: "Item 1",
  },
  {
    id: "2",
    name: "Item 2",
  },
  {
    id: "3",
    name: "Item 3",
  },
  {
    id: "4",
    name: "Item 4",
  },
];

function App() {
  return (
    <div className="global">
      <img src={mountain} />
      <div className="subTexte">
        <div className="entete">
          <h1>Title</h1>
          <div className="noteAndStars">
            <img className="stars" src={star} />
            <img className="stars" src={star} />
            <img className="stars" src={star} />
            <img className="stars" src={star} />
            <img className="stars" src={halfStar} />
            <p className="note">4(413)</p>
          </div>
        </div>
        <p className="titleDescription">
          Secondary test. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="endElement">
          <h2>Subtitle</h2>
          {itemTab.map((element, index) => {
            return <button key={index}>{element.name}</button>;
          })}
        </div>
        <p className="lien">ACTION 1</p>
      </div>
    </div>
  );
}

export default App;
