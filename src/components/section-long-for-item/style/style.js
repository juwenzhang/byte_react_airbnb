import styled from "styled-components";

const SectionLongForItemWrapper = styled.div`
    width: 100%;
    margin-left: -4px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding:8px;

    .long-for-inner {
        width: 100%;
        position: relative;
        overflow: hidden;
    }

    .long-for-cover {
        width: 100%;
        height: 200px; 
        object-fit: cover; 
        border-radius: 8px 8px 0 0; 
        position: relative; 
        z-index: 1; 
    }

    .long-for-bg-cover {
        position: absolute;
        height: 60%; 
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        background-image: linear-gradient(-180deg, rgba(0,0,0,0) 3%, rgb(0,0,0) 100%);
        border-radius: 8px 8px 8px 8px; 
        z-index: 2; 
    }

    .long-for-content {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 3; 
        pointer-events: none; 
    }

    .long-for-city {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
        text-align: center; 
    }

    .long-for-category {
        font-size: 14px;
        margin-top: 8px;
        color: #fff;
        text-align: center; 
    }
`;

export default SectionLongForItemWrapper;