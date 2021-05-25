const spiral = ([x, y]: number[]): (angle: number) => number[] => {
    const center = [50, 50]

    return (angle: number) => {
        return [
            Math.cos(angle) * x - Math.sin(angle) * y + center[0],
            Math.sin(angle) * x + Math.cos(angle) * y + center[1]
        ]
    }
}

export default spiral
