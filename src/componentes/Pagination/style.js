import styled from 'styled-components';

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
`;

export const PaginationButton = styled.div`
    display: flex;
`;

export const PaginationItem= styled.div`
margin: 0 10px;
cursor: pointer;
${(props) => props.isSelect && {
    background: 'none',
    border: '1px solid #058cff',
    padding: '0 5px'
}}
`;