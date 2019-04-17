import React from 'react';

export default ({ post }) => (
    <div className="post-list" key={ post.id }>
        <h2>{post.frontmatter.title}</h2>
        <p><small><i>{ post.frontmatter.date }</i></small></p>
        <img src={ post.frontmatter.img } alt="" />
        <div className="post-content" dangerouslySetInnerHTML={{__html: post.html}}></div>
        <button><a href="https://www.stevensegallery.com/640/360">Read More ></a></button>
        <hr />
    </div>
)