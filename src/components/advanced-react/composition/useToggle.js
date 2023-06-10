import { useState } from "react";

export default function useToggle() {
    const [value, setValue] = useState(false);
    const toggleValue = () => {
        setValue((value) => !value);
    };
    return [value, toggleValue];
}
