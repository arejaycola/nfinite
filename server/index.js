import express, { response } from 'express'
import fs from 'fs'
import { csv } from 'csvtojson'
import cors from 'cors'
import fileUpload from 'express-fileupload'
const app = express()

app.use(cors())
app.use(fileUpload())

app.get('/', (req, res) => {
  res.send('This is from express.js')
})

app.post('/upload', async (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.')
  }

  const filePath = `${__dirname}/uploads/${req.files.fileUpload.name}`

  req.files.fileUpload.mv(filePath, async function () {
    const json = await csv({
      delimiter: ';',
    }).fromFile(filePath)

    const data = json.map(row => {
      return {
        status: '',
        ...row,
      }
    })
    res.send(data)
  })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server started on port ${port}: http://localhost:${port}`)
})
