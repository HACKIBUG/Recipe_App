import React,{useEffect,useState} from 'react';
import {BsSearch} from 'react-icons/bs';
import {fetchData} from '../service';

function RecipeLists(props) {
    const [searchedTerm, setSearchedTerm] = useState('');
    const [query, setQuery] = useState('pizza');
    const [data, setData] = useState('');

    const searchRecipe = (searchQuery) => {
        fetchData(searchQuery).then((response) => {
            setData(response);
            props.setLoader(false);
        });
    };

    useEffect(() => {
        fetchData(query).then((response) => {
            setData(response);
            props.setLoader(false);
        });
    }, [query]);

    const handleItemClick = (recipe) => {
        props.onRecipeSelect(recipe);  // Pass the selected recipe to the parent component
    };

    return (
        <div className='container'>
            <div className='heading-line'>
                <strong>Search Recipes</strong>
                <div className='input-wrapper'>
                    <input 
                        onChange={(e) => setSearchedTerm(e.target.value)} 
                        value={searchedTerm} 
                        type="text" 
                        placeholder='Search' 
                    />
                    <button onClick={() => {
                        props.setLoader(true);
                        searchRecipe(searchedTerm);
                    }}>
                        <BsSearch />
                    </button>
                </div> 
            </div>
            <div className='flexbox'>
                {
                    data && data.hits && data.hits.map((item, index) => (
                        <div key={index} className='flexItem' onClick={() => handleItemClick(item.recipe)}>
                            <div className='img-wrapper'>
                                <img src={item.recipe.image} alt={item.recipe.label} />
                            </div>
                            <p>{item.recipe.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default RecipeLists;
