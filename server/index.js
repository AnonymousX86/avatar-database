import express from "express"
// eslint-disable-next-line no-unused-vars
import consola from "consola"
import { loadNuxt } from "nuxt-start"
// eslint-disable-next-line no-unused-vars
const app = express()

async function start() {
  const nuxt = await loadNuxt(
    process.env.NODE_ENV === "development" ? "dev" : "start"
  )
  await nuxt.listen(process.env.PORT, process.env.HOST)
}

start()
