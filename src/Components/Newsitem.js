import React, { Component } from 'react';
export class Newsitem extends Component {
    render() {
        let {title,description,imgUrl,newsUrl,author,time}=this.props;
        return (
            <div className="card " style={{width: `18rem`}}>
  <img src={imgUrl} className="card-img-top" alt="img"/>
  <div className="card-body">
    <h5 className="card-title">{title.substring(0,80)}...</h5>
    <p className="card-text">{description.substring(0,125)}...</p>
    <p className="card-text"><small className="text-muted"/>By {author} on {time}</p>
    <a href={newsUrl} className="btn btn-primary">Full News</a>
  </div>
</div>
        )
    }
}

export default Newsitem;
