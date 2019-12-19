import React, { Fragment } from "react";
import { Client } from "../../../services/api";
import { AddressLink, TransactionHashLink } from "../../common/Links";
import { TRXPrice } from "../../common/Price";
import { API_URL, ONE_TRX } from "../../../constants";
import { tu, t } from "../../../utils/i18n";
// import TimeAgo from "react-timeago";
import moment from "moment";
import { Icon, Tooltip } from "antd";
import { Truncate } from "../../common/text";
import { withTimers } from "../../../utils/timing";
import {
  FormattedNumber,
  injectIntl,
  FormattedDate,
  FormattedTime
} from "react-intl";
import { connect } from "react-redux";
import { updateTokenInfo } from "../../../actions/tokenInfo";
import SmartTable from "../../common/SmartTable";
import { upperFirst } from "lodash";
import { TronLoader } from "../../common/loaders";
import xhr from "axios/index";
import { NameWithId } from "../../common/names";
import TotalInfo from "../components/TableTotal";
import DateSelect from "../components/dateSelect";
import rebuildList from "../../../utils/rebuildList";
import qs from "qs";
import BlockTime from "../../common/blockTime";

class Transfers extends React.Component {
  constructor(props) {
    super(props);

    this.start = moment([2018, 5, 25])
      .startOf("day")
      .valueOf();
    this.end = moment().valueOf();
    this.state = {
      filter: {},
      transfers: [],
      page: 1,
      total: 0,
      pageSize: 20,
      showTotal: props.showTotal !== false,
      emptyState: props.emptyState,
      autoRefresh: props.autoRefresh || false,
      searchStatus: false,
      timeType: true
    };
  }

  componentDidMount() {
    this.loadPage();
    if (this.state.autoRefresh !== false) {
      this.props.setInterval(() => this.load(), this.state.autoRefresh);
    }
  }

  onChange = (page, pageSize) => {
    this.loadPage(page, pageSize);
  };

  loadPage = async (page = 1, pageSize = 20) => {
    let { filter, getCsvUrl } = this.props;
    let { showTotal } = this.state;
    const params = {
      name: filter.token,
      issueAddress: filter.address,
      start_timestamp: this.start,
      end_timestamp: this.end
    };

    this.setState({
      loading: true,
      page: page,
      pageSize: pageSize
    });

    const query = qs.stringify({
      format: "csv",
      ...params
    });
    getCsvUrl(`${API_URL}/api/asset/transfer?${query}`);

    try {
      const allData = await Promise.all([
        Client.getAssetTransfers({
          limit: pageSize,
          start: (page - 1) * pageSize,
          ...params
        }),
        Client.getCountByType({
          type: "asset",
          issueName: filter.address
        })
      ]).catch(e => {
        console.log("error:" + e);
      });
      const [{ list, total, rangeTotal }, { count }] = allData;

      let transfers = rebuildList(list, "tokenName", "amount");

      for (let index in transfers) {
        transfers[index].index = parseInt(index) + 1;
      }

      this.setState({
        page,
        transfers,
        total: count,
        rangeTotal,
        loading: false
      });
      this.props.updateTokenInfo({
        transfersListObj: {
          page,
          transfers,
          total: count,
          rangeTotal
        }
      });
    } catch (e) {
      console.log("error:" + e);
    }
  };

