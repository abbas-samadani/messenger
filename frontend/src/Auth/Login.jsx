import React from 'react'

export default function Login() {
    return (
        <div className="sign">
			<div className="container">
				<div className="item">
					<form>
						<h2>Login</h2>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Username" required autoFocus />
							<button className="btn prepend"><i data-eva="person"></i></button>
						</div>
						<div className="form-group">
							<input type="password" className="form-control" placeholder="Password" required />
							<button className="btn prepend"><i data-eva="lock"></i></button>
						</div>
						<a href="/#">Forgot Password?</a>
						<button type="submit" className="btn primary">Sign In</button>
						<span>Don't have account? <a href="/#">Create Account.</a></span>
					</form>
				</div>
			</div>
		</div>
    )
}
