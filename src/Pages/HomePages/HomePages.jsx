import React from 'react'
import './home.css'
import d5b05142 from '../../Assets/Videos/d5b05142.mp4'
import {GrFormLocation} from "react-icons/gr"
import {HiFilter} from "react-icons/hi"

function HomePages() {
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={d5b05142} muted autoPlay loop itemType='video/mp4'></video>
      
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            Our Packages
          </span>
          <h1 className="homeTitle">
            Search ur Holiday
          </h1>
        </div>

        <div className="cardDiv grid">

          <div className="destinationInput">
            <label htmlFor="city">Search your destination : </label>
            <div className="input flex">
              <input type="text" name="" id="" placeholder='Input name here...' />
              <GrFormLocation className='icon' />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select ur Date : </label>
            <div className="input flex">
              <input type="date"/>
              <GrFormLocation className='icon' />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price : </label>
              <h3 className="total">Rp 50000</h3>
            </div>
            <div className="input flex">
              <input type="range" min={1000} max={50000} />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className='icon' />
            <span>More Filters</span>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default HomePages