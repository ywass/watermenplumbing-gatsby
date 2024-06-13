import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import BlogItem from "./BlogItem"

const BlogIndex = ({ data }) => {
    const allPosts = data
    const showRecords = 6
    const [list, setList] = useState([...allPosts.slice(0, showRecords)])
    return (
        <ul className="flex-grid-wrap-block-800" data-role="tbody">
            {list.map((article) => (
                <li
                    className="half flex- featured"
                    data-item="i"
                    data-key={1302513}
                >
                    <BlogItem key={article.id} data={article} />
                </li>
            ))}
        </ul>
    )
}

export default BlogIndex