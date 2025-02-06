import styled from "styled-components"

export const LazyStyle = styled.div`
    .lazyBack {
        width: 100%;
        height: 100vh;
        background-color: #a8a7a7;
        position: relative;
        
        .context {
            overflow: hidden;
            position: absolute;
            left: 50%;
            top: 50%;
            color: red;
            transform: translate(-50%, 50%);
        }
    }
`