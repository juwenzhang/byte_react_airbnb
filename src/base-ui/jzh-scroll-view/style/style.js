import styled from "styled-components";

const JzhScrollViewWrapper = styled.div`
    position: relative;
    
    .jzh-scroll-slot {
        overflow: hidden;
        .jzh-scroll-slot-content {
            display: flex;
            flex-wrap: nowrap;
            transition: transform 0.5s ease;
        }
    }

    .jzh-scroll-left-button,
    .jzh-scroll-right-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        z-index: 10;
        font-size: 30px;
        
        &:active {
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
    }
    .jzh-scroll-left-button {
        left: -25px;
    }
    .jzh-scroll-right-button {
        right: -25px;
    }
`

export default JzhScrollViewWrapper;