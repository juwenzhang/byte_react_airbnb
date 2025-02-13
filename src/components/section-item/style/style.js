import styled from 'styled-components';

export const SectionItemWrapper = styled.div`
    width: ${props => props.$avg};
    padding: 8px;
    box-sizing: border-box;

    .section-item-inner {
        width: 100%;

        .section-item-cover {
            position: relative;
            box-sizing: border-box;
            padding: 100% 8px 0;  // 这个时候就创建了一个为正方形的卡片以及宽度
            border-radius: 4px;
            overflow: hidden;
            margin: 10px 0;
            transition: all 0.5s ease;

            img {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                text-align: center;
            }

            @media (max-width: 768px) {
                .section-item-cover {
                    box-shadow: 0 4px 8px 0 rgba(77, 76, 76, 0.15);
                    transform: translate3d(0, 0, -5px);
                }
            }
        }

        .section-item-title {
            color: ${props => props.$ItemTextTitleColor};
        }

        .section-item-detail {
            color: ${props => props.$ItemTextDetailColor};
            text-overflow: ellipsis;
        }

        .section-item-price {
            color: ${props => props.$ItemTextPriceColor};
        }
        
        .section-item-rate {
        }
    }

    &:hover {
        cursor: pointer;

        .section-item-cover {
            box-shadow: 0 8px 8px 0 rgba(77, 76, 76, 0.2), 
                        0 20px 20px 0 rgba(77, 76, 76, 0.2);
            transform: translate3d(0, 0 , 10px);
        }
    }

    @media (max-width: 768px) {
        width: 50%
    }
    
    @media (max-width: 420px) {
        width: 100%;
    }
`