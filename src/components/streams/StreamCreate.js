import React from 'react'
import { createStreams } from '../../actions/index'
import { connect } from 'react-redux'
import StreamForm from './StreamForms'

class StreamCreate extends React.Component {

  onSubmit = formValues => {
    this.props.createStreams(formValues)
  }

  render(){
    return(
      <div>
        <h3>Create  a stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    )
  }

}

export default connect(null, {
  createStreams
})(StreamCreate)
