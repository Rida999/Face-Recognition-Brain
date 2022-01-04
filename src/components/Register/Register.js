import React from 'react';

export default function Register(props) {
    let {onRouteChange}=props;
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-70 w-50-m w-25-l mw6 center">
            <main className="pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 mt3">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt4">
                        <label className="db fw6 lh-copy f4" htmlFor="name">name:</label>
                        <input className="pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" type="text" name="name"  id="name" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="email-address">Email:</label>
                        <input className="pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f4" htmlFor="password">Password:</label>
                        <input className="b pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div>
                    <input className="b br2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" type="submit" value="Register" onClick={()=>onRouteChange('signin')} />
                    </div>
                </div>
            </main>
        </article>
    )
}
