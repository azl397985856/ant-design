'use strict';

var React = require('react');
var Tooltip = require('rc-tooltip');

module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      placement: 'top'
    };
  },
  render: function() {
    return (
      <Tooltip placement={this.props.placement}
        prefixCls="ant-tooltip"
        trigger={this.props.trigger}
        overlay={this.props.title}>
        {this.props.children}
      </Tooltip>
    );
  }
});