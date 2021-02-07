import { useCallback, useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Peer from 'peerjs';

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
    const myVideo = useRef();

    const addVideoStream = useCallback((video, stream) => {

    }, []);

    useEffect(() => {
        if (userId === quinn.userId) {
            const peer = new Peer(undefined, {
                host: '/',
                port: '3002'
            });
            setThisUser(true);
            peer.on('open', id => {
                socket.emit('join-quinn-chat', roomId, id);
            });
            navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            }).then(stream => {
                addVideoStream(myVideo, stream);
            });
        }
    }, [userId]);

    return (
        <SingleVideoStyles USER={thisUser} >
            {
                thisUser
                    ?
                    <video
                        muted={true}
                        ref={myVideo}
                    />
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