/**
 * Saving Test
 * Author: Tristan Norton 2019
 */

const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
const assert = require('assert')
const Recipe = require('../../models/recipe/recipe')
const Ingredient = require('../../models/ingredient/ingredient')

describe('Ingredient Integrations', function () {
  /**
   * Ingredient add to recipe test
   */
  it('Checking if an item from ingredient collection gets added appropriately', async function () {
    /**
     * Save and re-query ingredient
     */
    const banana = new Ingredient({
      name: 'Banana',
      quantityType: 'weight'
    })
    await banana.save()
    const queriedBanana = await Ingredient.findOne({ name: 'Banana' })

    /**
     * Save and re-query recipe
     */
    const bolognese = new Recipe({
      name: 'Bolognese',
      instructions: 'You cook it...'
    })

    bolognese.ingredientsRequired.push({
      ingredient: queriedBanana._id,
      quantityRequired: 5
    })
    await bolognese.save()
    const queriedBolognese = await Recipe.findOne({ name: 'Bolognese' })

    /**
     * Get Ingredients of queried recipe and filter out for matching id.
     */
    const idsThatMatch = queriedBolognese.ingredientsRequired

    idsThatMatch.filter(ingredient =>
      ingredient.ingredient.toString() === queriedBanana._id.toString()
    )

    assert(idsThatMatch.length > 0)
  })
})
