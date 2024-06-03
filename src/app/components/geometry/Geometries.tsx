import { BoxGeometry, CapsuleGeometry, Mesh, MeshStandardMaterial, SphereGeometry } from "three"

const Geometries = () => {
    const createGeometry = (type: string, color: string, position: [number, number, number]) => {
        let geometry
        const material = new MeshStandardMaterial({ color })

        switch (type) {
            case "box":
                geometry = new BoxGeometry()
                break
            case "sphere":
                geometry = new SphereGeometry(0.5, 32, 32)
                break
            case "capsule":
                geometry = new CapsuleGeometry(0.5, 1, 10, 36)
                break
            default:
                console.error("Invalid geometry type")
                return null
        }

        const mesh = new Mesh(geometry, material)
        mesh.position.set(...position)
        return mesh
    }

    const box = createGeometry("box", "#ffc500", [-2, 0, 0])
    const sphere = createGeometry("sphere", "#0ABFBC", [0, 0, 0])
    const capsule = createGeometry("capsule", "#8360c3", [2, 0, 0])

    return [box, sphere, capsule]
}

export default Geometries
