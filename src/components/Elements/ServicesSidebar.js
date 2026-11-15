import React from 'react'
import { Link } from 'gatsby'
import senoirImg from '../../images/Senoir[9].jpg'

import AsideForm from '../../ReuseComponents/AsideForm/AsideForm'


const ServicesSidebar = ({children})=>{

    return(
        <div>
            {children}
            <AsideForm/>
            <aside
          className="side-coupon v1 light-bg transparent-bg no-shadow bg-box-unlike mt-8"
          id="SideCouponV1"
          data-onvisible="show"
          data-role="scroller"
        >
          <div
            id="SideCouponV1List"
            className="ui-repeater"
            data-role="container"
          >
            <ul className="flex-" data-role="list">
              
              
            </ul>
            <div
              className="scrolling-list-nav top-margin horizontal flex-middle-center relative text-center"
              data-role="arrows"
            >
              <button
                title="View previous item"
                aria-label="View previous item"
                data-action="Prev"
              >
                <svg className="site-arrow">
                  <use href="../../includes/flair.svg#arrow-left" />
                </svg>
              </button>
              <span className="paging" data-role="paging">
                <span data-role="page-active" /> /{" "}
                <span data-role="page-total" />
              </span>
              <button
                title="View next item"
                aria-label="View next item"
                data-action="Next"
              >
                <svg className="site-arrow">
                  <use href="../../includes/flair.svg#arrow-right" />
                </svg>
              </button>
            </div>
            <div id="SideCouponV1BtnCon"></div>
          </div>
        </aside>
        </div>
    )
              }

export default ServicesSidebar;
