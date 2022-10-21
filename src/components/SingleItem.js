const SingleItem = ({post}) =>{

    return(
        <div className="listBody">
            <h1>{post.body}</h1>
            <p>{post.id}</p>
        </div>
    )


}

export default SingleItem;