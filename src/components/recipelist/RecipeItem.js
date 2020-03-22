import React, { useState, useEffect } from "react";
import { BASE_URL } from "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/";

function RecipeItem() {
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => console.dir(json))
            .catch(error => console.log(error));
    }, []);

    return null;
}

export default RecipeItem;