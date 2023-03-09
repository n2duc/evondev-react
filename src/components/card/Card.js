import React from "react";
import styled, { css } from "styled-components";

/**
 * const CardStyled = styled.tag(h1, h2, div, span, p, section, article, ...)``
 * CSS-in-JS:
 */

const CardStyled = styled.div`
    position: relative;
    .card-image {
        height: 400px;
        width: 100%;
        border-radius: 8px;
        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
        }
    }
    .card-content {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 50%);
        width: calc(100% - 36px);
        bottom: 0;
        background-color: #fff;
        z-index: 10;
        border-radius: 20px;
        padding: 20px;
        .top-content {
            display: flex;
            align-content: center;
            justify-content: space-between;
            margin-bottom: 30px;
            .card-user {
                display: flex;
                align-items: center;
                column-gap: 12px;
                img {
                    width: 30px;
                    height: 30px;
                    border-radius: 100rem;
                    object-fit: cover;
                    flex-shrink: 0;
                }
                span {
                    font-size: 16px;
                    font-weight: 300;
                    color: #333;
                }
            }
            .card-meta {
                display: flex;
                align-items: center;
                column-gap: 12px;
            }
        }
        .card-footer {
            display: flex;
            align-content: center;
            justify-content: space-between;
            h3 {
                font-size: 18px;
                font-weight: 500;
                color: black;
            }
            .card-amount {
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
            }
        }
    }
`;
const Card = (props) => {
    return (
        <CardStyled secondary={props.secondary}>
            <div className="card-image">
                <img
                    src="https://cdn.dribbble.com/users/2400293/screenshots/19271835/media/68c947aa286ed6573929bc2655acff49.png?compress=1&resize=1000x750&vertical=top"
                    alt=""
                />
            </div>
            <div className="card-content">
                <div className="top-content">
                    <div className="card-user">
                        <img
                            src="https://cdn.dribbble.com/users/2400293/screenshots/19271835/media/68c947aa286ed6573929bc2655acff49.png?compress=1&resize=1000x750&vertical=top"
                            alt=""
                        />
                        <span>@zndrson</span>
                    </div>
                    <div className="card-meta">
                        <img src="./icon-heart.svg" alt="heart" />
                        <span>256</span>
                    </div>
                </div>
                <div className="card-footer">
                    <h3>Cosmic Perspective</h3>
                    <span className="card-amount">
                        12,000 PSL
                    </span>
                </div>
            </div>
        </CardStyled>
    );
};

export default Card;
