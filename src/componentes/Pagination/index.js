import React from 'react';
import {PaginationStyle, PaginationButton, PaginationItem} from '../style';


export default function Pagination({page}){
    return (
        <PaginationStyle>
            {/* <div>Qtd {0}</div> */}
            <PaginationButton>
                <PaginationItem>{page}</PaginationItem>
            </PaginationButton>
        </PaginationStyle>

    );
}

