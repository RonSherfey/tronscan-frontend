webpackJsonp([33],{2574:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{account:e.app.account}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(18),s=n(0),d=o(s),f=n(53),p=n(2502),h=o(p),b=n(285),y=o(b),m=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.hideModal=function(){var t=e.props.onClose;t&&t()},e.signWithQRCode=function(){e.setState({body:d.default.createElement("div",null,d.default.createElement(h.default,{onScan:e.onCodeScan}))})},e.onCodeScan=function(t){var n=t.code;e.setState({body:d.default.createElement("div",null,d.default.createElement("h1",null,n))})},e.state={body:null},e}return l(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this.props.transaction;this.setState({body:d.default.createElement("div",{className:"text-center"},d.default.createElement(y.default,{size:512,style:{width:"100%",height:"auto"},value:e}),d.default.createElement("br",null),d.default.createElement("button",{className:"btn btn-primary",onClick:this.signWithQRCode},"Sign with QR Code"))})}},{key:"render",value:function(){var e=this.state.body;this.props.transaction;return d.default.createElement(f.Modal,{isOpen:!0,toggle:this.hideModal,fade:!1,className:"modal-dialog-centered"},d.default.createElement(f.ModalHeader,{className:"text-center",toggle:this.hideModal},"Sign Transaction"),d.default.createElement(f.ModalBody,null,e))}}]),t}(d.default.Component),v={};t.default=(0,i.connect)(u,v)(m)}});