  customizedColumn = () => {
    let { intl } = this.props;
    let { timeType } = this.state;
    let column = [
      {
        title: upperFirst(
          intl.formatMessage({
            id: "hash"
          })
        ),
        dataIndex: "transactionHash",
        key: "transactionHash",
        className: "ant_table",
        width: "150px",
        render: (text, record, index) => {
          return (
            <Truncate>
              <TransactionHashLink hash={record.transactionHash}>
                {record.transactionHash}
              </TransactionHashLink>
            </Truncate>
          );
        }
      },
      {
        title: (
          <span
            className="token-change-type"
            onClick={this.changeType.bind(this)}
          >
            {upperFirst(
              intl.formatMessage({
                id: timeType ? "age" : "trc20_cur_order_header_order_time"
              })
            )}
            <Icon type="retweet" style={{ verticalAlign: 0, marginLeft: 10 }} />
          </span>
        ),
        dataIndex: "timestamp",
        key: "timestamp",
        width: "180px",
        className: "ant_table",
        render: (text, record, index) => {
          return (
            <div>
              {timeType ? (
                <BlockTime time={Number(record.timestamp)}> </BlockTime>
              ) : (
                <span className="">
                  <FormattedDate value={record.timestamp} />
                  <FormattedTime
                    value={record.timestamp}
                    hour="numeric"
                    minute="numeric"
                    second="numeric"
                    hour12={false}
                  />
                </span>
              )}
            </div>
          );
          // <TimeAgo date={Number(record.timestamp)} title={moment(record.block_ts).format("MMM-DD-YYYY HH:mm:ss A")}/>
        }
      },
      {
        title: upperFirst(
          intl.formatMessage({
            id: "from"
          })
        ),
        align: "center",
        dataIndex: "transferFromAddress",
        key: "transferFromAddress",
        className: "ant_table",
        width: "160px",
        render: (text, record, index) => {
          return (
            <AddressLink address={record.transferFromAddress}>
              {record.fromAddressIsContract ? (
                <Tooltip
                  placement="top"
                  title={upperFirst(
                    intl.formatMessage({
                      id: "transfersDetailContractAddress"
                    })
                  )}
                >
                  <Icon
                    type="file-text"
                    style={{ marginRight: 2, verticalAlign: 0 }}
                  />
                </Tooltip>
              ) : null}
              {`${record.transferFromAddress.slice(
                0,
                5
              )}...${record.transferFromAddress.slice(-5)}`}
            </AddressLink>
          );
        }
      },
      {
        title: "",
        className: "ant_table",
        width: "30px",
        render: (text, record, index) => {
          return <img src={require("../../../images/arrow.png")} />;
        }
      },
      {
        title: upperFirst(
          intl.formatMessage({
            id: "to"
          })
        ),
        dataIndex: "transferToAddress",
        key: "transferToAddress",
        className: "ant_table",
        width: "160px",
        align: "center",
        render: (text, record, index) => {
          return (
            <AddressLink address={record.transferToAddress}>
              {record.fromAddressIsContract ? (
                <Tooltip
                  placement="top"
                  title={upperFirst(
                    intl.formatMessage({
                      id: "transfersDetailContractAddress"
                    })
                  )}
                >
                  <Icon
                    type="file-text"
                    style={{ marginRight: 2, verticalAlign: 0 }}
                  />
                </Tooltip>
              ) : null}
              {`${record.transferToAddress.slice(
                0,
                5
              )}...${record.transferToAddress.slice(-5)}`}
            </AddressLink>
          );
        }
      },
      {
        title: upperFirst(
          intl.formatMessage({
            id: "FinalResult"
          })
        ),
        dataIndex: "contractRet",
        key: "contractRet",
        className: "ant_table"
      },
      {
        title: upperFirst(
          intl.formatMessage({
            id: "amount"
          })
        ),
        dataIndex: "amount",
        key: "amount",
        width: "200px",
        align: "right",
        className: "ant_table",
        render: (text, record, index) => {
          return <NameWithId value={record} br />;
        }
      }
    ];

    return column;
  };

  changeType() {
    let { timeType } = this.state;

    this.setState({
      timeType: !timeType
    });
  }

  onDateOk(start, end) {
    this.start = start.valueOf();
    this.end = end.valueOf();
    let { page, pageSize } = this.state;
    this.loadPage(page, pageSize);
  }

