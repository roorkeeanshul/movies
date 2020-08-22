const app = require('./express.config')

const {db} = require('./library/config/connection-manager')

app.listen(3000, async() => {
    console.log('server started at 3000');
    console.log(db)
})