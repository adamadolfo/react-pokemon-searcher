import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const pokemonData = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {
  
  state = {
    pokemon: [],
    filter: "",
    newPokeObject: []
  }

  componentDidMount() {
    //fetch data and add it to state
    fetch(pokemonData)
    .then(data => data.json())
    .then(pokemon => this.setState({
      pokemon: pokemon
    }))
  }
  
  handleSearch = (input) => {
    //set state.filter to search input
    this.setState({
      filter: input
    })
  }

  pokemoneResults = () => {
    //return from search
    return this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.filter))
  }

  createNewPoke = (newPokeObject) => {
    //from PokemonForm
    fetch("http://localhost:3000/pokemon", {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(newPokeObject)
    })
    .then(res => res.json())
    .then(newPoke => {
      this.setState({
        pokemon: [...this.state.pokemon, newPoke]
      })
    })
}

  render() {
    
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        {/* return submission to Pokemon Page*/}
        <PokemonForm createNewPoke={this.createNewPoke} />
        <br />
        {/* return serach input to Pokemon Page*/}
        <Search handleSearch={this.handleSearch}/>
        <br />
        {/* sends all Pokemon to PokemonCollection Page*/}
        <PokemonCollection allPokes={this.pokemoneResults()} />
      </Container>
    )
  }
}

export default PokemonPage
