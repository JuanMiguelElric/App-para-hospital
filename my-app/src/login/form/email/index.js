
import { Component } from "react";
import { View, TextInput } from "react-native";

class Email extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            validarEmail: false,
        }
    }
    
  

    validarEmail=(Tex) =>{
        console.log(Text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if(reg.test(Text)=== false){
            console.log('Email não está correto');
            this.setState({email : Text})
            return false;
        }
        else{
            this.setState({email:Text})
            console.log("email correto")
        }
    }
    render(){

        return(
            <View>

                <TextInput 
                    placeholder="Email"
                    onChange={(Text)=>this.validarEmail(Text)}
                    value={this.state.email} style={{width:300,height:50, margin:12, backgroundColor:"#8fBeBe", borderRadius:19,paddingLeft:9,}}
                />
    
            </View>
            
            
            )
            
        }
        
    }

export default Email;

