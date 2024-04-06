
function List(props){
    
    const category = props.category;
    const itemList = props.items;
    
//Sort
//fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical
//fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse alphabetical
//fruits.sort((a,b) => a.calories - b.calories);
//Filtering
//const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
//replace fruits with lowCalFruits
//const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>)

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );

}
export default List
