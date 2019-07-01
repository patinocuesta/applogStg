import React, { Component } from 'react';
import api from '../services/api';
import './LogCell.css';

export default class LogCell extends Component {

  render() {
    const { event_ts,
            client_host,
            host,
          	received_host,
          	received_ts,
          	received_from,
          	domain,
          	scope,
          	source_file,
          	classlog,
          	event_code,
            message} = this.props;

    return (
      <div className="dib-container">
        <div className="dib-left">
          <div className="dib-title">{scope}</div>
          <div className="dib-title">{domain}</div>
          <div className="dib-title">{message}</div>
        </div>
        <div className="dib-right">
          <div className="dib-title">{received_ts}</div>

        </div>
      </div>
    );
  }
}
