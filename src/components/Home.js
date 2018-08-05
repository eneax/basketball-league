import React, { Component } from 'react';
import TeamLogo from './TeamLogo';
import { Link } from 'react-router-dom';
import { getTeamNames } from '../api';

export default class Home extends Component {
  state = {
    teamNames: []
  }
  // fetch teams using getTeamNames and add those to the 'state'
  // it will cause a re-render and we will get the list of teamNames
  componentDidMount() {
    getTeamNames()
      .then((teamNames) => this.setState(() => ({
        teamNames
      })))
  }
  render() {
    const { teamNames } = this.state;
    return (
      <div className='container'>
        <h1 className='large-header'>Basketball League</h1>
        <h3 className='header text-center'>Select a team</h3>
        <div className='home-grid'>
          {
            teamNames.map((id) => (
              <Link to={`/${id}`} key={id}>
                <TeamLogo id={id} width='125px' />
              </Link>
            ))
          }
        </div>
      </div>
    )
  }
}