import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages,page,setPage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className={"pagination-wrapper"}>
            {
                pagesArray.map(p => {
                    return <span
                        key={p}
                        className={p === page ? 'pagination-button active' : 'pagination-button'}
                        onClick={() => setPage(p)}
                    >{p}</span>
                })
            }
        </div>
    );
};

export default Pagination;