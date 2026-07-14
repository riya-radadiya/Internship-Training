function Recipe(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "15px",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9"
    }}>
      <h2>{props.title}</h2>

      <h3>Ingredients:</h3>
      <ul>
        {props.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Instructions:</h3>
      <p>{props.instructions}</p>
    </div>
  );
}

export default Recipe;