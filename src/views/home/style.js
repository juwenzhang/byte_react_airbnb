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
            width: 100%;
            margin-top: 20px;
            margin-bottom: 20px;
        }
    }
`

export default HomeWrapper;