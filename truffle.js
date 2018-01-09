const deployer = require('./deployer')

const {
  name: packageName,
  version,
  description,
  keywords,
  license
} = require('./package.json')

const DEFAULT = {
  host: 'localhost',
  port: 8545,
  network_id: '*', // Match any network id
  gas: 4600000
}

const walletPath = './wallet.json'
//const providerUrl = 'https://ropsten.infura.io/SYGRk61NUc3yN4NNRs60'
const providerUrl = 'https://mainnet.infura.io/SYGRk61NUc3yN4NNRs60'
const { addresses, engine } = deployer(walletPath, providerUrl)

module.exports = {
  packageName,
  version,
  description,
  keywords,
  license,
  authors: [
    'Carlos Bruguera <cbruguera@gmail.com>',
    'Dave Sag <david.sag@industrie.co>'
  ],
  networks: {
    geth: { ...DEFAULT, gas: 999999 },
    ropsten: {
      network_id: 3,
      provider: engine,
      from: addresses[0],
      gas: 4700000,
      gasPrice: 1000000000000
    },
    mainnet: {
      network_id: 1,
      provider: engine,
      from: addresses[0],
      gas: 4700000,
      gasPrice: 60000000000
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
