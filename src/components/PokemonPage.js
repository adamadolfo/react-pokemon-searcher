import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    filter: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(data => this.setState({
      pokemon: data
    }))
  }
  

  handleSearch = (input) => {
    this.setState({
      filter: input
    })
    combine()
  }

  

  render() {
    let combine = () => {
    return this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.filter))
    }
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection allPokes={combine()} />
      </Container>
    )
  }
}

export default PokemonPage
