import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navigation">
				<div className="container">
					<a href="/#" className="logo" rel="home"></a>
					<ul className="nav" role="tablist">
						<li><a href="#conversations" className="active" data-toggle="tab" role="tab" aria-controls="conversations" aria-selected="true"><i className="eva-hover"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-message-square eva-animation eva-icon-hover-pulse"><g data-name="Layer 2"><g data-name="message-square"><rect width="24" height="24" opacity="0"></rect><path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM8 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path></g></g></svg></i></a></li>
						<li><a href="#friends" data-toggle="tab" role="tab" aria-controls="friends" aria-selected="false"><i className="eva-hover"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-people eva-animation eva-icon-hover-pulse"><g data-name="Layer 2"><g data-name="people"><rect width="24" height="24" opacity="0"></rect><path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"></path><path d="M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3z"></path><path d="M21 20a1 1 0 0 0 1-1 5 5 0 0 0-8.06-3.95A7 7 0 0 0 2 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"></path></g></g></svg></i></a></li>
						<li><a href="#notifications" data-toggle="tab" role="tab" aria-controls="notifications" aria-selected="false"><i className="eva-hover"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-bell eva-animation eva-icon-hover-pulse"><g data-name="Layer 2"><g data-name="bell"><rect width="24" height="24" opacity="0"></rect><path d="M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4z"></path></g></g></svg></i></a></li>
						<li><a href="#settings" data-toggle="tab" role="tab" aria-controls="settings" aria-selected="false"><i className="eva-hover"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-settings eva-animation eva-icon-hover-pulse"><g data-name="Layer 2"><g data-name="settings"><rect width="24" height="24" opacity="0"></rect><circle cx="12" cy="12" r="1.5"></circle><path d="M21.89 10.32L21.1 7.8a2.26 2.26 0 0 0-2.88-1.51l-.34.11a1.74 1.74 0 0 1-1.59-.26l-.11-.08a1.76 1.76 0 0 1-.69-1.43v-.28a2.37 2.37 0 0 0-.68-1.68 2.26 2.26 0 0 0-1.6-.67h-2.55a2.32 2.32 0 0 0-2.29 2.33v.24a1.94 1.94 0 0 1-.73 1.51l-.13.1a1.93 1.93 0 0 1-1.78.29 2.14 2.14 0 0 0-1.68.12 2.18 2.18 0 0 0-1.12 1.33l-.82 2.6a2.34 2.34 0 0 0 1.48 2.94h.16a1.83 1.83 0 0 1 1.12 1.22l.06.16a2.06 2.06 0 0 1-.23 1.86 2.37 2.37 0 0 0 .49 3.3l2.07 1.57a2.25 2.25 0 0 0 1.35.43A2 2 0 0 0 9 22a2.25 2.25 0 0 0 1.47-1l.23-.33a1.8 1.8 0 0 1 1.43-.77 1.75 1.75 0 0 1 1.5.78l.12.17a2.24 2.24 0 0 0 3.22.53L19 19.86a2.38 2.38 0 0 0 .5-3.23l-.26-.38A2 2 0 0 1 19 14.6a1.89 1.89 0 0 1 1.21-1.28l.2-.07a2.36 2.36 0 0 0 1.48-2.93zM12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z"></path></g></g></svg></i></a></li>
						<li><button type="button" className="btn mode"><i className="eva-hover"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-bulb eva-animation eva-icon-hover-pulse"><g data-name="Layer 2"><g data-name="bulb"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><path d="M12 7a5 5 0 0 0-3 9v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a5 5 0 0 0-3-9z"></path><path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z"></path><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"></path><path d="M5 11H3a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"></path><path d="M7.66 6.42L6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.06-1.41z"></path><path d="M19.19 5.05a1 1 0 0 0-1.41 0l-1.44 1.37a1 1 0 0 0 0 1.41 1 1 0 0 0 .72.31 1 1 0 0 0 .69-.28l1.44-1.39a1 1 0 0 0 0-1.42z"></path></g></g></svg></i></button></li>
						<li><button type="button" className="btn"><img src="assets/img/avatars/avatar-male-1.jpg" alt="avatar"/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="eva eva-radio-button-on"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width="24" height="24" opacity="0"></rect><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"></path></g></g></svg></button></li>
					</ul>
				</div>
			</nav>
        )
    }
}