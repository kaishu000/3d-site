
const Ability = () => {
    return (
        <div id="ability" className="text-white w-full h-screen grid justify-items-end items-center snap-start z-10 pr-24">
            <div className="w-1/2 h-screen grid items-center content-center">
                <h1 className="text-6xl font-bold">Ability</h1>
                <hr className="my-2" />
                <h2 className="text-4xl mt-8 mb-4">
                    01. Triple-Core Propulsion System
                </h2>
                <p>
                    1 Main Engine | 2 Sub-Engines
                    The high-power Arc Core main engine is located in the center, with two independent sub-engines mounted on each wing. This configuration combines linear acceleration with sharp turning performance that defies the laws of physics.
                </p>
                <span>
                    Tech Note: Dynamically adjusting the sub-engine power ratio enables optimal attitude control in both the atmosphere and outer space.
                </span>
                <h2 className="text-4xl mt-8 mb-4">
                    02. Vanguard Tactical Ordnance
                </h2>
                <p>
                    4 Homing Micro Missiles
                    Four guided missiles stored under the fuselage can simultaneously acquire up to four targets using a multi-lock-on system. They feature highly accurate ballistic calculations designed to neutralize targets rather than deliver a one-hit kill.
                </p>
                <span>
                    Spec: AI analyzes the targets heat signature and approaches from an unavoidable angle.
                </span>
                <h2 className="text-4xl mt-8 mb-4">
                    03. Kinetic Suppression Unit
                </h2>
                <p>
                    Repeat-Fire Machine Gun (Built-in Nose)
                    This high-velocity machine gun is designed for precision interception and close-quarters defense. Its bullets are made of a special alloy that minimizes friction, allowing for pinpoint firing from mid-range, making it the perfect weapon to experience Aurora Dynamics' signature precision engineering.
                </p>
            </div>
        </div>
    );
}

export default Ability;