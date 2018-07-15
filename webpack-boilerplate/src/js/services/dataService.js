export class DataService {
    constructor(method, authKey) {
        this.method = method;
        this.fetchOptions = {
            method: this.method,
            headers: { 'Content-Type': 'application/json', 'user-key': authKey },
            mode: 'cors',
            cache: 'default'
        };
    }

    logJSON(url) {
        fetch(url, this.fetchOptions)
            .then(res => {
                res.json().then(data => {
                    console.log(data);
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    getJSON(url) {
        var dataPromise = fetch(url, this.fetchOptions);
        return new Promise((resolve, reject) => {
            dataPromise.then(res => {
                res.json().then(data => {
                    resolve(data);
                });
            })
            .catch(err => {
                reject(err);
            });
        });
            
    }
}


