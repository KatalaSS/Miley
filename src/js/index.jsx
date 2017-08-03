import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {StoreList} from './components/shop/stores.jsx'
import {ProductList} from './components/shop/products.jsx'

class App extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div id="main-content">
        <div className="container">
          <StoreList />
          <ProductList />
        </div>
      </div>
    )
  }
}

const MainView = document.getElementById('miley')
if (!!MainView) {
  ReactDOM.render(<App />, MainView)
}
