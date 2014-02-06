
var _ = require('underscore');

// Sample data
// Source: https://news.ycombinator.com

var comments = [
  {
    id: 1,
    postid: 1,
    body: "Interesting; I ran essentially the exact same experiment a while back (June to August 2012) and had a different conclusion!"
  },
  {
    id: 2,
    postid: 1,
    body: "As a 'client' (although small one) I can confirm this. I've been outsourcing some work, and when I was trying to collect offers from various professionals you definitely had two distinct kinds of actors."
  },
  {
    id: 3,
    postid: 1,
    body: "Good writing. When we say 'Let me know how I can help', we are asking the other person to do work because then they have to think about what/how they need help with. Most of the times, people are lazy and you might be surprised but the fact is that they don't want to do work even for their own requirements. Instead, They want to hear solutions."
  },
  {
    id: 4,
    postid: 2,
    body: "Ugh. 'I'm going to fixate on this one word, get completely pedantic about the semantics of the word and use it as the basis of my argument.'"
  },
  {
    id: 5,
    postid: 2,
    body: "Software recruiting seems designed to produce one of two goals: 1. Repeatedly break your heart, or 2. Turn you into a psychopath you can fake the passion and interest and dedication that companies demand at the very first step of the interview, when they know they flush out 90% of the people at that stage."
  },
  {
    id: 6,
    postid: 3,
    body: "Small, somewhat nit-picky critique: the man pages for system calls are in section 2. If you want to see the docs for the 'read()' syscall, and not the bash builtin 'read', saying 'man read' w̶o̶n̶'̶t̶ may not (see follow-up) do what you expect."
  },
  {
    id: 7,
    postid: 3,
    body: "You can use Process monitor http://technet.microsoft.com/en-us/sysinternals/bb896645.asp... to see a similar overview of low level activity. You won't see all the system calls, you can't pipe the output directly, but there is a UI and you don't have to look up file descriptors"
  },
  {
    id: 8,
    postid: 4,
    body: "This looks nice, but there are a lot of sugar libraries over the webdriver protocol, its the smallest part of the problem of real browser testing but it has lots of solutions, the real problems have almost 0 choice."
  },
  {
    id: 9,
    postid: 4,
    body: "We're having great success doing our integration tests without using Selenium. At http://clara.io, our app is a fairly typical client-side Backbone.js app, so our integration tests can use standard backbone, mocha and jQuery constructs. Instead of using selenium, we use contructs like on('show')."
  },
  {
    id: 10,
    postid: 4,
    body: "Can anyone point me to a list of the various tools that automate web browsing (typically for automated testing) and the various layers of abstraction built on top of them?"
  },
  {
    id: 11,
    postid: 4,
    body: "Looks similar to Angular's Protractor, but with more conventional (and easier to understand) syntax. Seems too easy not to try."
  },
  {
    id: 12,
    postid: 6,
    body: "Elon Musk is missing from the famous photo (http://victorstuff.com/wp-content/uploads/2013/09/paypal.jpg) because he received an innovator of the year award in Chicago at the same time as when the picture was taken."
  },
  {
    id: 13,
    postid: 6,
    body: "I'm reminded of the Traitorous Eight too. Many times the restrictions placed on creative technologists can act as the fuse that triggers immense amounts of creativity when it is unleashed."
  },
  {
    id: 14,
    postid: 6,
    body: "But I thought Silicon Valley was a meritocracy where connections didn't matter!! [/troll]"
  },
  {
    id: 15,
    postid: 7,
    body: "No, please no. If size is an issue for some reason or you want to have no dependencies you can use something like http://zeptojs.com/ and just embed everything in one minified file. If you do things right only the functions you are actually using will get placed in there as well."
  },
  {
    id: 16,
    postid: 7,
    body: "The premise of the examples list seems a bit disingenuous. Very few of these things take into account the full convenience of jQuery. It's much more than saving a couple lines of code or knowing the native way to accomplish the most basic version of a task. jQuery's real benefit is preserving simplicity as your needs grow more complex."
  },
  {
    id: 17,
    postid: 7,
    body: "I implore all developers to learn native Javascript methods, because I strongly believe jQuery has created a generation of developers who know the library but not the language. You'd be surprised how many developers I've come across think iterating over an object or array requires Javascript and how many people don't know how to write a simple for or while loop in Javascript. jQuery is a fantastic library, but it is by no means a cure-all for Javascript problems."
  }
];

// You can implement your module.exports here

module.exports = {
  all: function() {
    return comments;
  },
  find: function(id) {
    return comments[id];
  },
  allForPost: function(pid) {
    return _.select(comments, function(comment) {
      return comment.postid == pid;
    });
  }
};