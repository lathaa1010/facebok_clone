const initialState={
    user:null
};

export const userReducer=(state=initialState, action)=>{
    switch(action.type){
        case "ADD_USER":
            return{
                user:action.payload,
            };

            default:
                return state;
    }
}



