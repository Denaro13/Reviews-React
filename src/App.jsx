import { useState, useEffect } from "react";
import people from "./data";
import {
  FaAngleLeft,
  FaAngleRight,
  FaBeer,
  FaQuoteRight,
} from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);

  const nextPerson = () => {
    const newValue = index + 1;
    setIndex(newValue);
    if (newValue > 3) {
      setIndex(0);
    }
  };

  const prevPerson = () => {
    const newValue = index - 1;
    setIndex(newValue);
    if (newValue < 0) {
      setIndex(3);
    }
  };

  const randomPerson = () => {
    const newValue = Math.floor(Math.random() * people.length);
    console.log(newValue);
    setIndex(newValue);
    if (newValue === index) {
      setIndex(newValue + 1);
    }
    if (newValue > people.length - 1) {
      setIndex(0);
    }
  };

  return (
    <main>
      <section>
        <article className="review" key={people[index].id}>
          <div className="img-container">
            <img
              src={people[index].image}
              alt={people[index].name}
              className="img person-img"
            />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{people[index].name}</h4>
          <p className="job">{people[index].job}</p>
          <p className="info">{people[index].text}</p>
          <div className="btn-container">
            <span>
              <button type="button" className="prev-btn" onClick={prevPerson}>
                <FaAngleLeft />
              </button>
              <button
                type="button"
                className="next-btn"
                onClick={() => {
                  nextPerson();
                }}
              >
                <FaAngleRight />
              </button>
            </span>
          </div>
          <button className="btn" onClick={randomPerson}>
            random
          </button>
        </article>
      </section>
    </main>
  );
};
export default App;
