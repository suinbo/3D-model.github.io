import { ThreeProp } from "@/hooks/useRender"
import { BoxGeometry, MeshBasicMaterial, Mesh } from "three"

/**
 * 3D 박스
 */
const boxGeometry = ({ scene, camera, renderer }: ThreeProp) => {
    // 큐브 생성
    const geometry = new BoxGeometry(1, 1, 1)

    // one color
    // const material = new MeshBasicMaterial({ color: "#335EFF" })

    const materials = [
        new MeshBasicMaterial({ color: 0xff0000 }), // Red
        new MeshBasicMaterial({ color: 0x00ff00 }), // Green
        new MeshBasicMaterial({ color: 0x0000ff }), // Blue
        new MeshBasicMaterial({ color: 0xffff00 }), // Yellow
        new MeshBasicMaterial({ color: 0x00ffff }), // Cyan
        new MeshBasicMaterial({ color: 0xff00ff }), // Magenta
    ]

    const cube = new Mesh(geometry, materials)

    scene.add(cube)

    // 카메라 위치
    camera.position.z = 5

    // Scene 렌더링
    const animate = () => {
        requestAnimationFrame(animate)

        // 큐브 애니메이팅
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        renderer.render(scene, camera)
    }

    animate()
}

export default boxGeometry
