import useRender from "@/hooks/useRender"

const ThreeDimensions = () => {
    const containerRef = useRender()

    return <div ref={containerRef} />
}

export default ThreeDimensions
