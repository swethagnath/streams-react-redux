import React from 'react'

import Modal from '../Modal'

import history from '../../history'

import { connect } from 'react-redux'

import { fetchStream, deleteStream } from '../../actions/index'

import { Link } from 'react-router-dom'

class StreamDelete extends React.Component{

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  deleteButton() {
    const { id } = this.props.match.params
    this.props.deleteStream(id)
  }

  renderActions ()  {
    return(
      <React.Fragment>
        <button  onClick={ () => this.deleteButton() } className="ui button negative">Delete</button>
        <Link to='/' className="ui button">Cancel</Link>
      </React.Fragment>
    )
  }

  renderContent() {
      if(this.props.stream) {
        return `are you sure you want to delete the stream--${ this.props.stream.title }`
      }
      return "are you sure you want to delete the stream?"
  }

  render() {
    return(
        <Modal
          title="delete stream"
          content= { this.renderContent() }
          actions = { this.renderActions() }
          onDismiss = { () => history.push('/') }
        />
    )
  }


}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {
  fetchStream,
  deleteStream
})(StreamDelete)
