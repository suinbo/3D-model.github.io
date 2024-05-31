import { ThreeProp } from "@/hooks/useRender"
import { Mesh, MeshBasicMaterial, TetrahedronGeometry } from "three"

/**
 * 3D 사면체
 * @constructor TetrahedronGeometry(radius, detail)
 * @description radius: 반지름, detail: 기본값 0
 */
const tetrahedronGeometry = ({ scene, camera, renderer }: ThreeProp) => {
    const geometry = new TetrahedronGeometry(15, 1)
    const material = new MeshBasicMaterial({ color: "#335EFF", transparent: true, opacity: 0.5, wireframe: true })
    const polyhedron = new Mesh(geometry, material)

    scene.add(polyhedron)

    camera.position.z = 50

    // Scene 렌더링
    const animate = () => {
        requestAnimationFrame(animate)

        // 애니메이팅
        polyhedron.rotation.x += 0.01
        polyhedron.rotation.y += 0.01

        renderer.render(scene, camera)
    }

    animate()
}

export default tetrahedronGeometry
