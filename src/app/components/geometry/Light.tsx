import { AmbientLight, PointLight } from "three"

const Light = () => {
    // 조명 추가
    const ambientLight = new AmbientLight(0x404040) // 은은한 환경광
    const pointLight = new PointLight(0xffffff, 700, 300)

    pointLight.position.set(10, 10, 10)

    return { ambientLight, pointLight }
}

export default Light
