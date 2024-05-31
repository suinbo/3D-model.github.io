import { useEffect, useRef } from "react"
import { PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js"

export type ThreeProp = {
    scene: Scene
    camera: PerspectiveCamera
    renderer: WebGLRenderer
}

/**
 * 3D 렌더링 훅
 * @param renderFn
 * @returns containerRef
 */
const useRender = (renderFn: ({ scene, camera, renderer }: ThreeProp) => void) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scene = new Scene()
        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new WebGLRenderer()

        // 렌더러 크기 세팅
        renderer.setSize(window.innerWidth, window.innerHeight)

        // DOM에 추가
        document.body.appendChild(renderer.domElement)

        // 3D 렌더링
        renderFn({ scene, camera, renderer })

        // 퀘도 컨트롤
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.update()

        return () => {
            document.body.removeChild(renderer.domElement)
        }
    }, [renderFn])

    return containerRef
}

export default useRender
