import React, { useState } from 'react'
import Parent from './Parent';
import Child1 from './Child1';
import Child2 from './Child2';

function GParent() {
    const [count, setcount] = useState(0);
    return (
        <div>
            <Parent>
                <Child1 />
                <Child2 />
            </Parent>
        </div>
    )
}
export default GParent


/* #################################################################################################

 NOtes: VVI : 
 In the provided code, the Parent component is rendering its children components (Child1 and Child2) using the 
children prop. When the state changes within the Parent component (triggered by clicking the button), React 
re-renders the Parent component due to the state update.

Now, let's understand why the re-rendering of the Parent component doesn't lead to the re-rendering
 of its children components (Child1 and Child2).

In React, re-renders are not automatically propagated down to child components unless a change occurs in the props or 
state passed to the child component. When the Parent component re-renders due to a state change, React checks whether the 
props passed to its children have changed. Since the children prop itself doesn't change  when the Parent component re-renders 
(it's always the same reference to the same children components), React doesn't re-render the children components.

This behavior is an optimization mechanism in React known as "props and state comparison". React compares the current props and 
state with the previous ones and decides whether to re-render a component based on changes in props or state. Since the 
children prop doesn't change when the Parent component re-renders, React doesn't re-render the children components, and 
their render function doesn't get called again.

--> the children prop is a special prop that represents the nested elements or components passed between the opening and closing
 tags of a component. Any components or elements placed between the opening and closing tags of a component become the children
  of that component, and they are accessible through the children prop.  Eg: can be seen in Parent.js.
*/