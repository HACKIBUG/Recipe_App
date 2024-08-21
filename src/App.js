import './App.scss';
import Header from './components/Header';
import Tabs from './components/Tabs';
import RecipeLists from './components/RecipeLists';
import { useState } from 'react';

function App() {
  const [loader,setLoader] = useState(true)
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  return (
    <div className="main">
     <Header />
     <Tabs selectedRecipe={selectedRecipe} setLoader={setLoader}/>
     <RecipeLists onRecipeSelect={setSelectedRecipe} setLoader={setLoader}/>
     {loader && <div className='loader'>
      <div className='spinner'></div>
      </div>}
    </div>
  );
}

export default App;
