import React, { Component } from 'react';
import axios from 'axios';

export default class NewPlaylist extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      dirty: false
    };

    this.inputChange = this.inputChange.bind(this);
    this.inputSubmit = this.inputSubmit.bind(this);
  }

  inputChange(event) {
    this.setState({
      input: event.target.value,
      dirty: true
    });
  }

  inputSubmit(e) {
    e.preventDefault();
    this.props.addPlaylist(this.state.input);
    this.setState({
      input: '',
      dirty: false
    })
  }

  render() {
    //console.log('here');
    return (

      <div className="well">
        <form className="form-horizontal"
          onSubmit={this.inputSubmit}>
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input className="form-control" type="text"
                  onChange={this.inputChange}
                  value={this.state.input}
                />
                {(this.state.input.length >= 16 || this.state.input.length === 0 && this.state.dirty) &&
                  <div className="alert alert-warning">Please enter a name</div>
                }
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success"
                  disabled={this.state.input.length >= 16}
                >Create Playlist</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
