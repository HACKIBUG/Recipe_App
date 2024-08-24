import './App.scss';
import Header from './pages/Header';
import Tabs from './pages/Tabs';
import RecipeLists from './pages/RecipeLists';
import { useState } from 'react';
import Navbar from './components/Navbar';


function App() {
  const [loader, setLoader] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
       <>
        <Navbar></Navbar>
        <Header />
         <Tabs selectedRecipe={selectedRecipe} setLoader={setLoader} />
         <RecipeLists onRecipeSelect={setSelectedRecipe} setLoader={setLoader} />
        {loader && (
          <div className="loader">
            <div className="spinner"></div>
          </div>
        )}
      </>
  
  );
}

export default App;