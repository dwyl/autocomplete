# autocomplete

Finding words in the dictionary used to be tedious and slow!
Now, its fast, easy and fun!  
***autocomplete*** lets you ***easily find words in the english dictionary***!

[![Build Status](https://travis-ci.org/docdis/autocomplete.svg)](https://travis-ci.org/docdis/autocomplete)
[![Code Climate](https://codeclimate.com/github/docdis/autocomplete/badges/gpa.svg)](https://codeclimate.com/github/docdis/autocomplete)
[![Test Coverage](https://codeclimate.com/github/docdis/autocomplete/badges/coverage.svg)](https://codeclimate.com/github/docdis/autocomplete/coverage)
[![Dependency Status](https://david-dm.org/docdis/autocomplete.svg)](https://david-dm.org/docdis/autocomplete)
[![devDependency Status](https://david-dm.org/docdis/autocomplete/dev-status.svg)](https://david-dm.org/docdis/autocomplete#info=devDependencies)

## How to Run this project

#### Clone the repo:

```sh
git clone https://github.com/docdis/autocomplete.git && cd autocomplete
```

#### Install the node.js devDependencies:

```sh
npm install
```

#### Run the (*module*) Tests:

```sh
npm test
```

#### Run the Server:

```sh
npm run nodemon
```

## Features

### Autocomplete Module

+ [x] import a list of words into an array called words
+ [x] search through list of words for a string and return list of suggestions
+ [x] record the string that was searched for (for stats and graphs!)

### Autocomplete HTTP Server (API)

+ [ ] serve an html page with a search box
+ [ ] expose the findWords method as an API endpoint /find/:word
+ [ ] display the ***definition*** of a word when the person clicks/taps (or navigates using the keyboard arrows - for extra credits!) to their desired word
+ [ ] display the history of words people have searched for


# Goals (*in your teams of 4*)

## Pair 1

### Back end (*plumbers*)

+ [ ] create an ***endpoint*** in server.js for the format: /define/:word which uses the ac module's findWords method to lookup word suggestions and returns an array of these suggestions as the http response

In your module (index.js)
+ [ ] write a ***test*** for a new method "**define**" which will return a `callback(err, definition)` when you call it in the following way: `ac.define(word, callaback)`
+ [ ] write the `ac.define` method to **request** a word definition from Wiktionary API
  + [ ] parse the result of this API request and extract the definition
  + [ ] return the *just* the definition to the client for display in the UI when client visits url: **/define/awesome**
+ [ ] expose the **searches** property of the **ac** module url: /searches/ should return a json object which the client can interpret and display

## Pair 2

### Front end / UX (*fun zone*!)

1. [ ] Using the knowledge of QUnit for front-end TDD you gained in the last two weeks, build great user experience for searching words! (you can build ("*fake*") the front-end (*look-and-feel*) )

2. [ ] Display a stats (*searches*) of the words people have looked up in an intuitive and creative way!

### Repo Owner

+ [x] Add a ***.jshintrc*** file to your project
+ [x] learn about ***pre-commit hooks*** and add a pre-commit hook to lint
your code *before* anyone can commit (*unlinted*) code. (*code quality/consistency #FTW!*)
+ [x] Learn about ***CodeClimate***, signup using your GitHub account and add badge to repo readme.
+ [x] Learn about (*Continuous Integration*) ***Travis-CI*** and
  + [x] add .**travis.yml** to your repo
  + [x] add "***build passing***" badge to your readme
+ [x] Add **Dependencies Badge** to your readme

see: https://github.com/dwyl/repo-badges

# Stretch Goals

## Deploy to Heroku

> Ask [**@Neats29**](https://github.com/Neats29) for help if you get stuck!

## Integrate *Another API* into your results!! :open_mouth:

e.g: Search for Tweets based on the word the person looked up!
or pictures on instagram, or news articles, etc.

Figure out a creative way of displaying this content with the lookup
without making it look cluttered or out of place.
