function SignIn() {
  return (
    <section class="ftco-section">
      <div class="container">
        
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="wrap d-md-flex">
              <div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div class="text w-100">
                  <h2>Welcome to login</h2>
                  <p>Don't have an account?</p>
                  <a href="#" class="btn btn-white btn-outline-white">
                    Sign Up
                  </a>
                </div>
              </div>
              <div class="login-wrap p-4 p-lg-5">
                
                <form action="#" class="signin-form">
                  <div class="form-group mb-3">
                    <label class="label" for="name">
                      Username
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="form-control btn btn-primary submit px-3 my-3"
                    >
                      Sign In
                    </button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
