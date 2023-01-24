import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowal",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis eius deserunt aspernatur, in fugit, at atque odio hic mollitia unde dolores. Temporibus amet hic totam nesciunt at obcaecati eveniet neque.",
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego?",
    author: "Jan Nowal",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis eius deserunt aspernatur, in fugit, at atque odio hic mollitia unde dolores. Temporibus amet hic totam nesciunt at obcaecati eveniet neque.",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia",
    author: "Jan Nowal",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis eius deserunt aspernatur, in fugit, at atque odio hic mollitia unde dolores. Temporibus amet hic totam nesciunt at obcaecati eveniet neque.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article
      key={article.id}
      author={article.author}
      text={article.text}
      title={article.title}
    />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
