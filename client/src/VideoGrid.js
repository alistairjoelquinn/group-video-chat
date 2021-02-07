import { useSelector } from "react-redux";
import styled from "styled-components";
import SingleVideo from "./SingleVideo";

const VideoGridStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
    padding: 3rem;
`;

const VideoGrid = () => {
    const quinns = useSelector(state => state.allUsers);

    return (
        <VideoGridStyles>
            {quinns.map(quinn => <SingleVideo key={quinn.userId} quinn={quinn} />)}
        </VideoGridStyles>
    );
};

export default VideoGrid;