import React from 'react';
function Form() {
    return (
        <div className="App">
          <form className="w-25 mx-auto mt-5 text-center">
            <img
              className="w-25"
              src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt=""
            />
            <p className="h3 my-4">Please sign in</p>
            <div className="">
              <input
                type="email"
                className="form-control py-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Adress"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control py-3"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="me-1" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">
                Remember Me
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign in
            </button>
            <p className="mt-2">© 2017-2021</p>
          </form>
        </div>
      );
}
export default Form;