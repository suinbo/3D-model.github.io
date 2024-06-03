import { Curve, TubeGeometry, Vector3 } from "three"

class CustomSinCurve extends Curve<Vector3> {
    scale: number

    constructor(scale = 1) {
        super()
        this.scale = scale
    }

    getPoint(t: number, optionalTarget = new Vector3()) {
        const tx = t * 3 - 1.5
        const ty = Math.sin(2 * Math.PI * t)
        const tz = 0

        return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale)
    }
}

/**
 * 3D 튜브
 */
const tubeGeometry = () => {
    const path = new CustomSinCurve(10)
    const geometry = new TubeGeometry(path, 50, 3, 20, false)
    return { geometry }
}

export default tubeGeometry
