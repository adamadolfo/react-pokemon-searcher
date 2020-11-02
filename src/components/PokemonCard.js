import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

state = {
  sprite: true
}

toggleSprite = () => {
  this.setState({
    sprite: !this.state.sprite
  })
}

  render() {
    return (
      <Card onClick={this.toggleSprite}>
        <div>
          <div className="image">
            {this.state.sprite ? <img src={this.props.pokemon.sprites.front} /> : <img src={this.props.pokemon.sprites.back} />} 
          </div>
          <div className="content">
    <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
