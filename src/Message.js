import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css'

const Message = forwardRef((props, ref) => {
    
    const isUser = props.username === props.message.username;

    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_usercard" : "message_guestcard"}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        {!isUser && `${props.message.username || "Unknown user"}: `} {props.message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
