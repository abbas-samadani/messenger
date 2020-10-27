import React, { Component } from 'react'

export default class ChatContainer extends Component {
  render() {
    return (
      <div className="middle">
        <div className="container">
          <ul>
            <li>
              <img src="assets/img/avatars/avatar-male-3.jpg" alt="avatar" />
              <div className="content">
                <div className="message">
                  <div className="bubble">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
                <span>07:30am</span>
              </div>
            </li>
            <li>
              <img src="assets/img/avatars/avatar-male-5.jpg" alt="avatar" />
              <div className="content">
                <div className="message">
                  <div className="bubble">
                    <p>Many desktop publishing packages.</p>
                  </div>
                </div>
                <span>11:56am</span>
              </div>
            </li>
            <li>
              <img src="assets/img/avatars/avatar-male-3.jpg" alt="avatar" />
              <div className="content">
                <div className="message">
                  <div className="bubble">
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                  </div>
                </div>
                <span>01:03pm</span>
              </div>
            </li>
            <li>
              <img src="assets/img/avatars/avatar-male-5.jpg" alt="avatar" />
              <div className="content">
                <div className="message">
                  <div className="bubble">
                    <p>It was popularised in the 1960s.</p>
                  </div>
                </div>
                <span>05:42pm</span>
              </div>
            </li>
            <li>
              <img src="assets/img/avatars/avatar-male-3.jpg" alt="avatar" />
              <div className="content">
                <div className="message">
                  <div className="bubble">
                    <p>It is a long established fact that a reader will be distracted.</p>
                  </div>
                </div>
                <span>08:20pm</span>
              </div>
            </li>
            <li>
              <img src="assets/img/avatars/avatar-male-5.jpg" alt="avatar" />
              <div className="content">
                <div className="message">
                  <div className="bubble">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                  </div>
                </div>
                <span>10:15pm <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="eva eva-done-all"><g data-name="Layer 2"><g data-name="done-all"><rect width={24} height={24} opacity={0} /><path d="M16.62 6.21a1 1 0 0 0-1.41.17l-7 9-3.43-4.18a1 1 0 1 0-1.56 1.25l4.17 5.18a1 1 0 0 0 .78.37 1 1 0 0 0 .83-.38l7.83-10a1 1 0 0 0-.21-1.41z" /><path d="M21.62 6.21a1 1 0 0 0-1.41.17l-7 9-.61-.75-1.26 1.62 1.1 1.37a1 1 0 0 0 .78.37 1 1 0 0 0 .78-.38l7.83-10a1 1 0 0 0-.21-1.4z" /><path d="M8.71 13.06L10 11.44l-.2-.24a1 1 0 0 0-1.43-.2 1 1 0 0 0-.15 1.41z" /></g></g></svg></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
