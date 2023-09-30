const List = ({ props, handleToggle }) => {
    const data = props ? props : [];
    return (
        <div className="listContainer">
            {data.map((item) => {
                return (
                    <div key={item} >
                        <input type="checkbox" onChange={() => handleToggle(item)} />
                        <label>{item}</label>
                    </div>
                )
            })}
        </div>
    )
};
export default List;