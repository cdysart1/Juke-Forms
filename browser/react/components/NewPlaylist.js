import React, { Component } from 'react';

export default class NewPlaylist extends Component {

  constructor() {
    super();
    this.state = {
      input: ''
    };
    this.inputChange = this.inputChange.bind(this);
    this.inputSubmit = this.inputSubmit.bind(this);
    this.isEnabled = this.isEnabled.bind(this);
  }

  isEnabled(){
    return this.input.length < 16;
  }

  inputChange (event) {
    this.setState({
      input: event.target.value
    });
  }

  inputSubmit(e){
    e.preventDefault();
    this.setState({
      input: ''
    })
    console.log(this.state.input);
  }

render () {
  console.log('here');
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
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success"
              disabled={!this.isEnabled()}
              >Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )}
}
