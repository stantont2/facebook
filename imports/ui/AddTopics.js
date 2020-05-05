import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';

/*
export default class AddTopics extends React.Component{

  processFormData(event){
    event.preventDefault()
    let newTopic = event.target.formInputNameAttribute.value;
    if (newTopic){
      event.target.formInputNameAttribute.value = ''; // clear input box
      UP_Collection_Access.insert({
        topic: newTopic,
        votes: 0,
      });

    };
  }
*/
export default class AddTopics extends React.Component{
  processForm(event){
    event.preventDefault()
    let addNewTopic = event.target.formInputNameAttribute.value;
    if (addNewTopic){
      event.target.formInputNameAttribute.value = ''; // clear input box
      UP_Collection_Access.insert({
        topic: addNewTopic,
        votes: 0,

      });

    };
  }
  render(){
    return (
      <div className='wrapper'>
      <form onSubmit={this.processForm.bind(this)}>
        <input type='text' name='formInputNameAttribute' placeholder='Whats on your mind?'/>
        <button>Add Post</button>
      </form>
      </div>
    );
  }
};
  /*render(){
    return (
      <div className='single-block-item-style'>
        <form className='form' onSubmit={this.processFormData.bind(this)}>
          <input className='form__input' type='text' name='formInputNameAttribute' placeholder='Topic Name'/>
          <button className='button'>Add Topic</button>
        </form>
      </div>
    );
  }
};
*/
