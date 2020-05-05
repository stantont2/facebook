import React from 'react';
import RenderPost from './RenderPost.js';
import PropTypes from 'prop-types';

export default class TopicList extends React.Component {

   renderPosts(){

     return this.props.passed_posts.map((post) => {
       return <RenderPost key={post._id} post_prop_obj={post}/>
     });
   }
   render(){
     return (
       <>

         {this.renderPosts()}

       </>
     )
   }

 };


TopicList.propTypes ={
  passed_posts: PropTypes.array.isRequired,
};
