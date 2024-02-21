const List = () => {
    const items = [{
        id: 1,
        name: 'João Víctor'
    }, {
        id: 2,
        name: 'Pedro'
    }, {
        id: 3,
        name: 'Ellen'
    }]

    return (
        <div className="Lista">
            {items.map(item => (
                <p key={item.id}>
                    {item.id} - {item.name}
                </p>
            ))}
        </div>
    )
}

export default List;