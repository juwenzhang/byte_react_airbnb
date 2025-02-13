import styled from "styled-components";

export const AppFooterWrapper = styled.div`
    border-bottom: 1px solid #a19e9e;
    border-top: 1px solid #a19e9e;
    margin: 100px 0 20px;
    padding: 30px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .footer-item {
        .footer-item-title {
            color: #0a0a0a;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
            
            &:hover {
                cursor: pointer;
            }
        }

        .footer-item-content {
            color: #575555;
            font-size: 16px;
            
            div {
                margin-bottom: 5px;
            }
        }
    }
`

export const FooterFooterWrapper = styled.div`
    position: absolute;
    width: 75%;
    height: 130px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    font-weight: 100;
    color: #918d8d;
`