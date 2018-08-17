import React, { } from 'react';

class ListToDo extends React.Component {
    render(){
        
        return(
            <ul>
                {
                    this.props.todoList.map((obj) => (
                        obj.completed ? 
                        <li className="list-group-item clearfix list-group-item-success" key={obj.itemID}><strike><input type="checkbox" id={obj.itemID} value={obj.item} onChange={this.props.onChange} checked/>{obj.item}<br /></strike></li>
                        : <li className="list-group-item clearfix" key={obj.itemID}><b><input type="checkbox" id={obj.itemID} value={obj.item} onChange={this.props.onChange} />{obj.item}</b><br /></li> 
                    ))
                }
            </ul>
        );
    }
}

export default ListToDo;
