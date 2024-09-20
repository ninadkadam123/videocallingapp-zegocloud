import React from 'react';
import { useLocation } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { v4 as uuidv4 } from 'uuid';
const Videocall = () => {
  const location = useLocation();
  const queryParameter = new URLSearchParams(location.search);
  const roomID = queryParameter.get('roomId');

  let myMeeting = async (element) => {
    const appID = process.env.REACT_APP_ZEGOCLOUD_ID;
    const serverSecret = process.env.REACT_APP_ZEGOCLOUD_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      parseInt(appID),
      serverSecret,
      roomID,
      uuidv4(),
      uuidv4()
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      sharedLinks: [
        {
          name: 'Meeting Link',
          //   url: `http://localhost:3000/room?roomId=${roomID}`,
          url: `https://master--videocallingappninad.netlify.app/room?roomId=${roomID}`,
        },
      ],
      container: element,
      scenario: { mode: ZegoUIKitPrebuilt.OneONoneCall },
    });
  };

  return (
    <div
      ref={myMeeting}
      style={{ width: '100%', height: '100vh' }}
    ></div>
  );
};

export default Videocall;
