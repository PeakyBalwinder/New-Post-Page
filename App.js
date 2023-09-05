import React, { useState } from 'react';
import './App.css';
import Searchbar from './Components/Searchbar';
import PostType from './Components/PostType';
import QuestionSection from './Components/QuestionForm';
import ArticleSection from './Components/ArticleForm';

function App() {
  const [selectedPostType, setSelectedPostType] = useState('question');

  const handlePostTypeChange = (type) => {
    setSelectedPostType(type);
  };

  return (
    <div className="App">
      <Searchbar />
      <PostType onSelect={handlePostTypeChange} />
      {selectedPostType === 'question' ? <QuestionSection /> : null}
      {selectedPostType === 'article' ? <ArticleSection /> : null}

      {/* Add a "Add a post" button */}
      <button className="add-post-button">Post</button>
    </div>
  );
}

export default App;
