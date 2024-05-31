import useRender, { ThreeProp } from "@/hooks/useRender"

const ThreeDimension = ({ renderFn }: { renderFn: ({ scene, camera, renderer }: ThreeProp) => void }) => {
    const containerRef = useRender(renderFn)

    return <div ref={containerRef} />
}

export default ThreeDimension
