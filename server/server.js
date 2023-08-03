import * as Path from 'node:path'
import * as URL from 'node:url'
import * as fs from 'node:fs/promises'
import express from 'express'
import hbs from 'express-handlebars'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)
const filePath = Path.join(__dirname, 'data', 'questions.json')
// read the contents of the file as string
const data = await fs.readFile(filePath, 'utf-8')
const people = JSON.parse(data)
const server = express()

// Server configuration
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))

// Your routes/router(s) should go here
// server.get('/', (req, res) => {
//   const usThree = people
//   const viewData = usThree
//   res.render('home', viewData)
// })

server.get('/quizzes', (req, res) => {
  const questions = people
  const viewData = questions
  res.render('quizzes', viewData)
})
export default server
