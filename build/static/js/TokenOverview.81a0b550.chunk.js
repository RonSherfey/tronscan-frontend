(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1436:function(e,t,a){"use strict";a.d(t,"a",function(){return v});var n=a(1440),r=a.n(n),i=a(2),o=a.n(i),l=a(29),c=a(5),s=a(14),u=a(13),m=a(20),p=a(19),d=a(21),f=a(0),g=a.n(f),b=(a(3),a(16));function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}a(93);var v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).loadDatas=Object(c.a)(o.a.mark(function e(){var t,n,r,i,l=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0<l.length&&void 0!==l[0]?l[0]:1,n=1<l.length&&void 0!==l[1]?l[1]:40,r=a.state.filter,e.next=5,b.b.getTokens(w({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=w({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(w({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange&&a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props,t=e.tableData,n=(e.filterDropdownVisible,a.state.searchText),r=new RegExp(n,"gi");a.setState({filterDropdownVisible:!1,filtered:!!n,data:t.map(function(e){return e.name.match(r)?w({},e,{name:g.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(n,")|(?=").concat(n,")"),"i")).map(function(e,t){return e.toLowerCase()===n.toLowerCase()?g.a.createElement("span",{key:t,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var a={},n=[],r=!0,i=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var s=l.value;if(s.sorter&&!s.filterDropdown){var u={sorter:t(s.key)};n.push(w({},s,{},u))}else if(!s.sorter&&s.filterDropdown){var m=w({},a);n.push(w({},s,{},m))}else if(s.sorter&&s.filterDropdown){var p=w({sorter:t(s.key)},a);n.push(w({},s,{},p))}else n.push(s)}}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:w({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,i=e.column,o=e.bordered,l=e.pagination,c=void 0===l||l,s=e.scroll,u=e.Footer,m=e.locale,p=e.addr,d=e.transfers,f=e.nopadding,b=(e.contractAddress,e.isPaddingTop,this.setColumn(i)),h=c?w({total:t},this.state.pagination):c;return g.a.createElement("div",null," ",p?g.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==d?" transfer-mt-100":" transfer-pt-100")+(f?" transfer-mp-0":"")},g.a.createElement(r.a,{bordered:o,columns:b,rowKey:function(e,t){return t},dataSource:n,locale:m,scroll:s,footer:u,pagination:h,loading:a,onChange:this.handleTableChange})," "):g.a.createElement("div",{className:"card table_pos"},g.a.createElement(r.a,{bordered:o,columns:b,footer:u,rowKey:function(e,t){return t},dataSource:n,locale:m,scroll:s,pagination:h,loading:a,onChange:this.handleTableChange})," ")," ")}}]),t}(f.Component)},1438:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAolBMVEUAAAD9/f3///////////////////////////////////////////////////////////////////////////////////////////////////////////////+1tbW9vb35+fn29vbz8/Pu7u7U1NTw8PDj4+PQ0NDCwsK/v7/IyMjX19fn5+fd3d3Gxsa6urrh4eHZ2dnKysrExMTp6enMzMwjnaLvAAAAHXRSTlMA/QjdudlbT0oQzu7mtYxy4JchHBflm4tx8bTLntSLMkcAAAH3SURBVEjHxZbZeoIwEEYbC2LdcN/aMSAgICri8v6v1khiGCSCeuN/443nOzMTsnx9Kj9GV9NbhLR0rWv8VP+/Vu8QQCFavVYOmGMoZGyWQI1vUOa78UjRh4fpK0WjXyhJc1QkBllR6uIG98SwBxXpDe/6aEJlmvl+JvBEJrnpwlNpoLLuWveiwHVUI8hKmwGKtd4sr9kfrAIzk5IxErh0eQvFKg9Y2jdNHQtksMranQK4pi4QjQOOFODEruP49LTjVWpifxCOxMsHob4skPD9Y4BAAiWwX+MxGCkyBR668iJRWnECXsJ/uymykMj9ADZCYK331Ic0nRTRJSLWMeSCyJNzD3Y28OgpMs8QHsJUUnBgArQ8rRQBhIhY1OZz95mAs2KspAxhgpMUrNwTRuZFxKa26EAUSo9nXJiusgSZIAqDhLG4/YUCiZNMcOECPOSuqjCLj1cKyBkvpaFEmGDPBLI40b6R+yypjZAt6n7Lut8S+Vmijz/2vayXWAqSMIykX8tvMedCb5vXoo4QHKUgt8Vq7Vs9u4C6Dl+XtAMsEBu5eFw4/lVFqCU7wDGLh5LY5/QS+2GY2MpDCR99WBUet6qj7+UD9u+NY/z1y+LdKwln1Cy/+N69Xt+/xLHIbBeBtlmreJBoigdJ9bNn2uHPns6UPXs+lH/GLsFEEcCdEQAAAABJRU5ErkJggg=="},2030:function(e,t,a){"use strict";var n=a(272),r=(a.n(n),a(1450)),i=(a.n(r),a(14),a(13),a(20),a(19),a(21),a(0)),o=a.n(i),l=(a(3),a(100));a.n(l);o.a.Component},3458:function(e,t,a){"use strict";a.r(t);var n,r=a(268),i=a.n(r),o=a(39),l=a.n(o),c=a(2),s=a.n(c),u=a(5),m=a(14),p=a(13),d=a(20),f=a(19),g=a(21),b=a(0),h=a.n(b),w=a(28),v=a(384),x=a(11),E=a(51),y=a.n(E),k=a(3),O=a(16),C=a(389),A=a(23),N=(a(2030),a(87)),j=a(1436),T=a(4),S=a(18),_=a(52),D=a(92),M=a(68),P=a(12),R=a.n(P),L=a(8),B=a.n(L),U=a(142),I=Object(U.a)(n=function(e){function t(e){var n;Object(m.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).loadPage=Object(u.a)(s.a.mark(function e(){var t,a,r,i,o,l,c,u=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=0<u.length&&void 0!==u[0]?u[0]:1,a=1<u.length&&void 0!==u[1]?u[1]:20,r=n.state.filter,i=n.props.intl,n.setState({loading:!0}),r.name)return e.next=8,R.a.get(T.f+"/api/token?sort=rank&limit="+a+"&start="+(t-1)*a+"&status=ico&name="+r.name);e.next=11;break;case 8:o=e.sent,e.next=14;break;case 11:return e.next=13,R.a.get(T.f+"/api/token?sort=rank&limit="+a+"&start="+(t-1)*a+"&status=ico&showAll=2");case 13:o=e.sent;case 14:return l=o.data.total,0===(c=o.data.data).length&&N.toastr.warning(i.formatMessage({id:"warning"}),i.formatMessage({id:"record_not_found"})),n.setState({loading:!1,tokens:c,total:l}),e.abrupt("return",l);case 19:case"end":return e.stop()}},e)})),n.setSearch=function(){var e=l()(Object(C.a)(n.props.location,"search"));0<e.length?n.setState({filter:{name:"".concat(e)}}):n.setState({filter:{}})},n.onChange=function(e,t){n.loadPage(e,t)},n.searchName=function(e){0<e.length?n.setState({filter:{name:"%25".concat(e,"%25")}}):"#/tokens/view"!==window.location.hash?window.location.hash="#/tokens/view":n.setState({filter:{}})},n.onBuyInputChange=function(e,t,a){var r=n.props.intl;a<e&&(e=a),e=e.replace(/^0|[^\d*]/g,""),n.setState({buyAmount:e});var i=(n.buyAmount.value=e)*t;n.priceTRX.innerHTML=r.formatNumber(i,{maximumFractionDigits:6})+" TRX"},n.preBuyTokens=function(e){var t=n.state,a=(t.buyAmount,t.amount,n.props);a.currentWallet,a.wallet.isOpen?n.setState({alert:h.a.createElement(y.a,{showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},h.a.createElement("div",{className:"mt-5 token-sweet-alert",style:{textAlign:"left"}},h.a.createElement("a",{style:{float:"right",marginTop:"-45px"},onClick:function(){n.setState({alert:null})}},h.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),h.a.createElement("h5",{style:{color:"black"}},Object(k.c)("buy_token_info")),0===e.remaining&&h.a.createElement("span",null," ",Object(k.c)("no_token_to_buy")),h.a.createElement("div",{className:"input-group mt-5"},h.a.createElement("input",{type:"number",ref:function(e){return n.buyAmount=e},className:"form-control",max:e.remaining,min:1,onKeyUp:function(e){e.target.value=e.target.value.replace(/^0|[^\d*]/g,"")},onChange:function(t){n.onBuyInputChange(t.target.value,e.trxNum/e.num*Math.pow(10,e.precision)/T.K,e.remaining)}})),h.a.createElement("div",{className:"text-center mt-3 text-muted"},h.a.createElement("b",null,"= ",h.a.createElement("span",{ref:function(e){return n.priceTRX=e}},"0 TRX"))),h.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.buyTokens(e)}},Object(k.c)("participate"))))}):n.setState({alert:h.a.createElement(y.a,{info:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},h.a.createElement("div",{className:"token-sweet-alert"},h.a.createElement("a",{className:"close",onClick:function(){n.setState({alert:null})}},h.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),h.a.createElement("span",null,Object(k.c)("login_first")),h.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(k.c)("OK"))))})},n.buyTokens=function(e){var t=e.trxNum/e.num*Math.pow(10,e.precision),a=n.state.buyAmount;if(!(a<=0)){var r=n.props,i=r.currentWallet,o=(r.wallet,a*(t/T.K));i.balance/T.K<o?n.setState({alert:h.a.createElement(y.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},h.a.createElement("div",{className:"mt-5 token-sweet-alert"},h.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},h.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),h.a.createElement("span",null,Object(k.c)("not_enough_trx_message")),h.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(k.c)("confirm"))))}):n.setState({alert:h.a.createElement(y.a,{warning:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},h.a.createElement("div",{className:"mt-5 token-sweet-alert"},h.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},h.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),h.a.createElement("p",{className:"ml-auto buy_confirm_message"},Object(k.c)("buy_confirm_message_1")),h.a.createElement("span",null,a," ",e.name," ",Object(k.b)("for")," ",parseFloat((a*(t/T.K)).toFixed(6))," TRX?"),h.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.confirmTransaction(e)}},Object(k.c)("confirm"))))})}},n.submit=function(){var e=Object(u.a)(s.a.mark(function e(t){var a,r,i,o,l,c,u,m,p,d,f,g,b,h,w;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.trxNum/t.num*Math.pow(10,t.precision),r=n.props,i=r.account,o=r.currentWallet,l=n.state.buyAmount,!B.a.get("islogin")&&"ACCOUNT_LEDGER"!==n.props.walletType.type&&"ACCOUNT_TRONLINK"!==n.props.walletType.type){e.next=32;break}if(u=n.props.tronWeb(),m=n.props.account.tronWeb,e.prev=6,"ACCOUNT_LEDGER"===n.props.walletType.type)return e.next=10,u.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((l*a).toFixed(0)),n.props.walletType.address);e.next=16;break;case 10:return p=e.sent,e.next=13,Object(M.c)(p,u);case 13:d=e.sent,f=d.result,c=f;case 16:if("ACCOUNT_TRONLINK"===n.props.walletType.type)return e.next=19,m.transactionBuilder.purchaseToken(t.ownerAddress,t.id+"",parseInt((l*a).toFixed(0)),m.defaultAddress.hex).catch(function(e){return!1});e.next=25;break;case 19:return g=e.sent,e.next=22,Object(M.c)(g,m);case 22:b=e.sent,h=b.result,c=h;case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(6),console.log(e.t0);case 30:e.next=36;break;case 32:return e.next=34,O.b.participateAsset(o.address,t.ownerAddress,t.id+"",parseInt((l*a).toFixed(0)))(i.key);case 34:w=e.sent,c=w.success;case 36:if(c)return n.setState({activeToken:null,confirmedParticipate:!0,participateSuccess:c,buyAmount:0}),n.props.reloadWallet(),e.abrupt("return",!0);e.next=42;break;case 42:return e.abrupt("return",!1);case 43:case"end":return e.stop()}},e,null,[[6,27]])}));return function(t){return e.apply(this,arguments)}}(),n.confirmTransaction=function(){var e=Object(u.a)(s.a.mark(function e(t){var a,r,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props,r=a.account,i=a.intl,n.state.buyAmount,n.setState({alert:h.a.createElement(y.a,{showConfirm:!1,showCancel:!1,cancelBtnBsStyle:"default",title:i.formatMessage({id:"transferring"}),style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}})}),window.gtag("event","participate",{event_category:"Token10",event_label:t.name,referrer:window.location.origin,value:r.address}),e.next=6,n.submit(t);case 6:if(!e.sent){e.next=10;break}n.setState({alert:h.a.createElement(y.a,{success:!0,showConfirm:!1,style:{marginLeft:"-240px",marginTop:"-195px",width:"450px",height:"300px"}},h.a.createElement("div",{className:"mt-5 token-sweet-alert"},h.a.createElement("a",{style:{float:"right",marginTop:"-155px"},onClick:function(){n.setState({alert:null})}},h.a.createElement("i",{className:"fa fa-times",ariaHidden:"true"})),h.a.createElement("h5",{style:{color:"black"}},Object(k.c)("transaction")," ",Object(k.c)("confirm")),h.a.createElement("span",null,Object(k.c)("success_receive")," ",t.name," ",Object(k.c)("tokens")),h.a.createElement("button",{className:"btn btn-danger btn-block mt-3",onClick:function(){n.setState({alert:null})}},Object(k.c)("OK"))))}),e.next=11;break;case 10:n.setState({alert:h.a.createElement(y.a,{danger:!0,title:"Error",onConfirm:function(){return n.setState({alert:null})}},Object(k.c)("fail_transaction"))});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.customizedColumn=function(){var e=n.props.intl,t=a(1438);return[{title:"#",dataIndex:"index",key:"index",align:"center",className:"ant_table _text_nowrap"},{title:i()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"40%",render:function(e,a){return h.a.createElement("div",{className:"table-imgtext"},a.imgUrl?h.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},1002e3==a.id?h.a.createElement("div",{className:"token-img-top"},h.a.createElement("img",{style:{width:"42px",height:"42px"},src:a.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}}),h.a.createElement("i",null)):h.a.createElement("img",{style:{width:"42px",height:"42px"},src:a.imgUrl,onError:function(e){e.target.onerror=null,e.target.src=t}})):h.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},h.a.createElement("img",{style:{width:"42px",height:"42px"},src:t})),h.a.createElement("div",null,h.a.createElement("h5",null,h.a.createElement(A.f,{name:a.name,id:a.id,namePlus:a.name+" ("+a.abbr+")",address:a.ownerAddress})),h.a.createElement("p",{style:{wordBreak:"break-all"}},a.description)))}},{title:"ID",render:function(e,t){return h.a.createElement("div",null,t.id)},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"fund_raised"}),render:function(e,t){return h.a.createElement("div",null,h.a.createElement(x.c,{value:t.participated/T.K,maximumFractionDigits:1})," ","TRX")},align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap"},{title:e.formatMessage({id:"issue_progress"}),dataIndex:"issuedPercentage",key:"issuedPercentage",render:function(e){return null===e&&(e=0),h.a.createElement("div",null,h.a.createElement(x.c,{value:e,maximumFractionDigits:1}),"%")},align:"center",className:"ant_table d-none d-sm-table-cell _text_nowrap"},{title:e.formatMessage({id:"end_time"}),dataIndex:"endTime",key:"endTime",align:"center",className:"ant_table _text_nowrap",render:function(e,t){return h.a.createElement("div",null,h.a.createElement(x.d,{value:t.endTime,units:"day"}))}},{title:e.formatMessage({id:"issuing_price"}),render:function(e,t){return h.a.createElement("div",null,h.a.createElement(x.c,{value:t.trxNum/t.num*Math.pow(10,t.precision)/T.K,maximumFractionDigits:6})," ","TRX")},align:"center",className:"ant_table"},{title:e.formatMessage({id:"participate"}),align:"center",render:function(e,t){return t.isBlack?h.a.createElement("button",{className:"btn btn-secondary btn-block btn-sm",disabled:!0},Object(k.c)("participate")):t.endTime<new Date||100===t.issuedPercentage?h.a.createElement("span",{style:{fontWeight:"normal"}},Object(k.c)("finish")):t.startTime>new Date?h.a.createElement("span",{style:{fontWeight:"normal"}},Object(k.c)("not_started")):h.a.createElement("button",{className:"btn btn-default btn-block btn-sm",onClick:function(){return n.preBuyTokens(t)}},Object(k.c)("participate"))},className:"ant_table"}]},n.state={tokens:[],buyAmount:0,loading:!1,total:0,amount:"",filter:{}};var r=l()(Object(C.a)(e.location,"search"));return 0<r.length&&(n.state.filter.name="".concat(r)),n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.loadPage()}},{key:"componentDidUpdate",value:function(e,t){this.props.location!==e.location&&this.setSearch(),this.state.filter!==t.filter&&(console.log("SEARCH CHANGED!"),this.loadPage())}},{key:"render",value:function(){var e=this,t=this.state,a=t.tokens,n=t.alert,r=t.loading,i=t.total,o=this.props,l=(o.match,o.intl),c=this.customizedColumn(),s=l.formatMessage({id:"view_total"})+" "+(i-1)+" "+l.formatMessage({id:"view_pass"});return h.a.createElement("main",{className:"container header-overlap token_black"},n,r&&h.a.createElement("div",{className:"loading-style"},h.a.createElement(D.b,null)),h.a.createElement("div",{className:"row"},h.a.createElement("div",{className:"col-md-12 table_pos"},i?h.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},s):"",h.a.createElement(j.a,{bordered:!0,loading:r,column:c,data:a,total:i,rowClassName:"table-row",onPageChange:function(t,a){e.loadPage(t,a)}}))))}}]),t}(b.Component))||n,K={loadTokens:v.b,login:S.v,reloadWallet:_.c};t.default=Object(w.connect)(function(e){return{account:e.app.account,walletType:e.app.wallet,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},K)(Object(x.h)(I))}}]);