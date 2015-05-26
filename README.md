# autocomplete

Easily find words in the english dictionary

[![Build Status](https://travis-ci.org/docdis/autocomplete.svg)](https://travis-ci.org/docdis/autocomplete)
[![Code Climate](https://codeclimate.com/github/docdis/autocomplete/badges/gpa.svg)](https://codeclimate.com/github/docdis/autocomplete)

## Features

### Autocomplete Module

+ [x] import a list of words into an array called words
+ [x] search through list of words for a string and return list of suggestions
+ [x] record the string that was searched for (for stats and graphs!)

### Autocomplete HTTP Server (API)

+ [ ] serve an html page with a search box
+ [ ] expose the findWords method as an API endpoint /find/:word


## Stretch Goals!

### Backend

+ [ ] create an ***endpoint*** in server.js for the format: /define/:word
+ [ ] in your module (index.js)
+ [ ] write a method to **request** a word definition from Wiktionary API
  + [ ] parse the result of this API request and extract the definition
  + [ ] return the *just* the definition to the client for display in the UI when client visits url: **/define/awesome**
+ [ ] expose the **searches** property of the **ac** module url: /searches/ should return a json object which the client can interpret and display

### Front End / UX

1. [ ] Using the knowledge of QUnit for front-end TDD you gained in the last two weeks, build great user experience for searching words! *go*!

2. [ ] Display a stats (*searches*) of the words people have looked up in an intuitive and creative way!

### Repo Owner

+ [x] Add a ***.jshintrc*** file to your project and a ***pre-commit hook*** to lint
your code *before* you can commit (*unlinted*) code. (*code quality/consistency #FTW!*)
+ [x] Learn about ***CodeClimate***, signup using your GitHub account and add badge to repo readme.
+ [x] Learn about (*Continuous Integration*) ***Travis-CI*** and
  + [x] add .**travis.yml** to your repo
  + [x] add "***build passing***" badge to your readme

see: https://github.com/dwyl/repo-badges
