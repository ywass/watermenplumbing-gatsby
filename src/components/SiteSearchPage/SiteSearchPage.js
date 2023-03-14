import React from 'react'
import '../../style/siteSearch.css'


import { Link } from 'gatsby'
function SiteSearchPage() {
  return (
    <main id="MainZone">
  <form
    id="Form_SiteSearchSystemV1"
    method="post"
    encType="multipart/form-data"
    action="https://www.watermenplumbing.com/site-search/"
    data-search={1}
  >
    <input type="hidden" name="_m_" defaultValue="SiteSearchSystemV1" />
    <section
      className="site-search-system v1 light-bg text-center bg-box-unlike"
      id="SiteSearchSystemV1"
      data-onvisible="show"
    >
      <picture
        className="img-bg bg-position"
        role="presentation"
        data-role="picture"
      >
        <source
          media="(max-width: 500px)"
          srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          data-src="/assets/site-search/site-search-system-v1-bg-mobile.jpg"
        />
        <img
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          alt=""
          data-src="/assets/site-search/site-search-system-v1-bg.jpg"
        />
      </picture>
      <div className="main thin relative">
        <header
          className="no-pad bottom-margin-tiny center-800 text-align"
          id="SiteSearchSystemV1Header"
        >
          <h1>How Can We Help You?</h1>
        
        </header>
        <input
          type="hidden"
          className="ui-cms-input"
          id="SiteSearchSystemV1Search__edit_"
          name="SiteSearchSystemV1Search$_edit_"
          defaultValue=""
        />
        <input
          type="hidden"
          className="ui-cms-input"
          id="SiteSearchSystemV1Search__command_"
          name="SiteSearchSystemV1Search$_command_"
          defaultValue=""
        />
        <div
          className="top-margin ui-repeater ui-ajax"
          id="SiteSearchSystemV1Search"
          data-search-delay={1500}
        >
          <div className="search-bar bg-box side-padding vertical-padding flex-middle-block-500 border-radius">
            <div
              className="input-text auto "
              id="SiteSearchSystemV1_1"
              data-replace-class="input-text auto {if:Q:C:filled}"
            >
              <input
                id="SiteSearchSystemV1Search_HDR0_Keyword"
                type="text"
                placeholder=""
                autoComplete="off"
                className="ui-cms-input"
                name="SiteSearchSystemV1Search$HDR0$Keyword"
                defaultValue=""
                data-search="true"
              />
              <label className='searchLabel' htmlFor="SiteSearchSystemV1Search_HDR0_Keyword">
                Search by keyword
              </label>
              <label
                className="icon"
                htmlFor="SiteSearchSystemV1Search_HDR0_Keyword"
              >
                <svg viewBox="0 0 24 24" title="Search Icon">
                  <use data-href="/cms/svg/site/ykmkv4_n6ok.24.svg#search" />
                </svg>
              </label>
            </div>
            <Link
              to="javascript:void(0)"
              title="Search Our Site"
              className="btn v1"
            >
              Search
            </Link>
          </div>
          <ul className="top-margin-small">
            <li
              className="bg-box side-padding vertical-padding-tiny flex-center ninja border-radius-item"
              id="SiteSearchSystemV1_2"
              data-replace-class="bg-box side-padding vertical-padding-tiny flex-center {ifnot:Q:C:ninja} border-radius-item"
              data-item="nr"
            >
              <strong className="title-style-4 text-center">
                Sorry no matching pages were found. Please try a <br />
                different search term or
                <Link to="/site-map">click here</Link> to visit our
                site map.
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </form>
</main>

  )
}

export default SiteSearchPage