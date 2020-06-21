import React from 'react'
import {Field, reduxForm} from 'redux-form'

class StreamForm extends React.Component {

  renderError = ({ touched, error }) => {

    if(touched && error) {
      return(
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }

  }

  renderInput = ({ input, label, meta }) => {

    const error = (meta.error && meta.touched) && 'error'

    return (
      <div className= {`field ${error}`}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    )

  }

  render(){
    return(
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Title"/>
        <Field name="description" component={this.renderInput} label="Description"/>
        <button type="submit">submit</button>
      </form>
    )
  }

}

const validate = formObject => {

  const error = {}

  if(!formObject.title) {
    error.title = "enter title"
  }

  if(!formObject.description) {
    error.description = "enter description"
  }

  return error

}

export default  (reduxForm({
  form: 'streamForm',
  validate
}))(StreamForm)
