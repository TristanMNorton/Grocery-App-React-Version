import React from 'react'
import axios from 'axios'
import Container from '@material-ui/core/Container'
import RecipeList from '../components/RecipeList'
import RecipeAddForm from '../components/RecipeAddForm'
import Grid from '@material-ui/core/Grid'

class Recipes extends React.Component {
  state = {
    recipes: []
  }

  componentDidMount () {
    axios.get('/api/v1/recipe')
      .then(res => {
        const recipes = res.data.data.map(recipe => {
          return {
            ...recipe.attributes,
            id: recipe.id
          }
        })

        this.setState({ recipes })
      })
  }

  render () {
    const { recipes } = this.state

    return (
      <section>
        <Container maxWidth='md'>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <RecipeAddForm />
            </Grid>
            <Grid item xs={12} md={8}>
              <RecipeList recipes={recipes} />
            </Grid>
          </Grid>
        </Container>
      </section>
    )
  }
}

export default (Recipes)
