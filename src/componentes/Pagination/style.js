import styled from 'styled-components';

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    margin-bottom: 10px;
`;

export const PaginationButton = styled.div`
    display: flex;
`;

export const PaginationItem= styled.div`
margin: 0 5px;
cursor: pointer;
${(props) => props.isSelect && {
    background: 'none',
    border: '1px solid #058cff',
    padding: '0 5px'
}}
`;