import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getPosts } from '../../Redux/Actions/post.actions';

import './PhotoList.css';

import Photo from '../Photo';


class PhotoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            search: ''
        }
    this.handleSearch = this.handleSearch.bind(this)
    }
    async componentDidMount(){
       const { fetchPosts } = this.props;
       const response = await fetchPosts()
       const result = response.payload.splice(0,12)
       this.setState((prevState) => ({
           ...prevState,
           posts: result
       }))
    }

    handleSearch(event){
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    render(){
        const { isLoading } = this.props.newposts;
        const filteredPosts = this.state.posts.filter((post) => {
            return post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        })
        const posts = filteredPosts.map((post, index) => {
            return (
                <Photo post={post} key={index}/>
            )
        })
        return (
            <div className="wrapper">
                <input type="text" name="search" value={this.state.search} onChange={this.handleSearch} placeholder="Search ..."/>
                <div className="photolist-wrapper">
                    { 
                        isLoading 
                            ? 
                                (<Loader
                                type="Puff"
                                color="#00BFFF"
                                height={100}
                                width={100}
                                // timeout={3000}
                                />) 
                            : 
                        (posts)
                    }
                </div>
            </div>
            
        )
    }  
}

const mapStateToProps = (state) => ({
    newposts: state,
})
const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(getPosts())
});
export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
