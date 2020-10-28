import React from 'react'

export default function Register() {
    return (
        <div className="sign">
			<div className="container">
				<div className="item">
					<form>
						<h2>Sign Up</h2>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Username" required autoFocus/>
							<button className="btn prepend"><i data-eva="person"></i></button>
						</div>
						<div className="form-group">
							<input type="email" className="form-control" placeholder="Email Address" required/>
							<button className="btn prepend"><i data-eva="email"></i></button>
						</div>
						<div className="form-group">
							<input type="password" className="form-control" placeholder="Password" required/>
							<button className="btn prepend"><i data-eva="lock"></i></button>
						</div>
						<button type="submit" className="btn primary">Create account</button>
						<span>Already a member? <a href="/#">Sign In.</a></span>
					</form>
				</div>
			</div>
		</div>
    )
}
