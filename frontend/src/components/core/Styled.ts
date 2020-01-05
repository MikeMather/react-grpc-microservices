import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 30px;
`;

export const Nav = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    height: 100%;

    a {
        text-decoration: none;
        color: #607d8b;
        font-size: 22px;
        margin-right: 50px;
        cursor: pointer;
    }

    a:hover {
        color: #324249;
    }
`;

export const Badge = styled.span`
    background-color: #fcc9c5;
    color: #c70000;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    padding: 3px 6px;
    text-align: center;
    font-size: 14px;
    margin-left: 5px;
`;