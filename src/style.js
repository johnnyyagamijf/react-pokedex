import styled from 'styled-components';

export const Pagination = styled.div`
    display: flex;
    min-width: 500px;
    justify-content: space-between;
    color: #000;
`;

export const PaginationButton = styled.div`
    display: flex;
`;

export const PaginationItem= styled.div`
margin: 0 10px;
cursor: pointer;
${(props) => props.isSelect && {
    background: '#6d6d6d',
    padding: '0 5px'
}}
`;