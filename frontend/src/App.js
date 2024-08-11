import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Flashcard from './components/Flashcard';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/flashcards')
      .then(response => setFlashcards(response.data))
      .catch(error => console.error('Error fetching flashcards:', error));
  }, []);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="App">
      {flashcards.length > 0 && (
        <>
          <Flashcard flashcard={flashcards[currentIndex]} />
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </>
      )}
    </div>
  );
}

export default App;
