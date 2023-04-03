//POST function
const postData = async(url='', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const newData = await response.json();
        console.log(newData);
        return newData;
    }
    catch (error){
        console.log("error",error);
    }
}

//Update UI function
const updateUI = (data) => {
    
}





export function handleSubmit(event) {
    event.preventDefault() 

    // check what text was put into the form field
    let formText = document.getElementById('url').value 
    if (Client.checkURL(formText))

    console.log("::: Form Submitted :::")
    fetch('http://localhost:3000/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
};

