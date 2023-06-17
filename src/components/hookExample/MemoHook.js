import React, { useCallback, useMemo, useState } from 'react'
import Count from './CountExampleRerender'

// React.memo(Component)
// Component bị re-render khi state thay đổi (count)
// Component bị re-render khi có props truyền vào thay đổi

const MemoHook = () => {
    const [filter, setFilter] = useState("");
    const handleChange = (e) => {
        setFilter(e.target.value);
    }
    const caculate = useCallback(() => setFilter(""), [setFilter]);
    const data = useMemo(() => ({ success: false }), [])
    return (
        <div>
            <input type="text" className="p-3 rounded bg-slate-50" onChange={handleChange} />
            <Count caculate={caculate} data={data}></Count>
        </div>
    )
}

export default MemoHook