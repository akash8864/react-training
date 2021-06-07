import React, { useEffect ,useState} from 'react'

const HookMouse = () => {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    const logmouse=(e)=>{console.log("mouseevent");setx(e.clientX); sety(e.clientY)}
    useEffect(() => {
      console.log("use effect called")
      window.addEventListener('mousemove',logmouse)
      return()=>
      {
          console.log("component will unmount")
          window.removeEventListener('mousemove',logmouse)
      }
    }, [])
    return (
        <div>
            {x} {y}
        </div>
    )
}

export default HookMouse
