import styled from 'styled-components';

export const RightHeaderWrapper = styled.div`
    flex: 1;
    display: flex;
    margin: auto 30px;
    height: 100%;
    justify-content: flex-end;
    align-items: center;

    .buttons {
        span {
            display: inline-block;
            margin: auto 10px;
            cursor: pointer;
            color: purple;
            transition: all 0.5s;

            &:hover {
                color: skyblue;
                font-weight: 700;
                box-shadow: 1px 1px #807b7b, -1px 1px #807b7b;
            }
        }

        margin-right: 5px;
    }

    .profile {
        width: 100px;
        height: 50%;
        background-color: #d3d1d1;
        box-sizing: border-box;
        border-radius: 20px;
        border: 1px solid #676464;
        filter: blur(0px);

        .mark {
            position: absolute;
            width: 15px;
            height: 15px;
            right: 0;
            border-radius: 7px;
            background-color: ${props => props.theme.colors.primaryColor};
        }

        .panel {
            width: 240px;
            height: auto;
            font-size: 14px;
            color: black;
            background-color: white;
            box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.2);
            position: absolute;
            right: 0;
            top: 40px;
            border-radius: 7px;
            z-index: 999;

            .top, .bottom {
                padding: 10px 0;

                .item {
                    height: 40px;
                    line-height: 40px;
                    padding: 0 15px;

                    &:hover {
                        background-color: rgba(220, 220, 216, 0.33);
                    }
                }
            }

            .top {
                border-bottom: 1px solid #a9a6a6;
            }
        }

        transition: all 0.5s ease;

        &:hover {
            filter: blur(0);
            box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
            cursor: pointer;
        }
    }
`