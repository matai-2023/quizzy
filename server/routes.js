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
  const filePath = Path.join(__dirname, 'data', 'results.json')
  const data = await fs.readFile(filePath, 'utf-8')
  const result = JSON.parse(data).pokemon

  //Grab scores array from the form
  let body = req.body
  let scores = Object.values(body)
  let scoreArr = []
  for (let item of scores) {
    scoreArr.push(Number(item))
  }

  let totalScore = scoreArr.reduce((total, current) => total + current)
  console.log(totalScore)
  //conditions to render page
  if (11 < totalScore < 16) {
    res.render('result', result[2])
  } else if (15 < totalScore < 20) {
    res.render('result', result[3])
  } else if (19 < totalScore < 25) {
    res.render('result', result[1])
  } else {
    res.render('result', result[0])
  }
})
