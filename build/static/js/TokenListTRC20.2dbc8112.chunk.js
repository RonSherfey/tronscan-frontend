(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1398:function(e,t,a){"use strict";a.d(t,"a",function(){return C});var n=a(1405),r=a.n(n),o=a(55),c=a.n(o),l=a(262),s=a.n(l),i=a(1395),d=a.n(i),u=a(2),p=a.n(u),m=a(25),f=a(5),g=a(12),h=a(11),b=a(21),v=a(20),_=a(22),E=a(0),w=a.n(E),y=a(3),x=a(16);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var C=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(b.a)(this,Object(v.a)(t).call(this,e))).loadDatas=Object(f.a)(p.a.mark(function e(){var t,n,r,o,c=arguments;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,n=c.length>1&&void 0!==c[1]?c[1]:40,r=a.state.filter,e.next=5,x.a.getTokens(O({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=O({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(O({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props.tableData,t=a.state.searchText,n=new RegExp(t,"gi");a.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(n)?O({},e,{name:w.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,a){return e.toLowerCase()===t.toLowerCase()?w.a.createElement("span",{key:a,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var n={filterDropdown:w.a.createElement("div",{className:"custom-filter-dropdown"},w.a.createElement(d.a,{ref:function(e){return a.searchInput=e},placeholder:"Search name",value:a.state.searchText,onChange:a.onInputChange,onPressEnter:a.onSearch})," ",w.a.createElement(s.a,{type:"primary",onClick:a.onSearch}," ",Object(y.c)("search")," ")," ",w.a.createElement(s.a,{className:"btn-secondary ml-1",onClick:a.onReset}," ",Object(y.c)("reset")," ")," "),filterIcon:w.a.createElement(c.a,{type:"filter",style:{color:a.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:a.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){a.setState({filterDropdownVisible:e},function(){a.searchInput&&a.searchInput.focus()})}},r=[],o=!0,l=!1,i=void 0;try{for(var u,p=e[Symbol.iterator]();!(o=(u=p.next()).done);o=!0){var m=u.value;if(m.sorter&&!m.filterDropdown){var f={sorter:t(m.key)};r.push(O({},m,{},f))}else if(!m.sorter&&m.filterDropdown){var g=O({},n);r.push(O({},m,{},g))}else if(m.sorter&&m.filterDropdown){var h=O({sorter:t(m.key)},n);r.push(O({},m,{},h))}else r.push(m)}}catch(b){l=!0,i=b}finally{try{o||null==p.return||p.return()}finally{if(l)throw i}}return r},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(_.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:O({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,o=e.column,c=e.bordered,l=e.pagination,s=void 0===l||l,i=e.scroll,d=e.Footer,u=e.locale,p=e.addr,m=e.transfers,f=(e.contractAddress,e.isPaddingTop,this.setColumn(o)),g=s?O({total:t},this.state.pagination):s;return w.a.createElement("div",null," ",p?w.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==m?" transfer-mt-100":" transfer-pt-100")},w.a.createElement(r.a,{bordered:c,columns:f,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,footer:d,pagination:g,loading:a,onChange:this.handleTableChange})," "):w.a.createElement("div",{className:"card table_pos"},w.a.createElement(r.a,{bordered:c,columns:f,footer:d,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:i,pagination:g,loading:a,onChange:this.handleTableChange})," ")," ")}}]),t}(E.Component)},1399:function(e,t,a){e.exports=a.p+"static/media/logo_default.22fc28d0.png"},1763:function(e,t,a){var n=a(116);e.exports=function(e){return n(e).toLowerCase()}},1843:function(e,t,a){"use strict";var n=a(262),r=a.n(n),o=a(1395),c=a.n(o),l=a(12),s=a(11),i=a(21),d=a(20),u=a(22),p=a(0),m=a.n(p),f=a(3),g=a(96),h=a.n(g);m.a.Component},3507:function(e,t,a){"use strict";a.r(t);var n=a(1763),r=a.n(n),o=a(260),c=a.n(o),l=a(39),s=a.n(l),i=a(2),d=a.n(i),u=a(5),p=a(12),m=a(11),f=a(21),g=a(20),h=a(22),b=a(0),v=a.n(b),_=a(31),E=a(374),w=a(10),y=(a(51),a(3)),x=(a(16),a(23)),k=a(376),O=(a(1843),a(84),a(1398)),C=a(6),S=a(19),j=a(52),D=a(90),P=a(252),N=a(15),T=a.n(N),I=function(e){function t(e){var n;Object(p.a)(this,t),(n=Object(f.a)(this,Object(g.a)(t).call(this,e))).loadPage=Object(u.a)(d.a.mark(function e(){var t,a,r,o,c,l,s=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.length>0&&void 0!==s[0]?s[0]:1,a=s.length>1&&void 0!==s[1]?s[1]:20,r=n.state.filter,n.props.intl,n.setState({loading:!0}),!r.name){e.next=12;break}return e.next=8,T.a.get(C.e+"/api/token_trc20?sort=issue_time&limit="+a+"&start="+(t-1)*a+"&name="+r.name);case 8:o=e.sent,c=o.data.trc20_tokens.length,e.next=16;break;case 12:return e.next=14,T.a.get(C.e+"/api/token_trc20?sort=issue_time&limit="+a+"&start="+(t-1)*a);case 14:o=e.sent,c=o.data.total;case 16:return(l=o.data.trc20_tokens).map(function(e,n){e.index=n+1+(t-1)*a}),n.setState({loading:!1,tokens:l,total:c,page:t}),n.addIEOClass(),e.abrupt("return",c);case 21:case"end":return e.stop()}},e)})),n.setSearch=function(){var e=s()(Object(k.a)(n.props.location,"search"));e.length>0?n.setState({filter:{name:"%25".concat(e,"%25")}}):n.setState({filter:{}})},n.addIEOClass=function(){var e=n.state.page,t=document.querySelector(".ant-table-tbody").firstElementChild;1==e?t.classList.add("trc20-star-ad"):t.classList.remove("trc20-star-ad"),document.querySelector(".trc20-star-ad")&&document.querySelector(".trc20-star-ad").addEventListener("click",function(){window.open("http://www.tronace.com")})},n.onChange=function(e,t){n.loadPage(e,t)},n.customizedColumn=function(){var e=n.props.intl,t=n.state.contractAddress,o=a(1399);return[{title:"#",dataIndex:"index",key:"index",width:"48px",align:"center",className:"ant_table _text_nowrap",render:function(e,a,n){return v.a.createElement("span",null,a.contract_address==t?v.a.createElement("div",null,v.a.createElement("span",{className:"starbeat"},v.a.createElement("i",{className:"fas fa-star"})," "),v.a.createElement("span",{className:"star-tip"})):v.a.createElement("span",null,e-1))}},{title:c()(e.formatMessage({id:"token"})),dataIndex:"name",key:"name",width:"50%",render:function(e,t,a){return v.a.createElement("div",{className:"table-imgtext"},t.icon_url?v.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},v.a.createElement("img",{style:{width:"42px",height:"42px"},src:t.icon_url,onError:function(e){e.target.onerror=null,e.target.src=o}})):v.a.createElement("div",{style:{width:"42px",height:"42px",marginRight:"18px"}},v.a.createElement("img",{style:{width:"42px",height:"42px"},src:o})),v.a.createElement("div",null,v.a.createElement("h5",null,v.a.createElement(x.g,{name:t.name,namePlus:t.name+" ("+t.symbol+")",address:t.contract_address})),v.a.createElement("p",null,t.token_desc)))}},{title:e.formatMessage({id:"market_capitalization"}),align:"center",className:"ant_table d-none d-md-table-cell _text_nowrap",render:function(e,t,a){return v.a.createElement("div",null,t.price&&t.total_supply_with_decimals?v.a.createElement("div",null,v.a.createElement(w.c,{value:t.total_supply_with_decimals*t.price,maximumFractionDigits:1})," ","TRX"):v.a.createElement("span",{style:{color:"#666666"}},"-"))}},{title:e.formatMessage({id:"pice_per_onetrx"}),dataIndex:"pice_per_onetrx",key:"pice_per_onetrx",align:"center",className:"ant_table",render:function(e,t,a){r()(e);return v.a.createElement("div",null,t.price?v.a.createElement("div",null,v.a.createElement(w.c,{value:t.price,maximumFractionDigits:1})," ","TRX"):v.a.createElement("span",{style:{color:"#666666"}},"-"))}},{title:e.formatMessage({id:"total_tokens"}),dataIndex:"total_supply_with_decimals",key:"total_supply",render:function(e,t,a){return null===e&&(e=0),v.a.createElement("div",null,v.a.createElement(w.c,{value:t.total_supply_with_decimals/Math.pow(10,t.decimals),maximumFractionDigits:1}))},align:"center",className:"ant_table _text_nowrap"},{title:e.formatMessage({id:"contract_address"}),dataIndex:"contract_address",key:"contract_address",render:function(e,t,a){return v.a.createElement(x.a,{address:t.contract_address,isContract:!0})},align:"center",className:"ant_table"}]},n.state={tokens:[],buyAmount:0,loading:!1,total:0,filter:{},page:1,contractAddress:"TB2SqC48afC9FX36bPQQHatoKo5m79JXKL"};var o=s()(Object(k.a)(e.location,"search"));return o.length>0&&(n.state.filter.name="%25".concat(o,"%25")),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.loadPage(),setTimeout(function(){e.addIEOClass()},1e3)}},{key:"componentDidUpdate",value:function(e,t){}},{key:"render",value:function(){var e=this,t=this.state,a=t.tokens,n=(t.alert,t.loading),r=t.total,o=t.contractAddress,c=this.props,l=(c.match,c.intl),s=this.customizedColumn(),i=l.formatMessage({id:"part_total"})+" "+r+" "+l.formatMessage({id:"part_pass"});return v.a.createElement("main",{className:"container header-overlap token_black trc20-ad-bg"},n&&v.a.createElement("div",{className:"loading-style"},v.a.createElement(D.b,null)),v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-md-12 table_pos"},r?v.a.createElement("div",{className:"table_pos_info d-none d-md-block d-flex",style:{left:"auto"}},i," \xa0\xa0",v.a.createElement(P.a,{to:"/exchange/trc20"},Object(y.b)("Trade_on_Poloni DEX"),">")):"",v.a.createElement("a",{className:"apply-trc20",href:"https://goo.gl/forms/PiyLiDeaXv3uesSE3",target:"_blank",style:{color:"#C23631"}},v.a.createElement("button",{className:"btn btn-danger"},Object(y.c)("application_entry"))),v.a.createElement(O.a,{bordered:!0,loading:n,column:s,data:a,total:r,contractAddress:o,onPageChange:function(t,a){e.loadPage(t,a)}}))))}}]),t}(b.Component);var M={loadTokens:E.b,login:S.v,reloadWallet:j.c};t.default=Object(_.connect)(function(e){return{account:e.app.account,tokens:e.tokens.tokens,wallet:e.wallet,currentWallet:e.wallet.current}},M)(Object(w.h)(I))}}]);