  render() {
    let {
      pageSize,
      loading,
      emptyState: EmptyState = null,
      searchStatus
    } = this.state;
    let {
      transfers,
      page,
      total,
      rangeTotal
    } = this.props.tokensInfo.transfersListObj;

    const listCommonSty = {
      textAlign: "center",
      width: "25%",
      paddingTop: "20px"
    };
    const descStyle = {
      fontFamily: "HelveticaNeue",
      fontSize: "12px",
      color: "#999999"
    };
    const listTitleStyle = {
      fontFamily: "HelveticaNeue-Medium",
      fontSize: "18px",
      color: "#333333"
    };
    let { theadClass = "thead-dark", intl, tokensInfo, priceUSD } = this.props;
    let column = this.customizedColumn();
    let tableInfo =
      intl.formatMessage({
        id: "a_totle"
      }) +
      " " +
      total +
      " " +
      intl.formatMessage({
        id: "transaction_info"
      });

    // if (!loading && transfers.length === 0) {
    //   if (!EmptyState) {
    //     return (
    //         <div className="p-3 text-center no-data">{tu("no_transfers")}</div>
    //     );
    //   }
    //   return <EmptyState/>;
    // }

    return (
      <Fragment>
        {loading && (
          <div
            className="loading-style"
            style={{
              marginTop: "-20px"
            }}
          >
            <TronLoader />
          </div>
        )}
        <div className="row transfers">
          <div className="col-md-12 table_pos">
            {tokensInfo.transferSearchStatus ? (
              <div
                style={{
                  display: "flex",
                  background: "#fff",
                  borderBottom: "1px solid #EEEEEE"
                }}
                className="pt-3 pb-3"
              >
                <div style={listCommonSty}>
                  <div
                    style={{
                      fontFamily: "HelveticaNeue-Medium",
                      fontSize: "18px",
                      color: "#C64844"
                    }}
                  >
                    {tokensInfo.transfer.holder_address
                      ? `${tokensInfo.transfer.holder_address.substring(
                          0,
                          7
                        )}...${tokensInfo.transfer.holder_address.slice(-7)}`
                      : null}
                  </div>
                  <p style={descStyle}> {tu("transfersDetailHolder")} </p>
                </div>
                <div style={listCommonSty}>
                  <div style={listTitleStyle}>
                    {(tokensInfo.transfer.balance / Math.pow(10, 6)).toFixed(6)}
                    TRX
                  </div>
                  <p style={descStyle}> {tu("transfersDetailQuantity")} </p>
                </div>
                <div style={listCommonSty}>
                  <div style={listTitleStyle}>
                    <FormattedNumber
                      value={tokensInfo.transfer.accountedFor * 100}
                      maximumFractionDigits={6}
                    ></FormattedNumber>
                    %
                  </div>
                  <p style={descStyle}> {tu("transfersDetailPercentage")} </p>
                </div>
                <div style={listCommonSty}>
                  <div style={listTitleStyle}>
                    $
                    {(
                      (tokensInfo.transfer.balance / Math.pow(10, 6)) *
                      priceUSD
                    ).toFixed(0)}
                    <span
                      style={{
                        color: "rgba(51,51,51,0.25)",
                        fontSize: "14px"
                      }}
                    >
                      ≈
                      {(tokensInfo.transfer.balance / Math.pow(10, 6)).toFixed(
                        0
                      )}
                      TRX
                    </span>
                  </div>
                  <p style={descStyle}> {tu("transfersDetailValue")} </p>
                </div>
              </div>
            ) : null}

            <div
              className="d-flex justify-content-between pl-3 pr-3 pt-3 pb-3"
              style={{
                background: "#fff"
              }}
            >
              {!loading && (
                <TotalInfo
                  total={total}
                  rangeTotal={rangeTotal}
                  typeText="transaction_info"
                  divClass="table_pos_info_addr"
                  selected
                  top={searchStatus ? "184px" : "80px"}
                />
              )}
              <DateSelect
                onDateOk={(start, end) => this.onDateOk(start, end)}
                dataStyle={{
                  right: "35px"
                }}
              />
            </div>
            <div className="trx20tronsfers trx10tronsfers">
              {!loading && transfers.length === 0 ? (
                <div className="pt-5 pb-5 text-center no-data transfers-bg-white">
                  {tu("no_transfers")}
                </div>
              ) : (
                <SmartTable
                  bordered={false}
                  loading={loading}
                  position="bottom"
                  column={column}
                  data={transfers}
                  total={rangeTotal > 2000 ? 2000 : rangeTotal}
                  addr="address"
                  transfers="token"
                  onPageChange={(page, pageSize) => {
                    this.loadPage(page, pageSize);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    tokensInfo: state.tokensInfo,
    priceUSD: state.blockchain.usdPrice
  };
}

const mapDispatchToProps = {
  updateTokenInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTimers(injectIntl(Transfers)));
