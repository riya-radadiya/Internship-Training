

import Recipe from "./Recipe";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🍽 Recipe Book</h1>

      <Recipe
        title="Veg Sandwich"
        ingredients={[
          "Bread",
          "Butter",
          "Tomato",
          "Cucumber",
          "Cheese"
        ]}
        instructions="Spread butter on bread, add vegetables and cheese, then grill for 5 minutes."
      />

      <Recipe
        title="Mango Shake"
        ingredients={[
          "Mango",
          "Milk",
          "Sugar",
          "Ice Cubes"
        ]}
        instructions="Blend all ingredients together and serve chilled."
      />

      <Recipe
        title="Maggi"
        ingredients={[
          "Maggi Noodles",
          "Water",
          "Tastemaker"
        ]}
        instructions="Boil water, add noodles and tastemaker, cook for 2 minutes."
      />
    </div>
  );
}

export default App;