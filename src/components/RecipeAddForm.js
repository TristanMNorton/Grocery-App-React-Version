import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'

class RecipeAddForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      instructions: '',
      rating: null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const { name } = event.target

    this.setState({ [name]: event.target.value })
  }

  render () {
    return (
      <div className='addForm'>
        <h2>Add a Recipe</h2>
        <TextField
          id='name'
          name='name'
          label='Recipe Name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <TextField
          id='description'
          name='description'
          label='Recipe Description'
          multiline
          rows={8}
          value={this.state.description}
          onChange={this.handleChange}
        />
        <TextField
          id='instructions'
          name='instructions'
          label='Recipe Instructions'
          multiline
          rows={8}
          value={this.state.instructions}
          onChange={this.handleChange}
        />
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          name='rating'
          value={this.state.rating}
          onChange={this.handleChange}
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
        </Select>
      </div>
    )
  }
}

export default RecipeAddForm
