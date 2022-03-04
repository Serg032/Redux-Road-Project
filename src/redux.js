import React from "react"

const Redux = () => {
    const initialWagonState = {
        supplies: 100,
        distance: 0,
        days: 0,
        cash: 200,
      }
      
      const wagonReducer = (state = initialWagonState, action) => {
        switch (action.type) {
          case 'gather':
            return {
              ...state,
              supplies: state.supplies + 15,
              days : state.days + 1,
            }
          case 'travel':
          if (state.supplies < 20){
            return{
              ...state
            }
          }else {
            return {
              ...state,
              supplies: state.supplies - (20 * action.payload),
              distance: state.distance + (10 * action.payload),
              days: state.days + action.payload,
            }
          }
            
          case 'tippedWagon':
            return {
              ...state,
              supplies: state.supplies - 30,
              days: state.days + 1,
            }
          case 'sell':
            if (state.supplies < 20){
              return{
                ...state
              }
            } else {
              return {
                ...state,
                supplies: state.supplies - 20,
                cash: state.cash + 5,
              }
            }
          case 'buy':
            if (state.cash < 15) {
              return {
                ...state
              }
            } else {
              return {
                ...state, 
                supplies: state.supplies + 25,
                cash: state.cash - 15,
              }
            }
          default: {
            return state
          }
        }
      }
      
      let wagon = wagonReducer(undefined, {})
      console.log(wagon)
      console.log("")
      
      wagon = wagonReducer(wagon, ({type: 'travel', payload: 1}))
      console.log('First day Travelling')
      console.log(wagon)
      console.log("")
      
      wagon = wagonReducer(wagon, ({type: 'gather'}))
      console.log('Second day Travelling')
      console.log(wagon)
      console.log("")
      
      wagon = wagonReducer(wagon, ({type: 'tippedWagon'}))
      console.log('Third day Travelling')
      console.log(wagon)
      console.log("")
      
      wagon = wagonReducer(wagon, ({type: 'travel', payload: 3}))
      console.log('Fourth day Travelling')
      console.log(wagon)
      console.log("")
      
      wagon = wagonReducer(wagon, ({type: 'gather'}))
      console.log('Gathering')
      console.log(wagon)
      console.log("")
      
      wagon = wagonReducer(wagon, ({type: 'gather'}))
      console.log('Gathering x2')
      console.log(wagon)
      console.log("")
      
      wagon = wagonReducer(wagon, ({type: 'sell'}))
      console.log('Selling Supplies')
      console.log(wagon)
      console.log("")
      
      wagon = wagonReducer(wagon, ({type: 'buy'}))
      console.log('Buying Supplies')
      console.log(wagon)
      console.log("")
      
      wagon = wagonReducer(wagon, ({type: 'buy'}))
      console.log('Buying Supplies2')
      console.log(wagon)
      console.log("")

      return(
          <div></div>
      )
}

export default Redux


  
  