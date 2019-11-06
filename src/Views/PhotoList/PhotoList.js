import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../Redux/Actions/post.actions';

import './PhotoList.css';

import Photo from '../Photo';


class PhotoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }
    async componentDidMount(){
       const { fetchPosts } = this.props
       const response = await fetchPosts()
       const result = response.payload.splice(0,10)
       this.setState((prevState) => ({
           ...prevState,
           posts: result
       }))
    }

    render(){
        const posts = this.state.posts.map((post, index) => {
            return (
                <Photo post={post} key={index}/>
            )
        })
        return (
            <div className="photolist-wrapper">
            {posts}
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        posts: state.getPosts,
      };
}
const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(getPosts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
