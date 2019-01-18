webpackJsonp([27],{2264:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(i),c=n(24),u=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),l(t,[{key:"render",value:function(){return s.default.createElement("main",{className:"container header-overlap news"},s.default.createElement("div",{className:"row _faq"},s.default.createElement("div",{className:"col-md-12"},s.default.createElement("div",{className:"card"},s.default.createElement("div",{className:"card-body"},s.default.createElement("h2",null,"What is token migration and Independence Day?"),s.default.createElement("p",null,"Independence Day is when TRON leaves the Ethereum network and becomes its own coin with its own network. For coins to be converted, they need to be on an exchange by June 21st. By June 24th the TRX ERC20 tokens will be converted to TRX coins and can be withdrawn from exchanges. Below is a list of some of the exchanges that support the migration."),s.default.createElement("p",null,"Bi, Bibox, BIHUEX, Binance, Bitbns, Bitfinex, Bitflip, Bitforex, Bithumb, BITKOP, BitoEX, Bitpie, Bittrex, Bit-Z www, Bixin, BJEX, CEO, COBINHOOD, Cobo, CoinBene, CoinEgg, CoinEx, Coinnest, Coinoah, CoinTiger, Cryptopia www, DragonEX, Gate.io, HitBTC, HPX, Huobi, IDAX, IDCM.IO, Indodax, Koinex, Lbank, Liqui, Livecoin, lomostar, Maincoin, Max Exchange, Mercatox, Mercatox, OEX, OkCoin-kr, OKEx, OTCBTC, Rfinex, RIGHTBTC, sistemkoin, stock.exchange, Tokenomy, Upbit, Zebpay"),s.default.createElement("h2",null,"What If my coins are not on an exchange by the June 21st deadline?"),s.default.createElement("p",null,"That is ok. Just don\u2019t move them between June 21st and June 24th. And after June 24th, they will be unusable until you convert them. Not all exchanges will support a post June 25th conversion, but some will. You will need to confirm with an exchange at that time, and then send your TRX ERC20 coins to them for migration."),s.default.createElement("h2",null,"How do I get my new TRX address and private key?"),s.default.createElement("ul",null,s.default.createElement("li",null,"Follow the step-by-step guide on how to create a wallet on Tronscan.org"," ",s.default.createElement(c.HrefLink,{href:"https://medium.com/tron-foundation/how-to-create-a-wallet-on-trons-explorer-ee9505a12615"},"https://medium.com/tron-foundation/how-to-create-a-wallet-on-trons-explorer-ee9505a12615")),s.default.createElement("li",null,"Or try an alternative wallet, recommended wallets can be found on ",s.default.createElement(c.HrefLink,{href:"https://tron.network/wallet?lng=en"},"https://tron.network/wallet"),s.default.createElement("ul",null,s.default.createElement("li",null,"Winner of the TRON Android Wallet contest. ",s.default.createElement(c.HrefLink,{href:"https://github.com/Dryec/tron-wallet-android"},"https://github.com/Dryec/tron-wallet-android")),s.default.createElement("li",null,"Winner of the TRON Chrome wallet contest. ",s.default.createElement(c.HrefLink,{href:"https://github.com/Johnsavadkuhi/tron-walletex"},"https://github.com/Johnsavadkuhi/tron-walletex")),s.default.createElement("li",null,"Winner of TRON Mac wallet contest. ",s.default.createElement(c.HrefLink,{href:"https://github.com/zx63/TronWallet"},"https://github.com/zx63/TronWallet")),s.default.createElement("li",null,"Winner of TRON Windows wallet contest. ",s.default.createElement(c.HrefLink,{href:"https://github.com/TronWatch/Desktop-Wallet"},"https://github.com/TronWatch/Desktop-Wallet")),s.default.createElement("li",null,"TRON\u2019s Wallet CLI. ",s.default.createElement(c.HrefLink,{href:"https://github.com/tronprotocol/wallet-cli"},"https://github.com/tronprotocol/wallet-cli"))))),s.default.createElement("h2",null,"Are there any support hardware wallets?"),s.default.createElement("p",null,"Ledger support is expected to be available mid-July. Trezor support is under development."),s.default.createElement("h2",null,"When can I send my new TRX coins from Exchange to my new address?"),s.default.createElement("p",null,"Not until June 25th. As a best practice with any new wallet address, it is always wise to send a small amount (a few cents) as a test transition. Once you receive the initial deposit of a few cents, you can safely send the rest."),s.default.createElement("h2",null,"What is coin freezing?"),s.default.createElement("p",null,"Freezing your TRX coins gives you two main things. TRON Power and Bandwidth. TRON power lets you vote for SR candidates and you get 1 TRON power (vote) per TRX frozen. Bandwidth lets you make transactions on the network. The more you TRX you freeze, the more transactions you can make at a cheaper price. You NEVER LOSE any TRX for freezing. You just can\u2019t unfreeze coins for 3 days, so you can\u2019t send to anyone or sell it while frozen."),s.default.createElement("h2",null,"What are the mechanics of voting?"),s.default.createElement("p",null,"Voting can be done on tronscan.org. Or by most wallets. Voting is not a one-time thing, it is forever. You can change your votes at any time, and the top 27 SR can rotate as frequently as every 6 hours. You can vote for more than one candidate as you get one vote per TRON power (frozen TRX) and can split them however you want."),s.default.createElement("p",null,"On Tronscan org, just click on the voting tab, then start voting, and add votes to each SR candidate. Then click the green submit votes button. All votes will remain casted until you change your vote or unfreeze your TRX."),s.default.createElement("p",null,"A step-by-step guide can be found at"," ",s.default.createElement(c.HrefLink,{href:"https://medium.com/tron-foundation/how-to-vote-for-super-representatives-d81d14d9743d"},"https://medium.com/tron-foundation/how-to-vote-for-super-representatives-d81d14d9743d")),s.default.createElement("h2",null,"What is a Super Representative and why would I want to vote?"),s.default.createElement("p",null,"On Independence Day, we leave the Ethereum network. The 27 SRs are the companies that are responsible to build and operate the new TRON network. Additionally, there will be 50+ stand-by SRs. TRON has set aside SR rewards in the form of TRX to pay these companies."),s.default.createElement("p",null,"The voters, can select which SRs they want, based on their contribution to the community and how they plan to spend their rewards. This gives the voters a direct say in the future of TRON, and how they would like the SRs to reinvest in TRON."),s.default.createElement("p",null,"In addition to network operations, some of the common SR plans include items like Network Growth, Marketing and Promotions, Network Security, Voter TRX rewards, User guides, Test net Operations, Voter Communication, Content and Education, dApp development"),s.default.createElement("h2",null,"Where can I learn more about SR candidates?"),s.default.createElement("p",null,"Many SR candidates have their own web pages, twitter accounts, telegram channels. However, there are two central locations for information. The first is on Tronscan.org. Click on the votes tab and you will see a list of all SR candidates. Next to each one is a link and you can open a page with information about that SR. This is a perfect place for light research, since this is also where you can vote. The second central location for SR information is at ",s.default.createElement(c.HrefLink,{href:"https://tron.live/"},"https://tron.live"),"."),s.default.createElement("h2",null,"What are full, witness and solidity nodes?"),s.default.createElement("p",null,"Nodes are servers that run the TRON blockchain software."),s.default.createElement("p",null,"There are only 27 Witness nodes, worldwide, and they are each run by independent companies. These are the nodes that take turns creating the blocks of the blockchain, while the others act as the signing witnesses. This is the process that allows trustless consensus without any authoritative third party. Because of the serious and critical nature of this function, witness node owners receive compensation."),s.default.createElement("p",null,"Full nodes are the API nodes. There will be thousands, and even tens of thousands of these around the world. These are the severs that will act as \u201cweb servers\u201d on the decentralized web. This is where smart contracts, dapps and user content is stored. However, no compensation is given to Full node owners. Some SRs will use their rewards to fund these nodes, some dapp developers will install these nodes, as will some enthusiasts."),s.default.createElement("p",null,"A solidity node only shows data from irreversible blocks. It takes time for a witness node to create a block, for other witnesses to agree to the block, and then for additional blocks to be placed on the chain. It is not until a block gets \u201cburied\u201d in the chain that it is deemed irrevocable. All transactions during this time are considered \u201cpending\u201d. It can take a block anywhere from 30 second \u2013 5 minutes to become irreversible."),s.default.createElement("p",{className:"text-center text-muted p-3"},"This FAQ was contributed by ",s.default.createElement(c.HrefLink,{href:"https://medium.com/tron-foundation/election-manifesto-of-tron-super-representative-freespace-ad20054e55fc"},"Free Space")))))))}}]),t}(i.Component);t.default=u}});