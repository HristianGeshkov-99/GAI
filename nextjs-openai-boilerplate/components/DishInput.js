import { useState } from 'react';

const DishInput = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit} className="dish-input-form">
      <label>
        Describe your dish style or ingredients:
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="e.g., spicy chicken, summer salad, chocolate dessert"
        />
      </label>
      <button type="submit">Generate Dish Name</button>
    </form>
  );
};

export default DishInput;
