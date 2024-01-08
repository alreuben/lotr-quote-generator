const PORT = 9000
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())

const headers = { //set headers here
    'Accept': process.env.REACT_APP_RAPID_API_ID,
    'Authorization': process.env.REACT_APP_RAPID_API_KEY
}


app.get('/Fellowship', (req, res) => {
    const fellowship_quotes = async () => {
        let fellowship_data = await fetch('https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c/quote', {
            headers: headers
        })
        let fellowship_quotes = await fellowship_data.json();
        res.json(fellowship_quotes.docs) //show response in browser
    }

    fellowship_quotes();
})


app.get('/TwoTowers', (req, res) => {
    const two_towers_quotes = async () => {
        let two_towers_data = await fetch('https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5b/quote', {
            headers: headers
        })
        let two_towers_quotes = await two_towers_data.json();
        res.json(two_towers_quotes.docs)
    }

    two_towers_quotes();
})


app.get('/ReturnKing', (req, res) => {
    const return_king_quotes = async () => {
        let return_king_data = await fetch('https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5d/quote', {
            headers: headers
        })
        let return_king_quotes = await return_king_data.json();
        res.json(return_king_quotes.docs)
    }

    return_king_quotes();
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
