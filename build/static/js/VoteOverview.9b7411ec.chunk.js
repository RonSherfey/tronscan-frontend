(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1829:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StickyContainer=t.Sticky=void 0;var n=s(a(1901)),r=s(a(1902));function s(e){return e&&e.__esModule?e:{default:e}}t.Sticky=n.default,t.StickyContainer=r.default,t.default=n.default},1901:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),s=l(r),o=l(a(17)),c=l(a(1));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,s=Array(r),o=0;o<r;o++)s[o]=arguments[o];return a=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.state={isSticky:!1,wasSticky:!1,style:{}},n.handleContainerEvent=function(e){var t=e.distanceFromTop,a=e.distanceFromBottom,r=e.eventSource,s=n.context.getParent(),o=!1;n.props.relative&&(o=r!==s,t=-(r.scrollTop+r.offsetTop)+n.placeholder.offsetTop);var c=n.placeholder.getBoundingClientRect(),l=n.content.getBoundingClientRect().height,i=a-n.props.bottomOffset-l,u=!!n.state.isSticky,d=o?u:t<=-n.props.topOffset&&a>-n.props.bottomOffset;a=(n.props.relative?s.scrollHeight-s.scrollTop:a)-l;var m=d?{position:"fixed",top:i>0?n.props.relative?s.offsetTop-s.offsetParent.scrollTop:0:i,left:c.left,width:c.width}:{};n.props.disableHardwareAcceleration||(m.transform="translateZ(0)"),n.setState({isSticky:d,wasSticky:u,distanceFromTop:t,distanceFromBottom:a,calculatedHeight:l,style:m})},i(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n(t,[{key:"componentWillMount",value:function(){if(!this.context.subscribe)throw new TypeError("Expected Sticky to be mounted within StickyContainer");this.context.subscribe(this.handleContainerEvent)}},{key:"componentWillUnmount",value:function(){this.context.unsubscribe(this.handleContainerEvent)}},{key:"componentDidUpdate",value:function(){this.placeholder.style.paddingBottom=this.props.disableCompensation?0:(this.state.isSticky?this.state.calculatedHeight:0)+"px"}},{key:"render",value:function(){var e=this,t=s.default.cloneElement(this.props.children({isSticky:this.state.isSticky,wasSticky:this.state.wasSticky,distanceFromTop:this.state.distanceFromTop,distanceFromBottom:this.state.distanceFromBottom,calculatedHeight:this.state.calculatedHeight,style:this.state.style}),{ref:function(t){e.content=o.default.findDOMNode(t)}});return s.default.createElement("div",null,s.default.createElement("div",{ref:function(t){return e.placeholder=t}}),t)}}]),t}();u.propTypes={topOffset:c.default.number,bottomOffset:c.default.number,relative:c.default.bool,children:c.default.func.isRequired},u.defaultProps={relative:!1,topOffset:0,bottomOffset:0,disableCompensation:!1,disableHardwareAcceleration:!1},u.contextTypes={subscribe:c.default.func,unsubscribe:c.default.func,getParent:c.default.func},t.default=u},1902:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(0),o=i(s),c=i(a(1)),l=i(a(1903));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,s=Array(r),o=0;o<r;o++)s[o]=arguments[o];return a=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],n.subscribers=[],n.rafHandle=null,n.subscribe=function(e){n.subscribers=n.subscribers.concat(e)},n.unsubscribe=function(e){n.subscribers=n.subscribers.filter(function(t){return t!==e})},n.notifySubscribers=function(e){if(!n.framePending){var t=e.currentTarget;n.rafHandle=(0,l.default)(function(){n.framePending=!1;var e=n.node.getBoundingClientRect(),a=e.top,r=e.bottom;n.subscribers.forEach(function(e){return e({distanceFromTop:a,distanceFromBottom:r,eventSource:t===window?document.body:n.node})})}),n.framePending=!0}},n.getParent=function(){return n.node},u(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.PureComponent),r(t,[{key:"getChildContext",value:function(){return{subscribe:this.subscribe,unsubscribe:this.unsubscribe,getParent:this.getParent}}},{key:"componentDidMount",value:function(){var e=this;this.events.forEach(function(t){return window.addEventListener(t,e.notifySubscribers)})}},{key:"componentWillUnmount",value:function(){var e=this;this.rafHandle&&(l.default.cancel(this.rafHandle),this.rafHandle=null),this.events.forEach(function(t){return window.removeEventListener(t,e.notifySubscribers)})}},{key:"render",value:function(){var e=this;return o.default.createElement("div",n({},this.props,{ref:function(t){return e.node=t},onScroll:this.notifySubscribers,onTouchStart:this.notifySubscribers,onTouchMove:this.notifySubscribers,onTouchEnd:this.notifySubscribers}))}}]),t}();d.childContextTypes={subscribe:c.default.func,unsubscribe:c.default.func,getParent:c.default.func},t.default=d},1903:function(e,t,a){(function(t){for(var n=a(263),r="undefined"===typeof window?t:window,s=["moz","webkit"],o="AnimationFrame",c=r["request"+o],l=r["cancel"+o]||r["cancelRequest"+o],i=0;!c&&i<s.length;i++)c=r[s[i]+"Request"+o],l=r[s[i]+"Cancel"+o]||r[s[i]+"CancelRequest"+o];if(!c||!l){var u=0,d=0,m=[];c=function(e){if(0===m.length){var t=n(),a=Math.max(0,1e3/60-(t-u));u=a+t,setTimeout(function(){var e=m.slice(0);m.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(a){setTimeout(function(){throw a},0)}},Math.round(a))}return m.push({handle:++d,callback:e,cancelled:!1}),d},l=function(e){for(var t=0;t<m.length;t++)m[t].handle===e&&(m[t].cancelled=!0)}}e.exports=function(e){return c.call(r,e)},e.exports.cancel=function(){l.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=c,e.cancelAnimationFrame=l}}).call(this,a(27))},2232:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeDifference=t.zeroPad=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=c(a(0)),o=c(a(1));function c(e){return e&&e.__esModule?e:{default:e}}var l=t.zeroPad=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===t)return e;var a=String(e);return a.length>=t?a:("0".repeat(t)+a).slice(-1*t)},i=t.getTimeDifference=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.now,n=void 0===a?Date.now:a,r=t.precision,s=void 0===r?0:r,o=t.controlled,c=void 0!==o&&o,l="string"===typeof e?new Date(e):e,i=parseInt(1e3*(Math.max(0,c?l:l-n())/1e3).toFixed(Math.max(0,Math.min(20,s))),10),u=i/1e3;return{total:i,days:Math.floor(u/86400),hours:Math.floor(u/3600%24),minutes:Math.floor(u/60%60),seconds:Math.floor(u%60),milliseconds:Number((u%1*1e3).toFixed()),completed:i<=0}},u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));d.call(a);var r=a.props,s=r.date,o=r.now,c=r.precision,l=r.controlled;return a.mounted=!1,a.state=n({},i(s,{now:o,precision:c,controlled:l})),a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),r(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.props.controlled||(this.interval=setInterval(this.tick,this.props.intervalDelay))}},{key:"componentWillReceiveProps",value:function(e){var t=e.date,a=e.now,n=e.precision,r=e.controlled;this.setDeltaState(i(t,{now:a,precision:n,controlled:r}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.clearInterval()}},{key:"setDeltaState",value:function(e){!this.state.completed&&e.completed&&(this.clearInterval(),this.props.onComplete&&this.props.onComplete(e)),this.mounted&&this.setState(n({},e))}},{key:"getFormattedDelta",value:function(){var e=this.state,t=e.days,a=e.hours,n=this.state,r=n.minutes,s=n.seconds,o=this.props,c=o.daysInHours,i=o.zeroPadLength;return c?(a=l(a+24*t,i),t=null):a=l(a,Math.min(2,i)),{days:t,hours:a,minutes:l(r,Math.min(2,i)),seconds:l(s,Math.min(2,i))}}},{key:"clearInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){clearInterval(this.interval),delete this.interval})},{key:"render",value:function(){var e=this.getFormattedDelta();if(this.props.renderer)return this.props.renderer(n({},this.props,this.state,e));if(this.state.completed&&this.props.children){var t=n({},this.props,this.state,e);return delete t.children,s.default.cloneElement(this.props.children,{countdown:t})}var a=e.days,r=e.hours,o=e.minutes,c=e.seconds;return s.default.createElement("span",null,a,null!=a?":":"",r,":",o,":",c)}}]),t}(),d=function(){var e=this;this.tick=function(){var t=e.props,a=t.date,r=t.now,s=t.precision,o=t.controlled,c=t.onTick,l=i(a,{now:r,precision:s,controlled:o});e.setDeltaState(n({},l)),c&&l.total>0&&c(l)}};t.default=u,u.propTypes={date:o.default.oneOfType([o.default.instanceOf(Date),o.default.string,o.default.number]).isRequired,daysInHours:o.default.bool,zeroPadLength:o.default.number,controlled:o.default.bool,intervalDelay:o.default.number,precision:o.default.number,children:o.default.any,renderer:o.default.func,now:o.default.func,onTick:o.default.func,onComplete:o.default.func},u.defaultProps={daysInHours:!1,zeroPadLength:2,controlled:!1,intervalDelay:1e3,precision:0,children:null}},2935:function(e,t,a){var n=a(163),r=a(2936);e.exports=function(e,t){return e&&e.length?r(e,n(t,2)):0}},2936:function(e,t){e.exports=function(e,t){for(var a,n=-1,r=e.length;++n<r;){var s=t(e[n]);void 0!==s&&(a=void 0===a?s:a+s)}return a}},2937:function(e,t,a){var n=a(2938);e.exports=function(e){return n(e)&&e!=+e}},2938:function(e,t,a){var n=a(140),r=a(101),s="[object Number]";e.exports=function(e){return"number"==typeof e||r(e)&&n(e)==s}},3471:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return Q});var n,r,s=a(31),o=a(78),c=a.n(o),l=a(38),i=a.n(l),u=a(2),d=a.n(u),m=a(6),p=a(2935),f=a.n(p),v=a(2937),h=a.n(v),b=a(15),g=a(14),y=a(21),E=a(20),_=a(22),w=a(16),x=a(3),O=a(0),k=a.n(O),N=a(23),S=a(11),j=a(2232),C=a.n(j),T=a(1829),V=a(30),P=a(10),R=a(88),D=a(255),M=a(51),F=a.n(M),I=a(5),L=a(18),B=a(52),A=a(64),H=a(2509),W=a.n(H),U=a(368),z=a(312),q=a(63),K=(a(8),a(137));function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach(function(t){Object(s.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function Y(e){var t=e.value,a=e.arrow,n=void 0!==a&&a;return t>0?k.a.createElement("span",{className:"text-success"},k.a.createElement("span",{className:"mr-1"},"+",t),n&&k.a.createElement("i",{className:"fa fa-arrow-up"})):t<0?k.a.createElement("span",{className:"text-danger"},k.a.createElement("span",{className:"mr-1"},t),n&&k.a.createElement("i",{className:"fa fa-arrow-down"})):k.a.createElement("span",null,"-")}function Z(e){var t=e.type;return k.a.createElement("div",{className:"sort-wrap"},k.a.createElement("i",{className:"up ".concat("asc"==t&&"active")}),k.a.createElement("i",{className:"down ".concat("desc"==t&&"active")}))}var Q=(n=Object(V.connect)(function(e){return{account:e.app.account,tokenBalances:e.account.tokens,wallet:e.wallet,flags:e.app.flags,voteList:e.voting.voteList,voteTimer:e.voting.voteTimer,walletType:e.app.wallet,isRightText:e.app.isRightText}},{login:L.v,reloadWallet:B.c,loadVoteTimer:z.c}),Object(K.a)(r=Object(S.h)(r=Object(U.a)(r=n(r=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(y.a)(this,Object(E.a)(t).call(this))).setVote=function(t,a){var n=e.state.votes;""!==a&&(a=parseInt(a,10),(a=h()(a)?"":a)<0&&(a=0));var r=e.getVoteStatus().votesAvailable;a>(r+=n[t]||0)&&(a=r),n[t]=a,e.setState({votes:n})},e.getVoteStatus=function(){var t=e.props.wallet,a=e.state.votes,n=0;t.isOpen&&(n=t.current.frozenTrx/I.E);var r=f()(Object.values(a),function(e){return parseInt(e,10)||0}),s=n-r,o=0;return s>0?o=1:s<0&&(o=-1),0===n&&(o=-2),{trxBalance:n,votesSpend:r,votesAvailable:s,spendAll:r>0&&0===s,voteState:o,votePercentage:r/n*100}},e.enableVoting=function(){e.setState({votingEnabled:!0})},e.loadVoteList=Object(m.a)(d.a.mark(function t(){var a;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.getVotesList();case 2:a=t.sent,e.setState({votesList:a});case 4:case"end":return t.stop()}},t)})),e.loadVoteTimer=Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.props.loadVoteTimer();case 1:case"end":return t.stop()}},t)})),e.loadVotes=Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return 0===e.props.voteList.length&&e.setState({loading:!0}),t.next=4,e.loadVoteList();case 4:e.setState({loading:!1});case 5:case"end":return t.stop()}},t)})),e.loadCurrentVotes=function(){var t=Object(m.a)(d.a.mark(function t(a){var n,r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.getAccountVotes(a);case 2:n=t.sent,r=n.votes,e.setState({votes:r});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.onSearchChange=function(t){e.setState({searchCriteria:i()(t)})},e.notSignedIn=function(){e.setState({goSignedIn:!0})},e.resetVotes=function(){e.setState({votes:{}})},e.cancelVotes=function(){e.loadCurrentVotes(e.props.account.address),e.setState({votingEnabled:!1,searchCriteria:""})},e.hideModal=function(){e.setState({modal:null})},e.submitVotes=Object(m.a)(d.a.mark(function t(){var a,n,r,s,o,c,l,i,u,m,p,f,v,h,b,g,y,E,_,O,N,S;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(a=e.props.account,n=e.state.votes,e.setState({submittingVotes:!0}),s={},o=e.props.tronWeb(),c=e.props.account,l=c.tronWeb,i=c.sunWeb,u=0,m=Object.keys(n);u<m.length;u++)p=m[u],""!=n[p]&&(s[p]=parseInt(n[p],10));if(!("ACCOUNT_LEDGER"===e.props.walletType.type&&Object.keys(s).length>5)){t.next=10;break}return e.setState({votesSubmitted:!1,submittingVotes:!1,votingEnabled:!0,modal:k.a.createElement(F.a,{warning:!0,title:Object(x.c)("error"),onConfirm:e.hideModal},Object(x.c)("votes_cannot_exceed_5_SRs"))}),t.abrupt("return");case 10:if(!I.v){t.next=53;break}if("ACCOUNT_LEDGER"!==e.props.walletType.type){t.next=28;break}return t.prev=12,t.next=15,o.transactionBuilder.vote(s,a.address).catch(function(e){return!1});case 15:return f=t.sent,t.next=18,Object(q.c)(f,o);case 18:v=t.sent,h=v.result,r=h,t.next=26;break;case 23:t.prev=23,t.t0=t.catch(12),console.error("error",t.t0);case 26:t.next=51;break;case 28:if("ACCOUNT_PRIVATE_KEY"!==e.props.walletType.type){t.next=36;break}return t.next=31,w.a.voteForWitnesses(a.address,s)(a.key);case 31:b=t.sent,g=b.success,r=g,t.next=51;break;case 36:if("ACCOUNT_TRONLINK"!==e.props.walletType.type){t.next=51;break}return t.prev=37,t.next=40,l.transactionBuilder.vote(s,a.address).catch(function(e){console.error(e)});case 40:return y=t.sent,t.next=43,Object(q.c)(y,l);case 43:E=t.sent,_=E.result,r=_,t.next=51;break;case 48:t.prev=48,t.t1=t.catch(37),console.error(t.t1);case 51:t.next=68;break;case 53:if("ACCOUNT_PRIVATE_KEY"!==e.props.walletType.type&&"ACCOUNT_TRONLINK"!==e.props.walletType.type){t.next=68;break}return t.prev=54,t.next=57,i.sidechain.transactionBuilder.vote(s,a.address).catch(function(e){return!1});case 57:return O=t.sent,t.next=60,Object(q.e)(O,i);case 60:N=t.sent,S=N.result,r=S,t.next=68;break;case 65:t.prev=65,t.t2=t.catch(54),console.error(t.t2);case 68:r?(setTimeout(function(){return e.props.reloadWallet()},1200),setTimeout(function(){return e.setState({votesSubmitted:!1})},5e3),e.setState({votesSubmitted:!0,submittingVotes:!1,votingEnabled:!1,modal:k.a.createElement(F.a,{success:!0,title:Object(x.c)("submissing_vote_message_title"),onConfirm:e.hideModal},Object(x.c)("submissing_vote_message_0"),k.a.createElement("br",null),Object(x.c)("submissing_vote_message_1"))})):e.setState({votesSubmitted:!1,submittingVotes:!1,votingEnabled:!1,modal:k.a.createElement(F.a,{danger:!0,title:Object(x.c)("error"),onConfirm:e.hideModal},Object(x.c)("submitting_vote_error_message"))});case 69:case"end":return t.stop()}},t,null,[[12,23],[37,48],[54,65]])})),e.sortFun=function(t){var a=e.state,n=a.lastSort,r=a.realSort;t?e.setState({lastSort:"asc"==n?"desc":"asc",realSort:""}):e.setState({realSort:"asc"==r?"desc":"asc",lastSort:""})},e.state={privateKey:"",votingEnabled:!1,votesSubmitted:!1,submittingVotes:!1,loading:!1,votes:{},searchCriteria:"",modal:null,viewStats:!1,colors:W()("mpn65",20),votesList:{},liveVotes:null,goSignedIn:!1,lastSort:"",realSort:"asc"},e}return Object(_.a)(t,e),Object(g.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.account.isLoggedIn&&this.props.account.address!==e.account.address&&this.loadCurrentVotes(this.props.account.address)}},{key:"componentDidMount",value:function(){var e=Object(m.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this.props.account).isLoggedIn&&(this.props.reloadWallet(),this.loadCurrentVotes(t.address)),e.next=4,this.loadVotes();case 4:return e.next=6,this.loadVoteTimer();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderVoteStatus",value:function(){var e=this.getVoteStatus(),t=e.votesAvailable;switch(e.voteState){case 0:return k.a.createElement("span",{className:"text-success"},Object(x.c)("all_votes_are_used_message"));case 1:return k.a.createElement("span",null,Object(x.c)("votes_remaining_message"),":\xa0",k.a.createElement("b",null,k.a.createElement(S.c,{value:t})));case-1:return k.a.createElement("span",{className:"text-danger"},Object(x.c)("to_much_votes_massage"));case-2:return k.a.createElement("span",{className:"text-danger"},Object(x.c)("need_min_trx_to_vote_message"))}}},{key:"renderVotingBar",value:function(){var e=this,t=this.state,a=t.votingEnabled,n=t.votesSubmitted,r=t.submittingVotes,s=this.props,o=s.intl,c=s.account,l=this.getVoteStatus().trxBalance;return c.isLoggedIn?n?k.a.createElement(P.a,{color:"success",className:"text-center m-0"},Object(x.c)("thanks_submitting_vote_message")):a&&l<=0?k.a.createElement("div",{className:"text-center"},Object(x.c)("warning_votes")," ",k.a.createElement(A.a,{to:"/account",className:"text-primary"},Object(x.c)("account_page"))):r?k.a.createElement("div",{className:"d-flex justify-content-center p-3",style:{lineHeight:"36px"}},k.a.createElement(R.a,{width:160})):a?k.a.createElement("div",{className:"d-flex flex-wrap flex-sm-nowrap",style:{lineHeight:"36px"}},k.a.createElement("div",{className:"d-flex"},k.a.createElement("div",{style:{width:"35px",height:"35px",paddingLeft:"10px"}},k.a.createElement("i",{className:"fa fa-search"})),k.a.createElement("input",{style:{background:"#F3F3F3"},type:"text",className:"form-control",placeholder:o.formatMessage({id:"search"}),onChange:function(t){return e.onSearchChange(t.target.value)}})),k.a.createElement("div",{className:"ml-auto"},this.renderVoteStatus()),k.a.createElement("div",{className:"ml-2 mt-2 ml-sm-auto mt-sm-0"},k.a.createElement("button",{className:"btn btn-danger ml-auto _cancel",onClick:this.cancelVotes},Object(x.c)("cancel")),k.a.createElement("button",{className:"btn btn-warning ml-1 _reset",onClick:this.resetVotes},Object(x.c)("reset")),k.a.createElement("button",{className:"btn btn-success ml-1 _submit",onClick:this.submitVotes},Object(x.c)("submit_votes")))):k.a.createElement("div",{className:"text-center"},k.a.createElement("a",{className:"",onClick:this.enableVoting,style:{color:"#C23631"}},Object(x.c)("click_to_start_voting"))):k.a.createElement("div",{className:"text-center"},Object(x.c)("open_wallet_start_voting_message"))}},{key:"renderVotingBarFalse",value:function(){var e=this.props,t=(e.intl,e.account),a=this.state.goSignedIn;if(!t.isLoggedIn)return k.a.createElement("div",{className:"text-center"},a?k.a.createElement("span",{style:{color:"#333333"}},Object(x.c)("not_signed_in")):k.a.createElement("a",{href:"javascript:;",onClick:this.notSignedIn},Object(x.c)("click_to_start_voting")))}},{key:"getNextCycle",value:function(){return this.props.voteTimer}},{key:"render",value:function(){var e=this,t=this.state,a=t.votingEnabled,n=t.votes,r=t.votesList,s=t.loading,o=t.modal,l=t.viewStats,u=t.colors,d=t.searchCriteria,m=t.lastSort,p=t.realSort,f=this.props,v=f.wallet,h=f.isRightText,b=r.data||[],g=b.map(function(e,t){return Object.assign({rank:t},e)});""!==d&&(g=c()(b,function(e){return!(!e.address||-1===i()(e.address.toLowerCase()).indexOf(d.toLowerCase()))})),g.sort(function(e,t){return"asc"==m?e.lastRanking-t.lastRanking:"desc"==m?t.lastRanking-e.lastRanking:"asc"==p?e.realTimeRanking-t.realTimeRanking:"desc"==p?t.realTimeRanking-e.realTimeRanking:void 0});var y=r.totalVotes||0,E=r.fastestRise||{},_=this.getVoteStatus().trxBalance,w=Math.ceil(_/20);return k.a.createElement("main",{className:"container header-overlap _voteOverview"},o,k.a.createElement("div",{className:"row _badge"},k.a.createElement("div",{className:"col-md-4 mt-3 mt-md-0"},k.a.createElement("div",{className:"card h-100 text-left widget-icon bg-line_red bg-image_nextRound"},k.a.createElement("div",{className:"card-body"},k.a.createElement("h3",{className:"text-primary"},k.a.createElement(C.a,{date:this.getNextCycle(),daysInHours:!0,onComplete:function(){e.loadVotes(),e.loadVoteTimer()}})),Object(x.c)("next_round")))),k.a.createElement("div",{className:"col-md-4 mt-3 mt-md-0 position-relative"},k.a.createElement("div",{className:"card h-100 widget-icon bg-line_green bg-image_totalVotes"},k.a.createElement("div",{className:"card-body text-left"},k.a.createElement("h3",{className:"text-secondary"},k.a.createElement(S.c,{value:y})),Object(x.c)("total_votes")))),k.a.createElement("div",{className:"col-md-4 mt-3 mt-md-0"},k.a.createElement("div",{className:"card h-100 widget-icon bg-line_yellow bg-image_mostRank"},k.a.createElement("div",{className:"card-body text-left"},k.a.createElement("h3",{className:"text-success"},k.a.createElement(Y,{value:E.change_cycle,arrow:!0})),k.a.createElement("div",{className:(h?"flex-row-reverse justify-content-end":"")+" d-flex",style:{flexWrap:"wrap"}},k.a.createElement("div",{className:"_ranks mr-2",style:{whiteSpace:"nowrap"}},Object(x.c)("most_ranks")),k.a.createElement("div",{className:"",style:h?{maxWidth:"110px"}:{}},Math.abs(E.change_cycle)?k.a.createElement(N.a,{address:E.address,truncate:!1},E.name||E.url):k.a.createElement("span",{style:{color:"#999999"}},"-"))))))),s?k.a.createElement("div",{className:"card mt-2"},k.a.createElement(R.b,null,Object(x.c)("loading_super_representatives"))):k.a.createElement("div",{className:"row mt-2"},k.a.createElement("div",{className:"col-md-12"},k.a.createElement(T.StickyContainer,null,k.a.createElement("div",{className:"card mt-1"},v.isOpen&&k.a.createElement(T.Sticky,null,function(t){var a=t.style;return k.a.createElement("div",{style:J({borderBottom:"1px solid #D8D8D8",zIndex:100},a),className:"card-body bg-white p-3"},e.renderVotingBar())}),!v.isOpen&&k.a.createElement(T.Sticky,null,function(t){var a=t.style;return k.a.createElement("div",{style:J({borderBottom:"1px solid #D8D8D8",zIndex:100},a),className:"card-body bg-white p-3"},e.renderVotingBarFalse())}),k.a.createElement("div",{className:"table-responsive table-scroll"},k.a.createElement("table",{className:"table vote-table table-hover m-0"},k.a.createElement("thead",{className:"thead-light"},k.a.createElement("tr",null,k.a.createElement("th",null,Object(x.c)("name")),k.a.createElement("th",{className:"text-center",style:{width:50,cursor:"pointer",position:"relative"},onClick:function(){return e.sortFun(1)}},k.a.createElement("div",{style:{display:"flex",position:"relative"}},Object(x.c)("sr_vote_last_ranking"),k.a.createElement(Z,{type:m}))),k.a.createElement("th",{className:"text-right",style:{width:150}},Object(x.c)("sr_vote_last_votes")),k.a.createElement("th",{className:"text-right",style:{width:100}},Object(x.c)("percentage"),k.a.createElement("span",{className:"ml-2"},k.a.createElement(D.a,{placement:"top",text:"sr_vote_percent_note"}))),k.a.createElement("th",{className:"text-right",style:{width:50,cursor:"pointer",color:"#C64844",position:"relative"},onClick:function(){return e.sortFun()}},k.a.createElement("div",{style:{display:"flex",position:"relative"}},Object(x.c)("sr_vote_current_ranking"),k.a.createElement(Z,{type:p}))),k.a.createElement("th",{className:"text-right",style:{width:150,color:"#C64844"}},Object(x.c)("sr_vote_current_vote")),k.a.createElement("th",{className:"text-right",style:{width:150}},Object(x.c)("SR_voteRatio"),k.a.createElement("span",{className:"ml-2"},k.a.createElement(D.a,{placement:"top",text:"voting_brokerage_tip"}))),a&&_>0&&k.a.createElement("th",{style:{width:150}},Object(x.c)("your_vote")))),k.a.createElement("tbody",null,d.length>0&&0===g.length&&k.a.createElement("tr",null,k.a.createElement("td",{colSpan:"6",className:"p-3 text-center"},"No Super Representatives found for"," ",k.a.createElement("b",null,d))),g.map(function(t,r){return k.a.createElement("tr",{key:t.address+"_"+r},k.a.createElement("td",{className:"d-flex flex-row "},k.a.createElement("div",{className:"text-center text-sm-left",style:{minWidth:"150px",maxWidth:"300px"}},k.a.createElement("div",{className:"d-flex flex-row "},k.a.createElement("div",{style:{flex:"1"}},k.a.createElement(N.a,{address:t.address,className:"font-weight-bold"},t.name||t.url))),k.a.createElement(N.a,{className:"small text-muted",address:t.address},t.address)),!a&&t.hasPage&&k.a.createElement("div",{className:"_team ml-3"},k.a.createElement(A.a,{className:"btn btn-sm btn-block btn-default mt-1",to:"/representative/".concat(t.address)},Object(x.c)("sr_vote_team_information")))),l?k.a.createElement("th",{className:"align-middle text-center",style:{backgroundColor:"#"+u[t.rank]}},t.lastRanking):k.a.createElement("td",{className:"small align-middle text-center"},t.lastRanking),k.a.createElement("td",{className:"small text-right align-middle"},y>0&&k.a.createElement(O.Fragment,null,k.a.createElement(S.c,{value:t.lastCycleVotes}),k.a.createElement("br",null))),k.a.createElement("td",{className:"small text-right align-middle"},y>0&&k.a.createElement(O.Fragment,null,k.a.createElement(S.c,{value:t.lastCycleVotesPercentage,minimumFractionDigits:2,maximumFractionDigits:2}),"%")),k.a.createElement("td",{className:"small align-middle text-center ".concat(t.change_cycle>0&&"up"," ").concat(t.change_cycle<0&&"down")},k.a.createElement("div",null,t.realTimeRanking),0!=t.change_cycle&&k.a.createElement("div",{className:"text"},k.a.createElement(Y,{value:t.change_cycle,arrow:!0}))),k.a.createElement("td",{className:"small text-right align-middle _liveVotes ".concat(t.changeVotes>0&&"up"," ").concat(t.changeVotes<0&&"down")},y>0&&k.a.createElement(O.Fragment,null,k.a.createElement(S.c,{value:t.realTimeVotes}),k.a.createElement("br",null),t.changeVotes>0?k.a.createElement("span",{className:"text"},"+",k.a.createElement(S.c,{value:t.changeVotes})):k.a.createElement("span",{className:"text"},k.a.createElement(S.c,{value:t.changeVotes})))),k.a.createElement("td",{className:"small text-right align-middle"},k.a.createElement(O.Fragment,null,k.a.createElement("span",null,t.brokerage||0==t.brokerage?100-t.brokerage+"%":""))),a&&_>0&&k.a.createElement("td",{className:"vote-input-field"},k.a.createElement("div",{className:"input-group",style:{minWidth:"100px"}},k.a.createElement("div",{className:"input-group-prepend"},k.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return e.setVote(t.address,(n[t.address]||0)-w)},type:"button"},"-")),k.a.createElement("input",{type:"text",value:n[t.address]||"",className:"form-control text-center",style:{padding:"0 0.25rem"},onChange:function(a){return e.setVote(t.address,a.target.value)}}),k.a.createElement("div",{className:"input-group-append"},k.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){return e.setVote(t.address,(n[t.address]||0)+w)},type:"button"},"+")))))})))))))))}}]),t}(k.a.Component))||r)||r)||r)||r)}}]);