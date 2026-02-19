import React, {useState} from "react";
import api from "../../services/api";


// http://localhost:8080/ai/recipe-creator?ingredients=rice, beans, salad, meat&cuisine=brazillian&dietaryRestrictions=gluten

function RecipeGenerator(){

    const [ingredients, setIngredients] = useState("");
    const [cuisine, setCuisine] = useState("Any");
    const [dietaryRestrictions, setDietaryRestrictions] = useState("");
    const [chatResponse, setChatResponse] = useState("");

    const askAi = async () => {
        try {

            const response = await api.get(`/recipe-creator`,
                {
                    params:{
                        ingredients: ingredients,
                        cuisine: cuisine,
                        dietaryRestrictions: dietaryRestrictions
                    }
                });

            const data = await response.data;
            setChatResponse(data);

        } catch (error) {
            console.error("Error generating recipe:", error);
            setChatResponse("An error occurred while generating the recipe.");
        }
    }

    return(
        <div>
            <h2>Recipe Generator</h2>
            <input 
                type="text" 
                value={ingredients} 
                onChange={(e) => setIngredients(e.target.value)} 
                placeholder="Enter ingredients here"
            />

            <input 
                type="text" 
                value={cuisine} 
                onChange={(e) => setCuisine(e.target.value)} 
                placeholder="Enter cuisine type"
            />

            <input 
                type="text" 
                value={dietaryRestrictions} 
                onChange={(e) => setDietaryRestrictions(e.target.value)} 
                placeholder="Enter dietary restrictions"
            />

            <button onClick={askAi}>Generate Recipe</button>
            <div className="output">
                <p>{chatResponse}</p>
            </div>
        </div>
    );
}

export default RecipeGenerator;