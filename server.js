require('./src/config/env')
const app = require('./src/app')
const config = require('./src/config')


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});