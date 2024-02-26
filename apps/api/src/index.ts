import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World!'
  })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening...')
})
