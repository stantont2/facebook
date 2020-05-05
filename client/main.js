import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import App from './../imports/ui/App.js';


Meteor.startup(() =>  {

  Tracker.autorun(() => {

    const allPostsInDB = UP_Collection_Access.find().fetch().reverse();

        let title = 'facebook';

    ReactDOM.render(<App
        passedTitle={title}
        passedPosts={allPostsInDB}
      />, document.getElementById('content'));

  });

});
