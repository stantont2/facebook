import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component{
  render(){
    return (

        <div className = 'title-bar'>
          <h1>{this.props.title}  <i class="fab fa-facebook-square"></i>

</h1>
        </div>

    );
  }

};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};
