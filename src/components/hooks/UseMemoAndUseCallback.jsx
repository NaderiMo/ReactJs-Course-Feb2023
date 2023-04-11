import { useCallback, useMemo } from "react";

export default function UseMemoAndUseCallback() {
    const fooFunction = () => {
        return 'foo is just food without D';
    }

    const useMemoResult = useMemo(fooFunction, []);
    const useCallbackResult = useCallback(fooFunction, []);

    console.log('useMemoResult', useMemoResult);
    console.log('useCallbackResult', useCallbackResult);
    
    return <></>;
}