import React from 'react';
import { Link } from 'react-router-dom'
import './Pagination.css';

const Pagination = (props) => {
    const { postsPerPage, totalPosts, paginate} = props;
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }
    const addClass = (event) => {
        const btn = document.getElementsByClassName('btn')
        for(let i = 0; i < btn.length; i++){
            if(btn[i].classList.contains('active')){
                btn[i].classList.remove('active')
            }else{
                event.target.classList.add('active')
            }
        }
    }
    return (
        <div>
            {
                pageNumbers.map((number, index) => {
                    return (
                        <ul key={index} className="paginate">
                            <li onClick={addClass}>
                                <Link to="" onClick={() => paginate(number)} className="btn"> {number} </Link>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}
export default Pagination;
