import styled from "styled-components";

const AntJzhRateWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
    
    .ant-jzh-rate {
        color: ${props => props.$ThemeColor}
    }
    
    span {
        text-align: center;
    }
`

export default AntJzhRateWrapper