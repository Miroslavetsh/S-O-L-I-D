// Dependency Inversion Principle

class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json)
        return Promise.resolve('data from fetch')
    } 
}

class LocalStorage {
    get() {
        const dataFromLS = 'data from LS'
        // return localStorage.getItem('key')
        return dataFromLS
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request('vk.com')
    }
}

class LSClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }

    clientGet() {
        return this.localStorage.get()
    }
}

class Database {
    constructor(client) {
        this.client = client
    }
    
    getData(key) {
        return this.client.clientGet(key)
    }
}

const db = new Database(new LSClient())

console.log(db.getData())