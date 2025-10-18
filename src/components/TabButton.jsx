
const TabButton = ({ children, onSelect }) => {

    return (
            <div>
                <li className="mb-2">
                    <button onClick={onSelect} className="p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 duration-500">{children}</button>
                </li>
            </div>
        )
    }

export default TabButton