import React from 'react';
import {useHistory} from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import {auth} from '../firebase';

const Chats = () => {
return (
   <div className='chats-page'>
    <div className='nav-bar'>
        <div className='logo-tab'>
            ChatPal
        </div>
        <div className='logout-tab'>
            Logout
        </div>
    </div>
    <ChatEngine
        height = 'calc(100vh - 66px)'
        projectId='
        46fde713-13ff-4423-9714-622047fbba4a
        46fde713-13ff-4423-9714-622047fbba4a'
    />

   </div>
);
}
export default Chats;