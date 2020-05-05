import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar.js';
import AddTopics from './AddTopics.js';
import TopicList from './TopicList.js';

export default class App extends React.Component {
  render() {
    return (
      <>
      <div className='wrapper'>

        <TitleBar
        title={this.props.passedTitle}/>
       {/* wrap AddTopic and TopicList with a div that utilizes the wrapper class */}
       </div>
       <div className='wrapper'>
          <AddTopics />
          <TopicList passed_posts={this.props.passedPosts}/>
        </div>
      </>
    )
  }

};

App.propTypes = {
  passedTitle: PropTypes.string.isRequired,
  passedPosts: PropTypes.array.isRequired
};
