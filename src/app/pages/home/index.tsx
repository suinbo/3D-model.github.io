import ThreeDimension from "../3D"
import React, { useState } from "react"
import ThreeDimensions from "../geometires"
import { Box, Capsule, Donut, Octahedron, Sphere, Tetrahedron, Tube } from "@/components/geometry"
import "./style.scss"

const Home = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [active3D, setActive3D] = useState<string>("Box")

    const singles: { [key: string]: React.ReactElement } = {
        Box: <ThreeDimension value={Box()} />,
        Tetrahedron: <ThreeDimension value={Tetrahedron()} />,
        Octahedron: <ThreeDimension value={Octahedron()} />,
        Sphere: <ThreeDimension value={Sphere()} />,
        Capsure: <ThreeDimension value={Capsule()} />,
        Donut: <ThreeDimension value={Donut()} />,
        Tube: <ThreeDimension value={Tube()} />,
        Geometries: <ThreeDimensions />,
    }

    const renderSingleList = () =>
        Object.keys(singles).map(title => (
            <li className="item" key={title} onClick={() => setActive3D(title)}>
                {title}
            </li>
        ))

    return (
        <>
            <span className="opener" onClick={() => setOpen(!open)}>
                {open ? "▶" : "◀"}
            </span>
            {open && (
                <div className="navigation">
                    <ul>{renderSingleList()}</ul>
                </div>
            )}
            {singles[active3D]}
        </>
    )
}

export default Home
