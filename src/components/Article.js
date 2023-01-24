const styles = {
  marginTop: 40,
};

const Article = (props) => {
  return (
    <article style={styles}>
      <h3
        style={{
          marginBottom: 3,
          textTransform: "uppercase",
        }}
      >
        {props.title}
      </h3>
      <span
        style={{
          display: "block",
          marginBottom: 10,
          fontSize: 14,
        }}
      >
        {props.author}
      </span>
      <p>{props.text}</p>
    </article>
  );
};

export default Article;
