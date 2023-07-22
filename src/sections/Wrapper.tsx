import React from "react"

const Wrapper = (Component: React.FC) => (props: any) =>
  (
    <div className="content">
      <Component {...props} />
    </div>
  )

export default Wrapper
