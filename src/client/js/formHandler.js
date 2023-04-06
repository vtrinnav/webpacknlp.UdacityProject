// Post function
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        // updateUi(newData);
        return newData;
    }
    catch (error) {
        console.log("error", error);
    }
}

// Update UI function
const updateUi = (data) => {
    document.getElementById('output').style.display = 'block';
    document.getElementById('result-description').style.display = 'block';
    document.getElementById('agreement').innerHTML = data.agreement.toLowerCase();
    document.getElementById('score_tag').innerHTML = data.score_tag;
    document.getElementById('subjectivity').innerHTML = data.subjectivity.toLowerCase();
    document.getElementById('confidence').innerHTML = data.confidence;
    document.getElementById('irony').innerHTML = data.irony.toLowerCase();
    Client.resultImg(data);
}

// Form handel submit function
const handleSubmit = (event) => {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('text').value;
    if (Client.checkForInput(formText)) {
        //  Post request
        postData('http://localhost:8081/api', { text: formText })
            .then(function (data) {
                //Api Error Check
                console.log(data.status.code);
                if (data.status.code != 0) {
                    alert(data.status.msg);
                }
                else {
                    updateUi(data);
                }
            })
    }
}
export { handleSubmit }