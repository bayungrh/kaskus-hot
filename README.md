# kaskus-hot
Kaskus Hot Thread NodeJS Package

## Installation
```bash
npm i --save kaskus-hot
```

## Usage
```javascript
const HotThread = require('kaskus-hot')

(async() => {
    const kaskus_ht = new HotThread()
    let default = await kaskus_ht.get()
    let limit_page = await kaskus_ht.limit(15).get()
    let next_page = await kaskus_ht.offset(15).cursor(kaskus_ht.get_cursor).get()

    console.log(default.data)
    console.log(default.limit_page.data)
    console.log(default.next_page.data)
})()
```