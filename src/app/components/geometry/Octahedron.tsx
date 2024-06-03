import { OctahedronGeometry } from "three"

/**
 * 3D 팔면체
 */
const octahedronGeometry = () => {
    const geometry = new OctahedronGeometry(15, 0)
    return { geometry }
}

export default octahedronGeometry
