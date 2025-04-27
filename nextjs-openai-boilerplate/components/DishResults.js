const DishResults = ({ result }) => {
    if (!result) return null;
  
    return (
      <div className="dish-results">
        <h2>Dish Name:</h2>
        <p><strong>{result.dishName}</strong></p>
        
        <h3>Description:</h3>
        <p>{result.description}</p>
      </div>
    );
  };
  
  export default DishResults;
  