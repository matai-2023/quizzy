import express from 'express'
import * as Path from 'node:path/posix'
import * as URL from 'node:url'
import * as fs from 'node:fs/promises'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const quizzz = express.Router()
export default quizzz

quizzz.get('/', async (req, res) => {
  const filePath = Path.join(__dirname, 'data', 'questions.json')
  // console.log(filePath)
  const data = await fs.readFile(filePath, 'utf-8')
  const question = JSON.parse(data)
  res.render('quizzes', question)
})

quizzz.post('/', async (req, res) => {
<<<<<<< HEAD
  const body = req.body
  // console.log(body)
=======
  let body = req.body
  console.log(body)
>>>>>>> 4416fcef39e531a1bc689f996abb7c00f95a8817
})
