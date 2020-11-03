import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    filter: "",
    newPokeObject: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(data => this.setState({
      pokemon: data
    }))
  }
  
//use result of search 
  handleSearch = (input) => {
    this.setState({
      filter: input
    })
  }

  pokemoneResults = () => {
  return this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.filter))
  }

  createNewPoke = (newPokeObject) => {
    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(newPokeObject)
    })
    .then(res => res.json())
    .then(poke => {
      this.setState({
        pokemon: [...this.state.pokemon, poke]
      })
    })
}

  render() {
    
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createNewPoke={this.createNewPoke} />
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection allPokes={this.pokemoneResults()} />
      </Container>
    )
  }
}

export default PokemonPage
