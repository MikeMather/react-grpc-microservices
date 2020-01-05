import styled from 'styled-components';

const ProductListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const JumboContainer = styled.div`
    height: 300px;
    background-image: url('/images/coffee.jpg');
    background-position: center;
    background-size: cover;
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, .24), 0 1px 2px hsla(0, 0%, 0%, .12);
    background-blend-mode: multiply;
    background-color: #607d8b;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    box-sizing: border-box;

    h1, p {
        margin: 5px;
    }
`;

const ProductContainer = styled.div`
    width: 200px;
    height: 325px;
    margin: 20px;
    padding: 0 5px;
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, .24), 0 1px 2px hsla(0, 0%, 0%, .12);
`;

const ProductImage = styled.div`
    width: 100%;
    height: 180px;
    background-image: url('${props => props.url}');
    background-size: cover;
    background-position: center;
`;

const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 0 5px 0;

    p {
        margin: 5px 15px;
    }

    p:first-of-type {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 2px;
        color: #415058;
    }

    p:nth-of-type(2) {
        color: grey;
        margin-top: 0;
        font-size: 13px;
    }

    p:last-of-type {
        margin-top: 15px;
        font-weight: bold;
    }
`

const AddButton = styled.button`
    border: 1px solid #607d8b;
    background: #607d8b;
    box-shadow: none;
    border-radius: 3px;
    cursor: pointer;
    padding: 8px 11px;
    margin: 0 15px 10px 0;
    float: right;
    color: white;

    &:hover {
        background-color: #415058;
    }
`;

const InCartLabel = styled.div`
    background-color: #add7af;
    color: #2c6c2e;
    padding: 8px 11px;
    margin: 0 15px 10px 0;
    float: right;
    border-radius: 3px;
`;


export default {
    ProductListContainer,
    JumboContainer,
    ProductContainer,
    ProductImage,
    ProductDetails,
    AddButton,
    InCartLabel
};