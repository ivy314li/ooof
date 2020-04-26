import React, { Component } from "react";
import {makeCard} from './NewsCard';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      LOADING: true
    };
  }

  async requestNews() {
    var articleList = [];
    await fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=20&q=Coronavirus&safeSearch=false", {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    		"x-rapidapi-key": "YOUR KEY HERE"
    	}
    })
    .then(response => response.json())
    .then((data) => {
      articleList = data.value;
      //this.setState({ articleList: data.value });
    })
    .catch(err => {
    	console.log(err);
    });
    //console.log("BOOP first setstate");

    var arts = articleList;
    var cardParams = [];
    for (var i = 0; i < arts.length; i += 1) {
      console.log(arts[i]);
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
                     'Accept': 'application/json'
                   },
          body: JSON.stringify({ content: arts[i].body,
                                 url: arts[i].url })
      };

      const response = await fetch('http://165.227.189.42/fakebox/check', requestOptions);
      const data = await response.json();

      var results = {
        imageUrl: arts[i].image.url,
        articleUrl: arts[i].url,
        title: arts[i].title,
        domainCat: data.domain.category,
        score: data.content.score
      }
      cardParams.push(results);
    }
    //console.log(this.state.cardParams);

    this.state.cards = cardParams.map(artData => {
      return makeCard(artData.imageUrl, artData.articleUrl, artData.title, artData.domainCat, artData.score);
    });

    this.setState({ LOADING: false });
  }

  async componentDidMount() {
    await this.requestNews();
  }

  render() {

    return (
      <div>
        <Jumbotron>
          <h1>Let machine learning find fake news about COVID-19</h1>
          <p>
            <br/>We rate coronavirus news for
            trustworthiness so you can avoid sources that tell you to inject bleach.
          </p>
        </Jumbotron>
        <React.Fragment>
          <CardDeck>
            {this.state.cards}
          </CardDeck>
        </React.Fragment>
      </div>
      );
    }
}

export default Home;
