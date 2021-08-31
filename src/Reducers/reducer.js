export const initialState ={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //token:'BQAipbOto9wYeFIs6S99QD26K1imIkKRaOBEFxvQeFRQtuc7EW2St2TO2iiKUh2mpusf7gZ99X5_kOLWfb8ydFB0gwp52LhfD39Eab-oBKAR9P6iAny9X2fJIlaW7-OgwjTjLi5cImxz-tCNNaxZwp34qtCzFD7ZRKW0N9ZQujIu8SIn',
}

const reducer = (state,action) => {
    console.log(action); 

    switch(action.type)
    {
        case 'SET_USER':
            return{
                ...state,
                user:action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token,
            }; 
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,
            };       
        case 'SET_DICOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly,    
            }
        default:
            return state;    
    }
}
export default reducer;
