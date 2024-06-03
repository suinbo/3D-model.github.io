import useRenderSingle from "@/hooks/useRenderSingle"

const ThreeDimension = ({ value }: { value: { geometry: any; zPosition?: number } }) => {
    const containerRef = useRenderSingle(value)

    return <div ref={containerRef} />
}

export default ThreeDimension
