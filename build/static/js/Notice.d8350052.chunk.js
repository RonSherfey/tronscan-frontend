(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1427:function(e,t,a){"use strict";var n=a(12),c=a(11),i=a(21),r=a(20),s=a(22),l=a(0),m=a.n(l),o=a(10),u=a(372),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={time:e.time,newTime:Object(u.d)(e.time),timer:null},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.updateTime()}},{key:"updateTime",value:function(){var e=this,t=setInterval(function(){e.setState({newTime:Object(u.d)(e.props.time)})},1e3);this.setState({timer:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"render",value:function(){var e=this.state.newTime;return m.a.createElement("div",{className:"token_black table_pos"},m.a.createElement("div",null,e))}}]),t}(m.a.Component);t.a=Object(o.h)(h)},3520:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(5),r=a(12),s=a(11),l=a(21),m=a(20),o=a(22),u=a(0),h=a.n(u),d=a(10),v=a(16),p=a(252),b=a(3),f=a(372),E=a(1427),x=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={notice:[]},e}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark(function e(){var t,a,n,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.match,t.intl,a.params.id,e.next=4,v.a.getNotices({sort:"-timestamp"});case 4:n=e.sent,i=n.data,this.setState({notice:i});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.intl,a=e.match.params.id,n=this.state.notice.length>0?this.state.notice.filter(function(e){return e.id==a})[0]:{},c=n.createTime?Object(f.a)(n.createTime.replace(/\s/,"T")+"Z"):"2018-01-01T00:00:00Z",i=n.extInfo?JSON.parse(n.extInfo):[],r="";return r="zh"===t.locale?"CN":"EN",h.a.createElement("div",{className:"container header-overlap"},h.a.createElement("main",{className:"exchange"},h.a.createElement("div",{className:"exchange-box notice-box mb-2"},h.a.createElement("div",{className:"exchange-box-left"},h.a.createElement("div",{className:"exchange-list mr-2"},h.a.createElement("div",{className:"exchange-list-mark p-3"},h.a.createElement("div",{className:"exchange-box-left-title"},Object(b.c)("OthersArticle")),h.a.createElement("div",{className:"list-wrap"},this.state.notice.map(function(e){return h.a.createElement(p.a,{to:"/notice/"+e.id,repalce:"true",key:e.id,className:"list"+(a==e.id?" active":"")},e["title"+r])}))))),h.a.createElement("div",{className:"exchange-box-right"},h.a.createElement("div",{className:"exchange__kline p-3 mb-2"},h.a.createElement("div",{className:"exchange-box-right-title"},n["title"+r]),h.a.createElement("div",{className:"exchange-box-right-vice-title"},h.a.createElement("span",{className:"author"},"Poloni DEX"),h.a.createElement("div",{className:"line"}),h.a.createElement(E.a,{time:c})),h.a.createElement("div",{className:"exchange-box-right-content"},h.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:n["context"+r]}}),h.a.createElement("div",{className:"social-media"},i.map(function(e,t){return h.a.createElement("div",{key:t,className:"item"},h.a.createElement("span",null,e.method,":"),h.a.createElement("a",{href:e.link,target:"_blank"},e.link))}))))))))}}]),t}(h.a.Component);t.default=Object(d.h)(x)}}]);