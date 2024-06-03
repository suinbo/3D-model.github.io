import { BoxGeometry } from "three"

/**
 * 3D 박스
 */
const boxGeometry = () => {
    const geometry = new BoxGeometry(2, 2, 2)
    return { geometry, zPosition: 5 }

    // const materials = [
    //     new MeshBasicMaterial({ color: "#335EFF" }),
    //     new MeshBasicMaterial({ color: "#335EFF" }),
    //     new MeshBasicMaterial({ color: "#c2e9fb" }),
    //     new MeshBasicMaterial({ color: "#c2e9fb" }),
    //     new MeshBasicMaterial({ color: "#a1c4fd" }),
    //     new MeshBasicMaterial({ color: "#a1c4fd" }),
    // ]
}

export default boxGeometry
