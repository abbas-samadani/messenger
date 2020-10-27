import React, { Component } from 'react'

export default class UtilityUsers extends Component {
    render() {
        return (
            <div className="tab-pane fade active show" id="users" role="tabpanel">
            <h4>Users</h4>
            <hr />
            <ul className="users">
                <li>
                    <div className="status online"><img src="assets/img/avatars/avatar-male-1.jpg" alt="avatar" /><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="eva eva-radio-button-on"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width={24} height={24} opacity={0} /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" /></g></g></svg></div>
                    <div className="content">
                        <h5>Ham Chuwon</h5>
                        <span>Florida, US</span>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="eva eva-more-vertical"><g data-name="Layer 2"><g data-name="more-vertical"><rect width={24} height={24} transform="rotate(-90 12 12)" opacity={0} /><circle cx={12} cy={12} r={2} /><circle cx={12} cy={5} r={2} /><circle cx={12} cy={19} r={2} /></g></g></svg></button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button type="button" className="dropdown-item">Edit</button>
                            <button type="button" className="dropdown-item">Share</button>
                            <button type="button" className="dropdown-item">Delete</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="status offline"><img src="assets/img/avatars/avatar-male-2.jpg" alt="avatar" /><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="eva eva-radio-button-on"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width={24} height={24} opacity={0} /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" /></g></g></svg></div>
                    <div className="content">
                        <h5>Quincy Hensen</h5>
                        <span>Shanghai, China</span>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="eva eva-more-vertical"><g data-name="Layer 2"><g data-name="more-vertical"><rect width={24} height={24} transform="rotate(-90 12 12)" opacity={0} /><circle cx={12} cy={12} r={2} /><circle cx={12} cy={5} r={2} /><circle cx={12} cy={19} r={2} /></g></g></svg></button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button type="button" className="dropdown-item">Edit</button>
                            <button type="button" className="dropdown-item">Share</button>
                            <button type="button" className="dropdown-item">Delete</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="status online"><img src="assets/img/avatars/avatar-male-3.jpg" alt="avatar" /><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="eva eva-radio-button-on"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width={24} height={24} opacity={0} /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" /></g></g></svg></div>
                    <div className="content">
                        <h5>Mark Hog</h5>
                        <span>Olso, Norway</span>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="eva eva-more-vertical"><g data-name="Layer 2"><g data-name="more-vertical"><rect width={24} height={24} transform="rotate(-90 12 12)" opacity={0} /><circle cx={12} cy={12} r={2} /><circle cx={12} cy={5} r={2} /><circle cx={12} cy={19} r={2} /></g></g></svg></button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button type="button" className="dropdown-item">Edit</button>
                            <button type="button" className="dropdown-item">Share</button>
                            <button type="button" className="dropdown-item">Delete</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="status offline"><img src="assets/img/avatars/avatar-male-4.jpg" alt="avatar" /><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="eva eva-radio-button-on"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width={24} height={24} opacity={0} /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" /></g></g></svg></div>
                    <div className="content">
                        <h5>Sanne Viscaal</h5>
                        <span>Helena, Montana</span>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="eva eva-more-vertical"><g data-name="Layer 2"><g data-name="more-vertical"><rect width={24} height={24} transform="rotate(-90 12 12)" opacity={0} /><circle cx={12} cy={12} r={2} /><circle cx={12} cy={5} r={2} /><circle cx={12} cy={19} r={2} /></g></g></svg></button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button type="button" className="dropdown-item">Edit</button>
                            <button type="button" className="dropdown-item">Share</button>
                            <button type="button" className="dropdown-item">Delete</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="status offline"><img src="assets/img/avatars/avatar-male-5.jpg" alt="avatar" /><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="eva eva-radio-button-on"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width={24} height={24} opacity={0} /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" /></g></g></svg></div>
                    <div className="content">
                        <h5>Alex Just</h5>
                        <span>London, UK</span>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="eva eva-more-vertical"><g data-name="Layer 2"><g data-name="more-vertical"><rect width={24} height={24} transform="rotate(-90 12 12)" opacity={0} /><circle cx={12} cy={12} r={2} /><circle cx={12} cy={5} r={2} /><circle cx={12} cy={19} r={2} /></g></g></svg></button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button type="button" className="dropdown-item">Edit</button>
                            <button type="button" className="dropdown-item">Share</button>
                            <button type="button" className="dropdown-item">Delete</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="status online"><img src="assets/img/avatars/avatar-male-6.jpg" alt="avatar" /><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="eva eva-radio-button-on"><g data-name="Layer 2"><g data-name="radio-button-on"><rect width={24} height={24} opacity={0} /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" /></g></g></svg></div>
                    <div className="content">
                        <h5>Arturo Thomas</h5>
                        <span>Vienna, Austria</span>
                    </div>
                    <div className="dropdown">
                        <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="eva eva-more-vertical"><g data-name="Layer 2"><g data-name="more-vertical"><rect width={24} height={24} transform="rotate(-90 12 12)" opacity={0} /><circle cx={12} cy={12} r={2} /><circle cx={12} cy={5} r={2} /><circle cx={12} cy={19} r={2} /></g></g></svg></button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button type="button" className="dropdown-item">Edit</button>
                            <button type="button" className="dropdown-item">Share</button>
                            <button type="button" className="dropdown-item">Delete</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        
        )
    }
}
