import React, { useState, useEffect } from 'react';
import { CiPizza } from 'react-icons/ci';
import { GiNoodles } from 'react-icons/gi';
import { MdOutlineIcecream,MdSoupKitchen } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import IconCheckbox from '../components/IconCheckbox';
import { fetchTabData } from '../service';

function Tabs(props) {
    const [active, setActive] = useState('Pizza');
    const [tabData, setTabData] = useState('');
    const [checkboxStates, setCheckboxStates] = useState([]);

    const tabLabel = [
        {
            name: "Pizza",
            icons: <CiPizza />,
            id: 'a64b4f15b8a75b8b07e2e4ebef79008f'
        },
        {
            name: "Noodles",
            icons: <GiNoodles />,
            id: '048f908e28d9432e9249803845b47e4b'
        },
        {
            name: "soup",
            icons: <MdSoupKitchen />,
            id: '331cbf7fccfb49d8ad95bd03350628ca'
        },
        {
            name: "IceCream",
            icons: <MdOutlineIcecream />,
            id: 'fd85a4f8faed4e5d803e2587d845556d'
        },
        {
            name: "Cake",
            icons: <FaBirthdayCake />,
            id: 'b66666d5c882ca199f43def8f1b8a03f'
        }
    ];

    useEffect(() => {
        if (props.selectedRecipe) {
            setTabData({ recipe: props.selectedRecipe });
            setCheckboxStates(props.selectedRecipe.ingredientLines.map(() => false)); // Reset checkboxes when recipe changes
            console.log("Checkboxes reset on recipe change");
        } else {
            fetchTabData(tabLabel[0].id).then((response) => {
                setTabData(response);
                setCheckboxStates(response.recipe.ingredientLines.map(() => false)); // Initialize checkboxes
                props.setLoader(false);
                console.log("Checkboxes initialized on tab load");
            });
        }
    }, [props.selectedRecipe]);

    const handleClick = (name, id) => {
        setActive(name);
        fetchTabData(id).then((response) => {
            setTabData(response);
            setCheckboxStates(response.recipe.ingredientLines.map(() => false)); // Reset checkboxes on tab change
            props.setLoader(false);
            console.log("Checkboxes reset on tab change");
        });
    };

    const handleCheckboxChange = (index, isChecked) => {
        const newStates = [...checkboxStates];
        newStates[index] = isChecked;
        setCheckboxStates(newStates);
        console.log(`Checkbox ${index} state changed to ${isChecked}`);
    };

    const resetCheckboxes = () => {
        setCheckboxStates(tabData.recipe.ingredientLines.map(() => false));
        console.log("Checkboxes manually reset");
    };

    return (
        <div className='container'>
            <h1 className='recipeHeading'>What’s on your wish list 🤔?</h1>
            <div className='tabs'>
                {tabLabel.map((item, index) => (
                    <div 
                        onClick={() => handleClick(item.name, item.id)} 
                        key={index} 
                        className={`tablist ${active === item.name ? 'active' : ""}`}
                    >
                        {item.icons}
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
            <div className='recipe_banner'>
                {tabData !== '' && (
                        <><div className='left-col'>
                        <span className='badge'>{tabData.recipe.cuisineType[0].toUpperCase()}</span>
                        <h1>{tabData.recipe.label}</h1>
                        <p><strong>Recipe by:</strong><small>{tabData.recipe.source}</small></p>
                        <h3>Ingredients</h3>
                        <div className='ingredients'>
                            <ul>
                                {tabData.recipe.ingredientLines.map((list, index) => (
                                    <li key={index}>
                                        <IconCheckbox
                                            label={list}
                                            checked={checkboxStates[index]}
                                            onChange={(isChecked) => handleCheckboxChange(index, isChecked)} />
                                        &nbsp;
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <button onClick={resetCheckboxes} className="resetbtn">Reset All</button>
                    </div><div className='right-col'>
                            <div className='image-wrapper'>
                                <img src={tabData.recipe.image} alt={tabData.recipe.label} />
                            </div>
                        </div></>
                )}
            </div>
        </div>
    );
}

export default Tabs;
