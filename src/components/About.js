import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

var style = {
  padding: 10,
  margin: 10,
};


export class About extends Component {
    render() {
        return (
            <div style = {style}>
            <div class="jumbotron bg-secondary text-white">
              <h1>What is this?</h1>
              <p>
              <br/>Fake news and biased articles are everywhere, making it hard to find credible news sources
              during a pandemic. We created your average person's news feed about coronavirus and used an AI called FakeBox
              to help identify items that might be credible. This website will rate each article on a scale of
              0-10, with 0 being biased and untrustworthy and 10 being factual and impartial. It will also
              show you the category of articles (political content, satire, etc.) that typically come from each source.
              These ratings are subjective, and they only suggest bias based on language.
              </p>
            </div>

            <div class="jumbotron">
              <h1>How does this work?</h1>
              <p>
              <br/>We used a fake news detection AI called <a href = "https://machinebox.io/docs/fakebox"> FakeBox </a>
              to analyze our articles. While our AI can't read articles and check them against articles the same way
              a human does, it uses its knowledge of sentiment and language to judge them. Read more about how FakeBox
              works <a href = "https://towardsdatascience.com/i-trained-fake-news-detection-ai-with-95-accuracy-and-almost-went-crazy-d10589aa57c"> here. </a>
              </p>
            </div>

            <div class="jumbotron bg-secondary text-white">
              <h1>What inspired this?</h1>
              <p>
              <br/> There was a video circulating the internet of President Trump suggesting disinfectant injections
              to cure coronavirus. While mildly amusing, it highlights how prevelant misinformation is. Thus, the
              website was named don't inject bleach.
              </p>
            </div>

            <div class="jumbotron">
              <h1>Is there an option input my own articles?</h1>
              <p>
              <br/> I'm working on it...hopefully there will be soon...
              </p>
            </div>
            </div>
        );
    }
}

export default About;
