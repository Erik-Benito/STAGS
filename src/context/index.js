import { createContext, useContext, useReducer } from "react";


const reducer  = (state, action) => {
    switch (action.type) {
      
        case 'setTitle'          : 
            return {...state, item: {...state.item, title:       action.title       }}               
            
        case 'setId'          : 
            return {...state, item: {...state.item, id:        action.id             }}               
    

        case 'setDescription'    : 
            return {...state, item: {...state.item, description: action.description }}        
        

        case 'setCompleted'      : 
            return {...state, item: {...state.item, completed:   action.completed   }}         
        

        case 'setAddactivitie'   : 
            return {
                item: {
                        ...initialState.item, 
                        id: state.item.id + 1 
                }, 
                activities: [
                    ...state.activities, 
                    {
                        ...action.item, 
                        id: state.item.id 
                    }
                ]
            }       
        
        case 'setUpdateActivitie': 
            return {
                item: {
                    ...initialState.item, 
                    id: state.item.id 
                }, 
                activities: [
                    ...state.activities.filter(item => item.id !== action.item.id), 
                    action.item
                ]
            }    
        
        case 'setRemoveActivitie': 
            return {
                item: {
                    ...initialState.item, 
                    id: state.item.id 
                }, 
                activities: [
                    ...state.activities.filter(item => item.id !== action.id)
                ]
            }    
              
        default: return {...state} 
    }
}

const ActivitiesContext = createContext()

const initialState = {
    item: {
        id: 0,
        title: '',
        description: '',
        completed: false,
    },
    activities: []
}


export default function ActivitiesProvider(props) {
    
    const [ activitieState, setActivitieState ] = useReducer(reducer, initialState)

    console.log(activitieState)
     return (
       <ActivitiesContext.Provider value={{ activitieState, setActivitieState }}>
         {props.children}
       </ActivitiesContext.Provider>
     )
   
    }

 export function UseActivitiesContext() {
     const context = useContext(ActivitiesContext);
 
     const { activitieState, setActivitieState } = context
 
     return {
        activitieState,
        setTitle:               (title)       => setActivitieState({type: 'setTitle'      , title       }),
        setId:                  (id)          => setActivitieState({type: 'setId'           , id       }),
        setDescription:         (description) => setActivitieState({type: 'setDescription', description }),
        setCompleted:           (completed)   => setActivitieState({type: 'setCompleted'  , completed   }),
        setAddactivitie:        (item)        => setActivitieState({type: 'setAddactivitie'   , item   }),
        setUpdateActivitie:     (item)        => setActivitieState({type: 'setUpdateActivitie', item   }),
        setRemoveActivitie:     (id)          => setActivitieState({type: 'setRemoveActivitie', id      }),
    }
 }