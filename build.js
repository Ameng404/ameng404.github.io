const fs = require('fs')


function readDir() {
    fs.readdir('./article', (err, data) => {
        if (err) {
            console.error('\x1B[31m%s\x1B[0m', err)
        }

        fs.writeFileSync('./data/column.json', JSON.stringify({
            success: true,
            result: {
                data: data
            }
        }))
    })
}

readDir()
