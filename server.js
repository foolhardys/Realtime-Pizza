import express from 'express'
import ejs from 'ejs'
import expressLayout from 'express-ejs-layouts'
import path from 'path'

const app = express()

app.get('/', (req, res) => {
    res.render('home')
})

// set express template
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`);
})