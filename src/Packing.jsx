/* eslint-disable react/prop-types */
function Item({name, isPacked}) {
    return (
        // Contoh penerapan conditional rendering di React
        <li className="item">
            {name} {isPacked ? "✅" : "❎"}
        </li>   
    )
}

export default function Packing() {
    return (
        <ul>
            <Item name="Komputer" isPacked={false} />
            <Item name={"Headset"} isPacked={true} />
        </ul>
    )
}
