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
};

//Update UI function
const updateUi = (data) => {
    document.getElementById('output').style.display = 'block';
    document.getElementById('result-description').style.display = 'block';
    document.getElementById('agreement').innerHTML = data.agreement.toLowerCase();
    document.getElementById('score_tag').innerHTML = data.score_tag;
    document.getElementById('subjectivity').innerHTML = data.subjectivity.toLowerCase();
    document.getElementById('confidence').innerHTML = data.confidence;
    document.getElementById('irony').innerHTML = data.irony.toLowerCase();
    Client.resultImg(data);
};

//handle submit function
export function handleSubmit(event) {
    event.preventDefault() 

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log("::: Form Submitted :::")
    console.log("URL: " + url)
    console.log("Text: " + formText)
    if (Client.checkURL(formText))
    {
        alert("Please enter a valid URL");
        return;
    }
    
    //POST request
    postData('http://localhost:3000/api', { text: formText })
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
};


    /*fetch('http://localhost:3000/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })*/
