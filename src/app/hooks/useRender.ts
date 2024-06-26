import { Geometries, Light } from "@/components/geometry"
import { useEffect, useRef } from "react"
import { PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js"

export type ThreePositionProp = {
    [key: string]: number[]
}

/**
 * 3D 렌더링 훅
 * @param geometries
 * @returns containerRef
 */
const useRender = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scene = new Scene()
        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new WebGLRenderer()

        // 화면에 오브젝트 추가
        const geometries = Geometries()
        geometries.forEach((geometry: any) => {
            scene.add(geometry)
        })

        // 렌더러 크기 세팅
        renderer.setSize(window.innerWidth, window.innerHeight)

        // DOM에 추가
        document.body.appendChild(renderer.domElement)

        // 퀘도 컨트롤
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.update()

        // 조명 추가
        const { ambientLight, pointLight } = Light()
        scene.add(ambientLight)
        scene.add(pointLight)

        // 카메라 위치
        camera.position.z = 5

        // Scene 렌더링
        const animate = () => {
            requestAnimationFrame(animate)

            geometries.forEach((geometry: any) => {
                geometry.rotation.x += 0.01
                geometry.rotation.y += 0.01
            })

            renderer.render(scene, camera)
        }

        animate()

        return () => {
            document.body.removeChild(renderer.domElement)
        }
    }, [])

    return containerRef
}

export default useRender
