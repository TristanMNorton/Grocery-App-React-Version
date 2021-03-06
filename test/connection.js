/**
 * Connection Helper - Testing Hooks
 * Author: Tristan Norton 2019
 */

const mocha = require('mocha')
const before = mocha.before
const beforeEach = mocha.beforeEach
const mongoose = require('mongoose')

// Setup connection before tests
before(function (done) {
  mongoose.connect('mongodb://localhost/grocery-app-testing', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  mongoose.connection.once('open', function () {
    done()
  })
})

// Empty collections before each test
beforeEach(async function () {
  await mongoose.connection.collections.ingredients.deleteMany({})
  await mongoose.connection.collections.recipes.deleteMany({})
})
