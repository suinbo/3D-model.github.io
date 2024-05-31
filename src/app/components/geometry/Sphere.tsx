import { ThreeProp } from "@/hooks/useRender"
import { MeshBasicMaterial, Mesh, SphereGeometry } from "three"

/**
 * 3D 구
 */
const sphereGeometry = ({ scene, camera, renderer }: ThreeProp) => {
    const geometry = new SphereGeometry(15, 64, 32)
    const material = new MeshBasicMaterial({ color: "#335EFF", transparent: true, opacity: 0.5, wireframe: true })
    const sphere = new Mesh(geometry, material)

    scene.add(sphere)

    camera.position.z = 50

    // Scene 렌더링
    const animate = () => {
        requestAnimationFrame(animate)

        // 애니메이팅
        sphere.rotation.x += 0.01
        sphere.rotation.y += 0.01

        renderer.render(scene, camera)
    }

    animate()
}

export default sphereGeometry
