import * as actionType from './action';

const initialState = {
    todoList: [],
    item: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.TEXT_CHANGE:
            return{
                ...state,
                item: action.item
            }
        case actionType.SUBMIT:
            const itemObj = {
                item: this.state.item,
                completed: false,
                itemID: this.state.todoList.length
            };
            action.event.preventDefault();
            return{
                ...state,
                todoList: state.todoList.concat(itemObj),
                item: ''
            }
    }
    return state;
}

export default reducer;
