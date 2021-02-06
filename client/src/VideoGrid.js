import { useSelector } from "react-redux";
import styled from "styled-components";

const VideoGridStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
    padding: 3rem;
`;

const SingleVideoStyles = styled.div`
    border: 2px solid var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    img {
        position: absolute;
        width: 100%;
        object-fit: cover;
    }
    p {
        font-size: 2rem;
        z-index: 2;
        &:last-child {
            transform: translateY(5rem);
        }
    }
`;

const VideoGrid = () => {
    const quinns = useSelector(state => state.allUsers);

    return (
        <VideoGridStyles>
            {quinns.map(quinn => (
                <SingleVideoStyles key={quinn.userId}>
                    <img src={quinn.image} alt={`Profile image for ${quinn.name}`} />
                    <p>{quinn.name}</p>
                    <p>Currently {quinn.online ? 'Online' : 'Offline'}</p>
                </SingleVideoStyles>
            ))}
        </VideoGridStyles>
    );
};

export default VideoGrid;