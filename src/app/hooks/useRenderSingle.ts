import { useEffect, useRef } from "react"
import { Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js"

export type ThreeProp = {
    geometry: any
    zPosition?: number
}

/**
 * 3D 렌더링 훅
 * @param renderFn
 * @returns containerRef
 */
const useRenderSingle = ({ geometry, zPosition = 50 }: ThreeProp) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scene = new Scene()
        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new WebGLRenderer()

        const material = new MeshBasicMaterial({ color: "#335EFF", wireframe: true })
        const object = new Mesh(geometry, material)

        // 오브젝트 추가
        scene.add(object)
        scene.add(object)

        // 렌더러 크기 세팅
        renderer.setSize(window.innerWidth, window.innerHeight)

        // DOM에 추가
        document.body.appendChild(renderer.domElement)

        // 퀘도 컨트롤
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.update()

        // 카메라 위치
        camera.position.z = zPosition

        //Scene 렌더링
        const animate = () => {
            requestAnimationFrame(animate)

            // 애니메이팅
            object.rotation.x += 0.01
            object.rotation.y += 0.01

            renderer.render(scene, camera)
        }

        animate()

        return () => {
            document.body.removeChild(renderer.domElement)
        }
    }, [geometry, zPosition])

    return containerRef
}

export default useRenderSingle
