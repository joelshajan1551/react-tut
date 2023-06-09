import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const Author = "James clear";
const title = " Atomic Habits";
const img =
  "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg";
const Booklist = () => {
  return (
    <section className="booklist">
      <Book job="dev" />
      <Book title="random titl" number={21} />
    </section>
  );
};
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{Author}</h4>
      {console.log(props)}
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Booklist />);
