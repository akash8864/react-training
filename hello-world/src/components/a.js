import React  from 'react'
export const Greet=(props)=>{
  const  {children,name}=props
return <div>
    <h1>hello {name}  </h1>
    {children}
</div>
}

// export default greet