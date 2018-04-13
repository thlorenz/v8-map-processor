'use strict'

/* global location fetch */

async function preload() {
  try {
    if (!(/^\?v8log=/).test(location.search)) return
    const fileUrl = location.search.replace(/^\?v8log=/, '')
    const fileData = await fetch(fileUrl)
    const txt = await fileData.text()
    window.handleLoadText(txt)
  } catch (err) {
    console.error(err)
  }
}

preload()
