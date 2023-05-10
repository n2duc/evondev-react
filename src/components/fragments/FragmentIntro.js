import React, { Fragment, useState } from 'react'

const FragmentIntro = () => {
    const [on, setOn] = useState(true);
    const firstName = "Ngoc";
    const lastName = "Duc";
    return (
        <Fragment>
            <div className='flex'>
                {on && <Fragment>{firstName}{lastName}</Fragment> }
                <button onClick={() => setOn(!on)}>Click</button>
            </div>
        </Fragment>
    )
}

export default FragmentIntro;