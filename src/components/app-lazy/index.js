import styled from "styled-components"

export const LazyStyle = styled.div`
    .lazyBack {
        width: 100%;
        height: 100vh;
        background-color: rgba(203, 199, 199, 0.2);

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