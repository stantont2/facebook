import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import PropTypes from 'prop-types';
import fontawesome from '@fortawesome/fontawesome';
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

export default class RenderPost extends React.Component{

  render(){
    return (
      <>
      <div key={this.props.post_prop_obj._id} className ='singleItems'>
    {this.props.post_prop_obj.topic} has {this.props.post_prop_obj.votes} likes
    {''/* single space before button hack */}
    <button onClick={() => {
      UP_Collection_Access.update({_id: this.props.post_prop_obj._id}, {$inc: {votes: 1}})
    }}><i class="far fa-thumbs-up"></i></button>
    <button onClick={() => {
      UP_Collection_Access.update({_id: this.props.post_prop_obj._id}, {$inc: {votes: -1}})
    }}><i class="fas fa-thumbs-down"></i></button>
    <button onClick={() => {
      UP_Collection_Access.remove({_id: this.props.post_prop_obj._id})
    }}><i class="fas fa-trash"></i>

</button>
      </div>

      </>
    );
  }
};
RenderPost.propTypes = {
  post_prop_obj: PropTypes.object.isRequired,
};
