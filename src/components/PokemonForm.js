import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  //new Pokemon Object from submission 
  constructor() {
    super()
    this.state = {
      name: "",
      hp: "",
      sprites: {
        front: "",
        back: ""
      }
    }
  }

  handleChange = (event) => {
    //takes in the form input and make an object using state 
    if (event.target.name == 'sprites.front') {
      this.setState({
        sprites: {
          front: event.target.value,
          back: this.state.sprites.back
        }
      })
    } else if (event.target.name == 'sprites.back'){
      this.setState({
        sprites: {
          front: this.state.sprites.front,
          back: event.target.value
        }
      })
    } else {
      this.setState({[event.target.name]: event.target.value})
    }
  }

  handleSubmit = () => {
    //createNewPoke -> send Pokemon Object (state) to Pokemon Page
    this.props.createNewPoke(this.state)
   }
    
  render(){
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name"  value={this.state.name} onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp"  value={this.state.hp} onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="sprites.front" onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="sprites.back" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }}


export default PokemonForm
