'use strict'

/* global print */

// make this work with d8 and Node.js
function log() {
  if (typeof print === 'function') {
    print.apply(this, arguments)
  } else {
    console.log.apply(console, arguments)
  }
}

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  distance(p) {
    const squareX = Math.pow(p.x - this.x, 2)
    const squareY = Math.pow(p.y - this.y, 2)
    return Math.sqrt(squareX + squareY)
  }

  toString() {
    return `x: ${this.x}, y: ${this.y}`
  }
}

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    const pointA = new Point(i, j)
    const pointB = new Point(j, i)
    log(pointA.distance(pointB))
  }
}

const point3d = new Point(1, 2)
point3d.z = 3
log(point3d.toString())

// allocating t before z will cause transition from 2d map
let point4d = new Point(1, 2)
point4d.t = 4
point4d.z = 5
log(point4d.toString())

// allocating t after z will cause transition from 3d map
point4d = new Point(1, 2)
point4d.z = 4
point4d.t = 5

log(point4d.toString())
