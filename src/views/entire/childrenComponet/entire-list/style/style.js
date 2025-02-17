import styled from "styled-components"

const EntireListWrapper = styled.div`
    position: relative;
    .entire-list-content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 70px;
        padding: 20px 50px;    
    }
    
    .entire-list-cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
    }
`

export default EntireListWrapper