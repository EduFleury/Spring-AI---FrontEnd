import { useState } from 'react';
import './App.css';
import TalkWithAi from './pages/chat/talkWithAi';
import RecipeGenerator from './pages/recipe/recipeGenerator';
import ImageGenerator from './pages/image/imageGenerator';

function App() {

  const [activeTab, setActiveTab] = useState('ask-ai');

  const hoandleTabChange = (tab) => {
    setActiveTab(tab);
  }
  
  return (
    <div className="App">
      <button className={activeTab === 'ask-ai' ? 'active' : ''} onClick={() => hoandleTabChange('ask-ai')}>Talk with AI</button>
      <button className={activeTab === 'generate-recipes' ? 'active' : ''} onClick={() => hoandleTabChange('generate-recipes')}>Generate Recipes</button>
      <button className={activeTab === 'generate-images' ? 'active' : ''} onClick={() => hoandleTabChange('generate-images')}>Generate Images</button>

      <div>
        {activeTab === 'ask-ai' && <TalkWithAi/>}
        {activeTab === 'generate-recipes' && <RecipeGenerator/>}
        {activeTab === 'generate-images' && <ImageGenerator/>}
      </div>
    </div>
  );
}

export default App;
