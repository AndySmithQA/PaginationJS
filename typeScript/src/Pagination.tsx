import { useState } from "react";

interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: (pageNumber: number) => void;
}

function Pagination({postsPerPage, totalPosts, paginate}: PaginationProps){
    const [activePage, setActivePage] = useState(1);
    const pageNumbers = [];

    for (let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    const handlePageClick = (pageNumber: number) => {
        setActivePage(pageNumber);
    }
    
    return(
        <div>
            <nav>
        <ul className="pagination">
            {pageNumbers.map(number => (
                    <li key={number} className={activePage === number ? "active" : "non-active"}>
                        <a 
                            href="!#"
                            className="page-link"
                            onClick={() =>{
                            handlePageClick(number);
                            paginate(number);
                        }}>{number}</a>
                    </li>
                ))
            }
            </ul>
            </nav>
        </div>
    )
}

export default Pagination;