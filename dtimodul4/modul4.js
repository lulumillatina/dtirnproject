// import React from 'react';
// import{Text,View} from 'react-native'
// const Cat = (props)=> {
//     return(
//         <view>
//             <text> Hello I am {props.name}, my color{props.color}</text>
//         </view>
//     );
// }

// const Cafe=()=>{
//     return(
//         <View>
//             <Cat name="Maru" color="blue"/>
//         </View>
//     )
// }
// export default Cafe;

class Clock extends React.Component{
   // constructor(props){
     //   super(props);
        this.state={date:newDate()};
   // }
    render(date){
        return(
        <View>
            <Text>Hello,world! It is{this.state.date.toLocaleTimeString()} </Text>
        </View>
            );
        }
    }
    
    //ReactDOM.render(<Clock/>,document.getElementById('root'));