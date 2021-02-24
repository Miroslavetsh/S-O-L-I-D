// Single Responsibility Principle

class News {
    constructor (title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }
}

class NewsPrinter {
    constructor(news) {
        this.news = news
    }

    html() {
        return `
            <div class="news">
                <h2>${this.news.title}</h2>
                <p>${this.news.text}</p>
                <span>${this.news.modified}</span>
            </div>
        `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified,
        }, null, 2)
    }

    xml() {
        return `
            <news>
                <title>${this.news.title}</title>
                <text>${this.news.text}</text>
                <mod>${this.news.modified}</mod>
            </news>
        `
    }
}

const news = new News('Someone', 'New exceptions')
const newsPrinter = new NewsPrinter(news) 

console.log(newsPrinter.html())
console.log(newsPrinter.json())
console.log(newsPrinter.xml())
