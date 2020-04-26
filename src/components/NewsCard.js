import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ReactHtmlParser from 'react-html-parser';

var style = {
  padding: 10,
  margin: 10,
};

export function makeCard(imageUrl, articleUrl, title, domainCat, score) {
  var status = "questionable";
  var cardColor = "warning";
  if (score > 0.7) {
    status = "unbiased";
    cardColor = "success";
  }
  if (score < 0.40) {
    status = "biased";
    cardColor = "danger";
  }
  score = score * 10;
  score = score.toFixed(2);


  if (articleUrl === "") {
    articleUrl = "https://images.freeimages.com/images/large-previews/862/latest-news-1516414.jpg";
  }

  var dict = {
    "unsure": "Unsure about source",
    "bias": "Source is known for bias",
    "clickbait": "Source is known for clickbait",
    "conspiracy": "Source is known for conspiracy",
    "credible": "Source is credible",
    "fake": "Source is known for fake news",
    "hate": "Source is known for hate",
    "junksci": "Source is known for junk science",
    "parody": "Source is known for parodies",
    "political": "Source is known for political content",
    "rumor": "Source is known for rumors",
    "satire": "Source is known for satire",
    "state": "Source is known for state",
    "trusted": "Source is credible",
    "unknown": "Source is unknown",
    "unreliable": "Source is unreliable",
    "loading": "Loading"
  }

  let sourceComment = dict[domainCat];



  return (
    <div style = { style }>
      <Card border={cardColor} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ imageUrl } />
        <Card.Body>
          <Card.Title>{ ReactHtmlParser (title) }</Card.Title>
          <Card.Link href={articleUrl}> Read More </Card.Link>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Our Evaluation: </ListGroupItem>
          <ListGroupItem>{ sourceComment }</ListGroupItem>
          <ListGroupItem>Article seems { status } ({ score })</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );

}
