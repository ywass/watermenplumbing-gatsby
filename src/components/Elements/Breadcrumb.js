import React from "react"
import { Link } from "gatsby"
import HomeIcon from '../../images/svg/HomeIcon.svg'

const BreadCrumb = ({bcrumb}) => {
  return (
    <section className="bread-crumbs v1 bg-box-none light-bg !py-4" id="BreadCrumbsV1">
      <div className="main thin">
        <nav className="relative bg-box border-radius-item no-shadow border border-[#cc6461] !py-3 overflow-hidden">
        <ol vocab="https://schema.org/" typeof="BreadcrumbList" className="flex-middle">
            <li className="flex-middle relative">
              <Link title="Go Home" aria-label="Go Home" to="/">
                <HomeIcon />
              </Link>
            </li>
            { bcrumb.map((item, index)=>{
                return(
                <>
                { item.link != null &&  (
                    <li property="itemListElement" typeof="ListItem" className="flex-middle relative">
                    {item.itemtype && (<Link
                        property="item" typeof="WebPage"
                        to={item.link}                                               
                    ><span itemprop="name" property="name">{item.name}</span></Link>)}     
                    {!item.itemtype && (<Link
                        property="item" typeof="WebPage"
                        to={item.link}                        
                    ><span property="name">{item.name}</span></Link>)}     
                    <meta property="position" content={index+1} />
                    </li>
                    ) } 
                    { item.link === null &&  (
                        <li property="itemListElement" typeof="ListItem">
                        <span property="name">{item.name}</span>
                        <meta property="position" content={index+1} />
                        </li>
                    )}
                    </>
                )
            })}
            {/* <li className="flex-middle relative">
              <Link to="/blog" target="">
                Blog
              </Link>
            </li>
            <li className="flex-middle relative">
              <Link to="/blog/2017" target="">
                2017
              </Link>
            </li>
            <li className="flex-middle relative">
              <Link to="/blog/2017/april" target="">
                April
              </Link>
            </li>
            <li className="flex-middle relative">
              {props.data.PageData.data.title.text}
            </li> */}
          </ol>
        </nav>
      </div>
    </section>
  )
}

export default BreadCrumb
