import React from 'react';
import PropTypes from 'prop-types';

const <%= component.className %> = () => (
  <div className="<%= style.className %>">
    Please edit <%= component.path %><%= component.fileName %> to update this component!
  </div>
);

<%= component.className %>.propTypes = {};
<%= component.className %>.defaultProps = {};

export default <%= component.className %>;
