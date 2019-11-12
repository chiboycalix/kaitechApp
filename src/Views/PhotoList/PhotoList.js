import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Suspense, lazy } from 'react';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

import Loader from 'react-loader-spinner';

import { getPosts } from '../../Redux/Actions/post.actions';

import './PhotoList.css';

import Pagination from '../../Components/Pagination';
import NotFound from '../NotFound';

const Photo = lazy(() => import('../Photo'));

class PhotoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            search: '',
            currentPage: 1,
            postsPerPage: 20,
        }

        this.getAllPosts = this.getAllPosts.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handlePaginate = this.handlePaginate.bind(this);
    }

    //make an api call to get all post
    async getAllPosts(){
        const { fetchPosts } = this.props;
        try {
         const response = await fetchPosts()
         const result = response.payload.splice(0, 100)
         this.setState((prevState) => ({
             ...prevState,
             posts: result
         })) 
        } catch (error) {
            console.log(error)
        }
    }
    componentDidMount(){
       this.getAllPosts();
    }
    componentWillReceiveProps() {
        AOS.refreshHard();
    }
    handleSearch(event){
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handlePaginate(currentPageNumber){
        this.setState({
            currentPage: currentPageNumber,
            search: ''
        })
    }
    
    render(){
        AOS.init()
        //get current posts
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost);
        const { isLoading } = this.props.newposts;
        const filteredPosts = currentPosts.filter((post) => {
            return post.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        })
        const posts = filteredPosts.map((post, index) => {
            return (
                <Suspense key={index} fallback={<div key={index}>Loading...</div>} >
                
                        <Photo post={post} key={index}/>
                </Suspense>
            )
        })

        return (
            <div className="wrapper" >
                <input type="text" name="search" value={this.state.search} onChange={this.handleSearch} placeholder="Search ..."/>
                <div className="photolist-wrapper" >
                    { 
                        isLoading 
                            ? 
                                (
                                    <div className="loader">
                                        <Loader
                                            type="ThreeDots"
                                            color="#00BFFF"
                                            height={100}
                                            width={100}
                                        /> 
                                    </div>
                                ) 
                            : 
                                (
                                    posts.length ? (posts): (<NotFound />)
                                )
                    }
                </div>
                    <Pagination 
                        totalPosts={this.state.posts.length} 
                        postsPerPage={this.state.postsPerPage} 
                        paginate={this.handlePaginate}
                    />
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
