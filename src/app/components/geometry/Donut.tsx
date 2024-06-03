import { TorusGeometry } from "three"

/**
 * 3D 도넛
 */
const donutGeometry = () => {
    const geometry = new TorusGeometry(10, 3, 16, 100)
    return { geometry }
}

export default donutGeometry
