import React from "react"
import { Link } from "gatsby"
import { PrismicRichText } from '@prismicio/react'

const BlogItem = ({ data }) => {
    const {
        title,
        publish_date,
        short_description,

    } = data.node.data

    return (
        <Link
            className="flex-column full border-radius scaling-item bg-box relative"
            to={`/blog/${data.node.data.archives_year.document.data.year}/${data.node.data.archives_month.document.data.month.toLowerCase()}/${data.node.uid}`}
        >
            <div className="flex-column-top side-padding-large vertical-padding-tiny full auto">
                <div className="auto full">
                    <span className="blog-time-style full">
                        <time content="Jan 21, 2022">{publish_date}</time>
                    </span>
                    <strong className="title-style-4 title-color-4">
                        {title?.text}
                    </strong>
                    {short_description && short_description?.richText && (
                        <div className="hide-800">
                            <PrismicRichText
                                field={short_description?.richText}
                                components={{
                                    paragraph: ({ children }) => (
                                        <p className='text-left max-w-full'>
                                            {children}
                                        </p>
                                    ),
                                }}
                            />
                        </div>
                    )}
                    
                </div>
                <span className="fit btn v2">View Article</span>
            </div>
        </Link>

    )
}


export default BlogItem