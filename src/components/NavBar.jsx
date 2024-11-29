import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to control the modal visibility and store the username
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState(""); // To store the username after sign up

  const toggleModal = () => setShowModal(!showModal);

  const handleSignUp = (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);
    const enteredUsername = formData.get("username"); // Get the entered username

    setUsername(enteredUsername); // Set the username state
    setShowModal(false); // Close the modal after successful sign-up
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          FlashFeed
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            
            <li className="nav-item">
              {username ? (
                <span className="nav-link">
                  <i className="fas fa-user"></i> {username}
                </span>
              ) : (
                <button className="nav-link btn" onClick={toggleModal}>
                  <i className="fas fa-user-plus"></i> Sign Up
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Modal for Sign Up */}
      {showModal && (
        <div
          className="modal fade show"
          id="signUpModal"
          tabIndex="-1"
          aria-labelledby="signUpModalLabel"
          aria-hidden="true"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="signUpModalLabel">
                  Sign Up
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={toggleModal}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSignUp}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
