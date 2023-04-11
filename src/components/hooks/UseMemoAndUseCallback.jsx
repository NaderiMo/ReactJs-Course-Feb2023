import { useCallback, useMemo } from "react";

export default function UseMemoAndUseCallback(params) {
    const fooFunction = () => {
        return 'Foo i? ju?t Food without D';
    }

    const useMemoResult = useMemo(fooFunction, [])
    const useCallbackResult = useCallback(fooFunction, [])

    console.log("useMemoResult", useMemoResult);
    console.log("useCallbackResult", useCallbackResult);
    return <></>
}