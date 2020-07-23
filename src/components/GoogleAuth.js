import React from 'react'
import { connect } from 'react-redux'
import { trySignIn, trySignOut} from '../actions/index'


class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '468094264508-8gma9eorajkctagqaihosp2bvb6hu0n0.apps.googleusercontent.com',
        scope: 'email'
      })
      .then(() => {
        //default initializing to use entire app
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get()) // authenticate the status when we first enter into the app..or app first starts
        this.auth.isSignedIn.listen(this.onAuthChange) //each time the status changes and it has a callback parmeter isSignedin
      })
    })

  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn) {
      this.props.trySignIn(this.auth.currentUser.get().getId())
    }else{
      this.props.trySignOut()
    }
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if(this.props.isSignedIn === null) {
      return "null"
    }else if(this.props.isSignedIn){
      return(
        <div>
          <button onClick={this.onSignOutClick} className="ui red google button">
            <i className="google icon"/>Sign Out
          </button>
        </div>
      )
    }else {
      return(
        <div>
          <button onClick={this.onSignInClick} className="ui red google button">
            <i className="google icon"/>
            Sign In with Google
          </button>
        </div>
      )
    }
  }

  render() {
    return (<div>{this.renderAuthButton()}</div>)
  }

}

const mapstateToProps = (state) => {
  return {
    isSignedIn: state.userStatus.isSignedIn,
    userId: state.userStatus.userId
  }
}

export default connect(mapstateToProps, {
  trySignIn, trySignOut
})(GoogleAuth)
