import styled from "styled-components";

const VideoGridStyles = styled.div`
    border: 2px solid red;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
`;

const VideoGrid = () => {
    return (
        <VideoGridStyles>
            <div>Video Grid</div>
        </VideoGridStyles>
    );
};

export default VideoGrid;