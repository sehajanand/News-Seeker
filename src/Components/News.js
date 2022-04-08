import React,{Component} from "react";
import Newsitem from "./Newsitem.js";
import Spinner from "./Spinner.js";
import "./News.css"
export default class News extends Component{
  constructor(){
    super();
    this.state={
      articles:[],
      pageNo:1,
      loading:false
    };
  }
  async componentDidMount(){
    console.log(`strt`);
    this.setState({loading:true});
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&category=${this.props.category}&apiKey=ffea5c37becc4416a7f9a485f917377f&page=${this.state.pageNo}&pagesize=5`;
  let data=await fetch(url);
  let fetchedData=await data.json();
  this.setState({loading:false});
  this.setState({articles:fetchedData.articles});
}
 previous= async ()=>{
   this.setState({loading:true});
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ffea5c37becc4416a7f9a485f917377f&page=${this.state.pageNo}&pagesize=5`;
  let data=await fetch(url);
  let fetchedData=await data.json();
  this.setState({loading:false});
  this.setState({pageNo:this.state.pageNo-1,articles:fetchedData.articles})
}
 next=async ()=>{
   this.setState({loading:true});
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ffea5c37becc4416a7f9a485f917377f&page=${this.state.pageNo}&pagesize=5`;
  let data=await fetch(url);
  let fetchedData=await data.json();
  this.setState({loading:false});
  this.setState({pageNo:this.state.pageNo+1,articles:fetchedData.articles})
}

render(){
  return(
    <main>
                <div className="container my-3">
                <h1>Latest News-Read Latest News:-Category-{this.props.category}</h1>
               { this.state.loading&&<Spinner/>}
                <div className="row">
                  
                {!this.state.loading&&
                    this.state.articles?.map((element)=>{
                        return  <div key={element.url} className="col-md-4 phoneDisplay" > <Newsitem  title={element.title} description={element.description===null?"":element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author===null?"Unkown author":element.author} time={element.publishedAt===null?"Unknown time":new Date(element.publishedAt).toGMTString()}/> </div>
                    })
                }
                </div>
                <div  className="d-flex justify-content-between my-4"><button disabled={this.state.pageNo<=1?true:false} onClick={this.previous} className="btn btn-primary" type="button">Previous	&#8592;</button><button type="button"className="btn btn-primary" onClick={this.next} disabled={this.state.pageNo>8?true:false}>Next &#8594;</button></div>
                </div>
            </main>
        )
    }
}