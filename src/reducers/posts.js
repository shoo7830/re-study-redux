const posts = (state = [], action) => {
    switch(action.type) {
        case 'ADD_POST': 
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    body: action.body
                }
            
        ]

        default:
            return state;
    }
}

export default posts;