"use client"

import React, { useState } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';

const Counter = () => {
    const [count, setCount] = useState(0);

    // const {isLoaded, userId, sessionId, getToken} = useAuth();
    const {isLoaded, isSignedIn, user} = useUser();

    if(!isLoaded || !isSignedIn) return null
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter