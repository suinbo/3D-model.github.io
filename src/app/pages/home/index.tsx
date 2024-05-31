import ThreeDimension from "../3D"
import React, { useState } from "react"
import { Box, Sphere, Tetrahedron } from "@/components/geometry"
import "./style.scss"

const Home = () => {
    const [active3D, setActive3D] = useState<string>("box")

    const items: { [ley: string]: React.ReactElement } = {
        box: <ThreeDimension renderFn={Box} />,
        sphere: <ThreeDimension renderFn={Sphere} />,
        polyhedron: <ThreeDimension renderFn={Tetrahedron} />,
    }

    const renderList = () =>
        Object.keys(items).map(title => (
            <li className="item" key={title} onClick={() => setActive3D(title)}>
                {title}
            </li>
        ))

    return (
        <>
            <div className="navigation">
                <ul>{renderList()}</ul>
            </div>
            {items[active3D]}
        </>
    )
}

export default Home
