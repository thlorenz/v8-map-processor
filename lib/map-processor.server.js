'use strict'

const path = require('path')
const ecstatic = require('ecstatic')
const connect = require('connect')
const opener = require('opener')

const coreToolsDir = path.dirname(require.resolve('v8-tools-core'))
const ecstaticCore = ecstatic({ root: coreToolsDir })

function createServer(v8logDir, PORT = null) {
  const rootDir = path.join(__dirname, '..')
  const ecstaticRoot = ecstatic({ root: rootDir })
  const ecstaticData = ecstatic({ root: v8logDir })

  const app = connect()
    .use('/', ecstaticRoot)
    .use('/core/', ecstaticCore)
    .use('/data/', ecstaticData)

  const server = app.listen(PORT)
  const { port } = server.address()
  const address = `http://localhost:${port}`
  return { server, address }
}

function openWithV8LogFile({ address, fileName }) {
  const url = `${address}/map-processor.html?v8log=${address}/data/${fileName}`
  opener(url)
}

module.exports = { createServer, openWithV8LogFile }
