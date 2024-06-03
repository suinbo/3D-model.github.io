import { SphereGeometry } from "three"

/**
 * 3D 구
 */
const sphereGeometry = () => {
    const geometry = new SphereGeometry(14, 64, 32)
    return { geometry }
}

export default sphereGeometry
