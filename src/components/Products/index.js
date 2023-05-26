// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'

import './index.css'

const Products = () => {
  const getJwtToken = Cookies.get('jwt_token')
  if (getJwtToken === undefined) {
    return <Redirect tp="/login" />
  }
  return (
    <>
      <Header />
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="products-img"
        />
      </div>
    </>
  )
}
export default Products
