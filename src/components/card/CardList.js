import React from "react";
import styled from "styled-components";

const StyleCardList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 90px 30px;
    padding: 20px;
`

const CardList = (props) => {
    return (
        <StyleCardList>{props.children}</StyleCardList>
    )
};

export default CardList;