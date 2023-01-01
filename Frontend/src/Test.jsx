import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Test() {
    const [s, setS] = useState("Sorry not connected")
    useEffect(() => {
        (async () => {
            const a = await fetch('http://localhost:3001/');
            if (!a.ok) {
                throw new Error('not found')
            }

            const res = await a.text()
            setS(res)
        })()
    }, [])

    return (
        <div>{s} is working </div>
    )
}

