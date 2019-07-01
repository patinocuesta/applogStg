import React, { Component } from 'react';
import api from '../services/api';
import LogCell from './LogCell';

export default class HomePage extends Component {
  state = {
    logs: [],
  };

  componentDidMount = () => {
    this.loadLogs();

    api.subscribeToLogChanges(event => {
      const { log, type } = event;
      const currentLogs = this.state.logs;
        this.loadLogs();
      // If adding a new dib
      return this.setState({
        logs: [log, ...currentLogs],
      });
    });
  };

  loadLogs = async () => {
    const result = await api.getLogs();
    this.setState({ logs: result });
  };


  render() {
    const { logs } = this.state;

    return (
      <div>
        <header>
          <h1>Got Logs?</h1>
        </header>
        <div>
          {logs.map(log => (
            <LogCell key={log._id} {...log}/>
          ))}
        </div>
      </div>
    );
  }
}
