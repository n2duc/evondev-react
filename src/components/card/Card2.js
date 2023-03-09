import React from "react";
import styled, { css } from "styled-components";

/**
 * const CardStyled = styled.tag(h1, h2, div, span, p, section, article, ...)``
 * CSS-in-JS:
 */
const CardStyled = styled.div`
    position: relative;
    /* width: 400px; */
`;
const CardImage = styled.div`
    height: 400px;
    width: 100%;
    border-radius: 3px;
`;
const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;
const CardContent = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 36px);
    bottom: 0;
    background-color: #fff;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
`;
const TopContent = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin-bottom: 30px;
`;
const User = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;
const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
`;
const UserName = styled.span`
    font-size: 16px;
    font-weight: 300;
    color: #333;
`;
const CardMeta = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;
const CardFooter = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
`;
const CardTitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
    color: black;
`;
const CardAmount = styled.span`
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
    );
    ${(props) =>
        props.secondary &&
        css`
            background: linear-gradient(
                86.88deg,
                #20e3b2 1.38%,
                #2cccff 64.35%,
                #fc2872 119.91%
            );
        `};
    ${(props) =>
        !props.secondary &&
        css`
            background: linear-gradient(
                86.88deg,
                #7d6aff 1.38%,
                #ffb86c 64.35%,
                #fc2872 119.91%
            );
        `};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
`;
const Card2 = (props) => {
    return (
        <CardStyled>
            <CardImage>
                <CardImg
                    src="https://cdn.dribbble.com/users/2400293/screenshots/19271835/media/68c947aa286ed6573929bc2655acff49.png?compress=1&resize=1000x750&vertical=top"
                    alt=""
                />
            </CardImage>
            <CardContent>
                <TopContent>
                    <User>
                        <UserAvatar
                            src="https://cdn.dribbble.com/users/2400293/screenshots/19271835/media/68c947aa286ed6573929bc2655acff49.png?compress=1&resize=1000x750&vertical=top"
                            alt=""
                        />
                        <UserName>@zndrson</UserName>
                    </User>
                    <CardMeta>
                        <img src="./icon-heart.svg" alt="heart" />
                        <span>256</span>
                    </CardMeta>
                </TopContent>
                <CardFooter>
                    <CardTitle>Cosmic Perspective</CardTitle>
                    <CardAmount secondary={props.secondary}>
                        12,000 PSL
                    </CardAmount>
                </CardFooter>
            </CardContent>
        </CardStyled>
    );
};

export default Card2;
