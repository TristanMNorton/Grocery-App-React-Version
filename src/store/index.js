import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    allIngredients: null
  },

  actions: {
    getAllIngredients ({ commit }) {
      axios.get('/api/v1/ingredient')
        .then(res => {
          commit('setAllIngredients', res.data.data)
        })
    },

    saveIngredient ({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/api/v1/ingredient',
          data,
          headers: {
            'content-type': 'application/vnd.api+json'
          }
        }).then(res => {
          this.dispatch('getIngredientUpdateState', res.data._id)
        }).catch(error => {
          reject(error.response.data.errors)
        })
      })
    },

    getIngredientUpdateState ({ commit }, ingredientId) {
      axios.get(`/api/v1/ingredient/${ingredientId}`)
        .then(res => {
          commit('addOneToAllIngredients', res.data.data)
        })
    },

    updateIngredient ({ commit }, updateData) {
      return new Promise((resolve, reject) => {
        const data = updateData.data

        axios({
          method: 'PATCH',
          url: `/api/v1/ingredient/${updateData.id}`,
          data,
          headers: {
            'content-type': 'application/vnd.api+json'
          }
        }).then(res => {
          this.dispatch('getIngredientAndUpdateExisting', updateData.id)
          resolve()
        })
      })
    },

    getIngredientAndUpdateExisting ({ commit }, id) {
      axios.get(`/api/v1/ingredient/${id}`)
        .then(res => {
          commit('updateExistingIngredient', res.data.data)
        })
    }
  },

  mutations: {
    setAllIngredients (state, ingredients) {
      state.allIngredients = ingredients
    },

    addOneToAllIngredients (state, ingredientData) {
      state.allIngredients.push(ingredientData)
    },

    updateExistingIngredient (state, data) {
      const [existingIngredient] = state.allIngredients.filter(ingredient => ingredient.id === data.id)

      Object.keys(existingIngredient).forEach(key => {
        existingIngredient[key] = data[key]
      })
    }
  }

})

export default store