import React from 'react';
import './Signin.css'

export default function Signin(props) {
    let {onRouteChange}=props;
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-70 w-50-m w-25-l mw6 center">
            <main className="pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 mt3">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt4">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">Email:</label>
                        <input className="pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="password">Password:</label>
                        <input className="b pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div>
                    <input className="b br2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib" type="submit" value="Sign in" onClick={()=>onRouteChange('home')} />
                    </div>
                    <div className="lh-copy mt3">
                    <a href="#0" className="f5 link dim black db" onClick={()=>onRouteChange('register')}>Register</a>
                    </div>
                </div>
            </main>
        </article>
    )
}
