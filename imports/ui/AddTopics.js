import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';

export default class AddTopics extends React.Component{

  processForm(event){

    event.preventDefault()
    let addTopic = event.target.formInput.value;
    if (addTopic){
      event.target.formInput.value = '';
      UP_Collection_Access.insert({
        topic: addTopic,
        votes: 0,

      });

    };
  }
  render(){
    return (
      <div className='wrapper'>
      <form onSubmit={this.processForm.bind(this)}>
        <input type='text' name='formInput' placeholder='Whats on your mind?'/>
        <button>Add Post</button>
      </form>
      </div>
    );

  }
};
