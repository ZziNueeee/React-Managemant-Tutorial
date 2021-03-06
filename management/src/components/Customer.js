import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt=''/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
            </TableRow>
        );
    }
}



export default Customer;
// class CustomerProfile extends React.Component{
//     render() {
//         return(
//             <div>
//                 <img src={this.props.image} alt="profile"/>
//                 <h2>{this.props.name}({this.props.id})</h2>
//             </div>
//         )
//     }
    
// }

// class CustomerInfo extends React.Component{
//     render(){
//         return(
//             <div>
//                  <h2>{this.props.birthday}</h2>
//             </div>            
//         )
//     }
// }

