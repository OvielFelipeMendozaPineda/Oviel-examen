let URL_API = "http://localhost:3000/priceA"
const myHeader = new Headers ({
    "Content-type": "application/json"
})

async function getData(id= '') {
        try {
            console.log(id);
            const response = await fetch(`${URL_API}${id}`)
            if (!response.ok) {
                throw new Error("Error en la petición.")
            }
            return await response.json()
        } catch (error) {
            console.log(error);
            throw error;
        }
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