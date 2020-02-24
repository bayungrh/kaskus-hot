const unirest = require('unirest')

class HotThread {
    constructor() {
        this.url = "https://m.kaskus.co.id/forum/hotthread/get/"
        this._limit = 12
        this._offset = 0
        this._cursor = "*"
        this._response = {}
    }
    limit(limit=12) {
        this._limit = limit
        return this
    }
    offset(offset=0) {
        this._offset = offset
        return this
    }
    cursor(cursor="*") {
        this._cursor = cursor
        return this
    }
    async get() {
        await unirest.post(this.url)
        .headers({
            'Accept': 'application/json', 
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Origin': 'm.kaskus.co.id'
        }).form({
            limit: this._limit,
            offset: this._offset,
            cursor: this._cursor
        }).then(response => {
            this.reponse = response.body
            return response.body
        })
        return this
    }
    get get_cursor() {
        let res = this.data
        return res.cursor
    }
    get data() {
        return JSON.parse(this.reponse)
    }
}

module.exports = HotThread