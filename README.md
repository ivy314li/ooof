## COVID-19 intelligent news feed
Fake news and biased articles are everywhere, making it hard to find credible news sources during a pandemic. We created your average person's news feed about coronavirus and used an AI called FakeBox to help identify items that might be credible. This website will rate each article on a scale of 0-10, with 0 being biased and untrustworthy and 10 being factual and impartial. It will also show you the category of articles (political content, satire, etc.) that typically come from each source. These ratings are subjective, and they only suggest bias based on language.

### Setup
This project requires npm and react boostrap. Run the following commands to install.

```
npm install npm@latest -g
npm install react-bootstrap bootstrap
```
You will also require an API key from ContextualWeb. This should go in `"YOUR KEY HERE"` in `Home.js`.

At this point, you may run the following command to run the app locally 
```
npm start
```
Right now the website will do POST requests to my personal FakeBox. In the event that it does not exist anymore, you will need to create one by yourself.


thanks for looking at my project :)
