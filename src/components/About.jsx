import React from 'react';


function About() {
  return (
    <div className="container mt-5 ">
     
      <div className="row mb-4">
        <div className="col-lg-8 offset-lg-2">
          <h2 className="text-center mb-4">About FlashFeed</h2>
          <p>
            <strong>FlashFeed</strong> is your go-to source for the latest and most reliable news updates. Created by Aditya Mohite, this app is designed to provide users with quick access to breaking news, top headlines, and in-depth articles across various categories such as business, technology, entertainment, sports, and more.
          </p>
          <p>
            FlashFeed focuses on delivering real-time news in an easy-to-read and visually engaging format, keeping you informed at all times. Whether you're looking for the latest headlines or in-depth analysis of trending topics, FlashFeed is the app that brings the world to your fingertips.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-8 offset-lg-2">
          <h3 className="text-center mb-4">Key Features of FlashFeed</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Real-time Updates:</strong> Get the latest news from trusted sources with real-time updates.
            </li>
            <li className="list-group-item">
              <strong>Curated Content:</strong> Tailored news based on your interests, including Business, Technology, Sports, and Entertainment.
            </li>
            <li className="list-group-item">
              <strong>Easy Navigation:</strong> Intuitive and user-friendly interface to navigate news effortlessly.
            </li>
            <li className="list-group-item">
              <strong>Trending Stories:</strong> Always be in the loop with the most talked-about stories of the moment.
            </li>
            <li className="list-group-item">
              <strong>Global and Local News:</strong> Stay informed with news from around the world, including local updates from India and other regions.
            </li>
          </ul>
        </div>
      </div>

   
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h3 className="text-center mb-4">About the Developer</h3>
          <p>
            <strong>Aditya Mohite</strong> is the developer behind <strong>FlashFeed</strong>. With a passion for technology and news, Aditya created FlashFeed to provide a fast and efficient way for people to stay informed. Aditya has worked on several web development projects, including frontend and full-stack web applications, and is committed to continuously improving the user experience.
          </p>
          <p className="text-center">
            You can contact Aditya at: <br />
            <strong>📧 Email: adityamohite4973@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
