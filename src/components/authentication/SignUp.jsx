import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css"

const SignUp = () => {
  return (
    <>
         <div className="Authentication">
        <div className="card-container">

            <div className="Login-Card">
                <div className="login">
                    <span className="card-heading">sign up</span>
                    <form action="">
                        <div className="email">
                            <div className="icon"><i className="fa-solid fa-circle-user"></i></div>
                            <div className="input-box"><input type="text" /></div>
                        </div>
                        <div className="email">
                            <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                            <div className="input-box"><input type="text" /></div>
                        </div>
                        <div className="password">
                            <div className="icon"><i className="fa-solid fa-lock"></i></div>
                            <div className="input-box"><input type="password" /></div>
                        </div>
                        <div className="btn-container">

                            <button type="submit"> <i className="fa-solid fa-right-to-bracket"></i> sign up</button>
                        </div>
                    </form>
                    <div className="optional-box">
                        <Link to="login">please login your account </Link>
                    </div>
                </div>
                <div className="login-icon">
                    <i className="fa-solid fa-circle-user"></i>
                </div>
            </div>

        </div>
    </div>
    </>
  );
}

export default SignUp;
