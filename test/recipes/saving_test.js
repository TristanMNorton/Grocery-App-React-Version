/**
 * Saving Test
 * Author: Tristan Norton 2019
 */

const mocha = require('mocha')
const assert = require('assert')
const Recipe = require('../../models/recipe/recipe')

describe('Saving recipe', function() {
    
    it('Saves a recipe to the database', function(done) {
        const bolognese = new Recipe({
            name: 'Bolognese',
            instructions: 'You cook it...'
        })

        bolognese.save().then(function() {
            assert(!bolognese.isNew)
            done()
        })
    })
    
})
