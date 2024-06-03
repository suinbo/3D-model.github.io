import { TetrahedronGeometry } from "three"

/**
 * 3D 사면체
 * @constructor TetrahedronGeometry(radius, detail)
 * @description radius: 반지름, detail: 기본값 0
 */
const tetrahedronGeometry = () => {
    const geometry = new TetrahedronGeometry(15, 0)
    return { geometry }
}

export default tetrahedronGeometry
