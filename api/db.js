let URL_API = "http://154.38.171.54:3002/priceA"
const myHeader = new Headers ({
    "Content-type" : "apliccation/json"
})

async function getData() {
    fetch(URL_API)
    .then(response => response.json())
    .then(data => data)
};


async function postData(data) {
    
    try {
        const response = await fetch(URL_API, {
            "method" : "POST",
            "headers" : myHeader,
            "body" : JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }
};

async function delData(data, id) {
    
    try {
        const response = await fetch(`${URL_API}/${id}`, {
            "method" : "DELETE",
            "headers" : myHeader,
            "body" : JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }
};

async function putData(data, id) {
    
    try {
        const response = await fetch(`${URL_API}/${id}`, {
            "method" : "PUT",
            "headers" : myHeader,
            "body" : JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }
};



export {getData, postData, delData, putData}