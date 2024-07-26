import React from 'react'

function Title() {
  console.log("randering title");
  return (
    <div>
          <h1>useCallBack hook</h1>
    </div>
  )
}

export default React.memo(Title);