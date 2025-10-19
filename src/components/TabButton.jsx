
const TabButton = ({ children, onSelect, isSelected }) => {

    return (
            <div>
                <li className="mb-2">
                    <button onClick={onSelect} className={ isSelected ? 'active' : undefined }>{children}</button>
                </li>
            </div>
        )
    }

export default TabButton