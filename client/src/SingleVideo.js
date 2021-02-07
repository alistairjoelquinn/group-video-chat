import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { socket } from './socket';

const SingleVideoStyles = styled.div`
    border: 2px solid ${props => props.USER ? 'green' : 'red'};
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

const SingleVideo = ({ quinn }) => {
    const { userId } = useSelector(state => state.currentUser);
    const roomId = useSelector(state => state.roomId);
    const [thisUser, setThisUser] = useState(false);

    useEffect(() => {
        if (userId === quinn.userId) {
            setThisUser(true);
            console.log('roomId: ', roomId);
            socket.emit('join-quinn-chat', roomId, 10);
        }
    }, [userId]);

    return (
        <SingleVideoStyles USER={thisUser} >
            {
                thisUser
                    ?
                    <video />
                    :
                    <>
                        <img src={quinn.image} alt={`Profile image for ${quinn.name}`} />
                        <p>{quinn.name}</p>
                        <p>Currently {quinn.online ? 'Online' : 'Offline'}</p>
                    </>
            }
        </SingleVideoStyles>
    );
};

export default SingleVideo;