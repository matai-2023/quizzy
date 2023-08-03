import express from 'express'
import * as Path from 'node:path/posix'
import * as URL from 'node:url'
import * as fs from 'node:fs/promises'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const puppiesRoute = express.Router()
export default puppiesRoute
