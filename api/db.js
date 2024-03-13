URL_API = "http://154.38.171.54:3002/priceA"
const myHeader = new Headers ({
    "Content-type" : "apliccation/json"
})

export async function getData() {
    
    try {
        const response = await fetch(URL_API, {
            "method" : "GET",
            "headers" : myHeader,
            "data" : null
        })
    } catch (error) {
        console.log(error);
    }
};

let data = {
    id : "1",
    name: "o"
}
export async function postData(data) {
    
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

export async function delData(data, id) {
    
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

export async function putData(data, id) {
    
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


export {
    getData, postData, delData, putData
}