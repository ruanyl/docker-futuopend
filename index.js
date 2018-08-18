const xml = require('xml')
const fs = require('fs')

const FutuHistData = {
  futu_hist_data: [{
    enable: process.env.FUTU_HIST_DATA_ENABLE || '1'
  }, {
    nnid: process.env.FUTU_HIST_DATA_NNID || '10000',
  }, {
    begin_time: process.env.FUTU_HIST_DATA_BEGIN_TIME || '0800',
  }, {
    end_time: process.env.FUTU_HIST_DATA_END_TIME || '2300',
  }, {
    market: process.env.FUTU_HIST_DATA_MARKET || 'hk',
  }, {
    kline_type: process.env.FUTU_HIST_DATA_KLINE_TYPE || 'day',
  }, {
    hist_data_dir: process.env.FUTU_HIST_DATA_DIR || '/ft_hist_data',
  }]
}

const FutuOpenD = {
  futu_opend: [
    {
      ip: process.env.FUTU_OPEND_IP || '0.0.0.0',
    }, {
      api_port: process.env.FUTU_OPEND_API_PORT || '11111',
    }, {
      push_proto_type: process.env.FUTU_OPEND_PUSH_PROTO_TYPE || '0',
    }, {
      telnet_port: process.env.FUTU_OPEND_TELNET_PORT || '22222',
    }, {
      login_account: process.env.FUTU_OPEND_LOGIN_ACCOUNT || '100000',
    }, {
      login_pwd: process.env.FUTU_OPEND_LOGIN_PWD || '123456',
    }, {
      lang: process.env.FUTU_OPEND_LANG || 'chs',
    }
  ]
}

if (process.env.FUTU_OPEND_LOGIN_PWD_MD5) {
  FutuOpenD.futu_opend.push({ login_pwd_md5: process.env.FUTU_OPEND_LOGIN_PWD_MD5 })
}

if (process.env.FUTU_OPEND_LOGIN_CERT_FILE) {
  FutuOpenD.futu_opend.push({ login_cert_file: process.env.FUTU_OPEND_LOGIN_CERT_FILE })
}

const FutuHistDataXML = xml(FutuHistData)
console.log(FutuHistDataXML)

const FutuOpenDXML = xml(FutuOpenD)
console.log(FutuOpenDXML)

fs.writeFileSync(__dirname + '/FutuHistData.xml', FutuHistDataXML)
fs.writeFileSync(__dirname + '/FutuOpenD.xml', FutuOpenDXML)
