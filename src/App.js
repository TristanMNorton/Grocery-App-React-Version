import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Recipes from './views/Recipes'
import IngredientList from './views/IngredientList'
import RecipeDetail from './views/RecipeDetail'
import './App.css'

function App () {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/recipes'>Recipes</Link>
            </li>
            <li>
              <Link to='/ingredients'>Ingredients</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/ingredients'>
            <IngredientList />
          </Route>
          <Route path='/recipes'>
            <Recipes />
          </Route>
          <Route path='/recipe/:id'>
            <RecipeDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
