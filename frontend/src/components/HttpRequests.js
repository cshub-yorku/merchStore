export const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? { 'Content-Type': 'application/json' } : {}
    }).then(response => {
        if(response.status >= 400){
        return response.json().then(errorResponse => {
            const error = new Error("Something went wrong!")
            error.data = errorResponse;
            throw error;
        });
        }
        return response.json();
    });
}