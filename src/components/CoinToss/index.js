// Write your code here
import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossedResult: HEADS_IMG_URL, headsCount: 0, tailsCount: 0}

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = headsCount
    let latestTailCount = tailsCount
    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailCount += 1
    }
    this.setState({
      tossedResult: tossImage,
      headsCount: latestHeadCount,
      tailsCount: latestTailCount,
    })
  }

  render() {
    const {tossedResult, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <div className="coin-img-container">
            <img
              src={`${tossedResult}`}
              className="coin-img"
              alt="toss result"
            />
          </div>
          <div className="btn-container">
            <button className="btn" type="button" onClick={this.onTossCoin}>
              Toss Coins
            </button>
          </div>
          <div className="results-container">
            <p className="total">Total: {totalCount}</p>
            <p className="heads">Heads: {headsCount}</p>
            <p className="Tails">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
