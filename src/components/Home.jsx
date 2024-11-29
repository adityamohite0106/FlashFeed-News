import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      loading: true,
    };
  }

  // Fetch news data from the API when the component mounts
  componentDidMount() {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=09be1a60d34a486b9b093d1e45eb6297') // API for India news
      .then((response) => {
        this.setState({
          news: response.data.articles, // Store the news data in state
          loading: false, // Stop loading when data is fetched
        });
      })
      .catch((error) => {
        console.error('Error fetching the news:', error);
        this.setState({ loading: false }); // Stop loading even if there was an error
      });
  }

  render() {
    const { news, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>; // Show loading message while fetching data
    }

    return (
      <div className="HomePage p-5">
        <div className="row">
          {news.map((article, index) => (
            <div className="col-md-4" key={index}>
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src={article.urlToImage || 'https://via.placeholder.com/150'}
                  className="card-img-top"
                  alt={article.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a
                    href={article.url}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
