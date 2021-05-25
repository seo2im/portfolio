const spiral = (angle: number): ([x, y]: number[]) => number[] => {
    const center = [0, 0]
    const radius = 100;

    return ([x, y]: number[]) => {
        return [
            Math.cos(angle) * x - Math.sin(angle) * y + center[0],
            Math.sin(angle) * x + Math.cos(angle) * y + center[1]
        ]
    }
}

export default spiral
