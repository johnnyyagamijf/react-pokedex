import React from 'react';
import {Pagination, PaginationButton, PaginationItem} from './style';

export default ({pages, onChangePage, total, currentPage, setLoading}) => {
  function handleOnchangePage(page){
    setLoading(true)
    onChangePage(page);
  }
    return (
        <Pagination>
            <PaginationButton>
              {
                currentPage > 1 && (
                  <PaginationItem onClick={(e) => handleOnchangePage(currentPage - 1)}>Previous</PaginationItem>
                )
              }
              {
                pages.map((page, index) => (
                  <PaginationItem
                    isSelect={page === currentPage}
                    key={index}
                    onClick={(e) => handleOnchangePage(page)}>{page}</PaginationItem>
                ))
              }
              {
                currentPage < pages.length && (
                  <PaginationItem onClick={(e) => handleOnchangePage(currentPage + 1)}>Next</PaginationItem>
                )
              }
            </PaginationButton>
          </Pagination>
    );
}


