import styled from "styled-components";

const HomeWrapper = styled.div`
    height: auto;
    width: 100%;
    
    .homeContent {
        margin: 0 auto;
        width: 1082px;
        @media (max-width: 1082px) {
            width: 100%;
            padding: 0 16px;
        }
        .goodPrice {
            margin-top: 20px;
            margin-bottom: 20px;
            
            .home-content-highPrice {
                display: flex;
                flex-wrap: wrap;
                margin: 0 -8px;
            }
        }
    }
`

export default HomeWrapper;