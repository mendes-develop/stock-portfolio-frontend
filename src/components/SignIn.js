import React from 'react'

export default function SignIn(props) {
    return (
      <form className='ui form' onSubmit={props.fetchUser}>
        <h1>SIGN IN</h1>
        {props.error ? (
          <>
            <h2 className="error">Error! Try again.</h2>
          </>
        ) : null}
        <label>
          <strong>Email</strong>
        </label>
        <input type="text" name="email" placeholder='example@gmail.com' />
        <label>
          <strong>Password</strong>
        </label>
        <input type="password" name="password" placeholder='Insert Password' />
        <button type="submit" className="ui button">Log In</button>
      </form>
      )
}