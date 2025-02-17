import styled from "styled-components";


const DetailPictureWrapper = styled.div`
    position: relative;
    padding: 0 10px;

    .detail-picture {
        display: flex;
        height: auto;
        background-color: #000;

        .detail-picture-left {
            .detail-picture-item {
                width: 100%;
                border: 2px solid black;

                img {
                    width: 100%;
                    height: 50%;
                }
            }
        }

        .detail-picture-right {
            display: flex;
            flex-flow: wrap row;
            align-content: center;
            justify-content: center;

            .detail-picture-item {
                width: 50%;
                border: 2px solid black;
                flex-flow: row wrap;

                img {
                    width: 100%;
                }
            }
        }

        .detail-picture-left, .detail-picture-right {
            width: 50%;
            height: 100%;
            
            .detail-picture-item {
                .detail-picture-cover {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.2);
                    opacity: 0;
                    transition: opacity 1s ease;
                }
            }
            &:hover {
                .detail-picture-cover {
                    opacity: 1 !important;
                }
                cursor: pointer;

                .detail-picture-item:hover {
                    .detail-picture-cover {
                        opacity: 0 !important;
                        img {
                            transform: scale(1.2);
                        }
                    }
                }
            }
        }
    }

    .detail-show-btn {
        position: absolute;
        right: 20px;
        top: 20px;

        button {
            background-color: #bebbbb;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`

export default DetailPictureWrapper