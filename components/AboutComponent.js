import React, { Component } from 'react';
//import { FlatList, } from 'react-native';
//import { ListItem } from 'react-native-elements';
//import { CAMPSITES } from '../shared/campsites';
import { ScrollView } from 'react-native';


class About extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        title: 'About Us'
    }
    
    render(){
    
        return (
            <ScrollView>

            </ScrollView>
        );
    }
}

export default About;