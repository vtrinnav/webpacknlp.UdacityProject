function checkURL (inputURL){
    let checkURL = inputURL;

    if (checkURL === ""){
        alert("Please enter URL to analyze")
        return false;
    }
    else if (!isNaN(inputURL)){
        alert("Please enter URL to analyze")
    }
    else{
        return true;
    }
};

export {checkURL};

// Path: src/client/js/formHandler.js
import { checkURL } from './checkURL'
