import React from 'react';

const <%= component.className %> = () => (
  <div className="<%= style.className %>">
    Please edit <%= component.path %><%= component.fileName %> to update this component!
  </div>
);

<%= component.className %>.propTypes = {};
<%= component.className %>.defaultProps = {};

export default <%= component.className %>;
