import { useState } from 'react';
import useApi from '../hooks/useApi';
import DishInput from '../components/DishInput';
import DishResults from '../components/DishResults';

export default function Home() {
  const [query, setQuery] = useState('');
  const { data, isLoading, isError } = useApi('/api/generate', { input: query });

  const handleDishSubmit = (input) => {
    setQuery(input);
  };

  return (
    <div className="container">
      <h1>🍽️ AI Dish Name Generator</h1>
      <DishInput onSubmit={handleDishSubmit} />
      {isLoading && <p>Generating your delicious dish name...</p>}
      {data && <DishResults result={data} />}
      {isError && <p>Oops! Something went wrong. Please try again.</p>}
    </div>
  );
}
