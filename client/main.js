import React from 'react'; // specify the module and then specify the library name
                            // meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import App from './../imports/ui/App.js';


Meteor.startup(() =>  {

  Tracker.autorun(() => {

    const allPostsInDB = UP_Collection_Access.find().fetch().reverse();

        let title = 'facebook';

    ReactDOM.render(<App
        passedPropTitle={title}
        passedPropAllPosts={allPostsInDB}
      />, document.getElementById('content'));

  });

});
