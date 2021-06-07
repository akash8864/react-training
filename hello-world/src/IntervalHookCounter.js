import React ,{useState,useEffect}from 'react'

const IntervalHookCounter = () => {
    const [count, setcount] = useState(0)
    useEffect(() => {
        const interval=setInterval(() => {setcount(prev=>prev+1)}, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter

