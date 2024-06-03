import { CapsuleGeometry } from "three"

/**
 * 3D 캡슐
 */
const capsureGeometry = () => {
    const geometry = new CapsuleGeometry(10, 10, 10, 36)
    return { geometry }
}

export default capsureGeometry
