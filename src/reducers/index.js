const initialState = {
    menu: []
};
const Reducer =(state=initialState, action)=>{
    switch(action.type){
        case 'MENU_LOADED':
            return {
                menu : action.payload
            }
        default:
            return state;
    }
}
export default Reducer;