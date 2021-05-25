import { useState, useEffect } from "react"

const useLoad = (): boolean => {
    const [load, setLoad] = useState<boolean>(false)

    useEffect(() => {
        setLoad(true)

        return () => setLoad(false)
    } ,[])

    return load
}

export default useLoad
