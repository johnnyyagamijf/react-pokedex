import React from 'react';
import {Pagination, PaginationButton, PaginationItem} from './style';

export default ({pages, onChangePage, total, currentPage}) => {
    return (
        <Pagination>
            <PaginationButton>
              {
                currentPage > 1 && (
                  <PaginationItem onClick={(e) => onChangePage(currentPage - 1)}>Previous</PaginationItem>
                )
              }
              {
                pages.map((page, index) => (
                  <PaginationItem
                    isSelect={page === currentPage}
                    key={index}
                    onClick={(e) => onChangePage(page)}>{page}</PaginationItem>
                ))
              }
              {
                currentPage < pages.length && (
                  <PaginationItem onClick={(e) => onChangePage(currentPage + 1)}>Next</PaginationItem>
                )
              }
            </PaginationButton>
          </Pagination>
    );
}


