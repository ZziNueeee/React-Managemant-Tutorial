import './App.css';
import { Component } from 'react';
import Customer from './components/Customer'


const customers = [
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',  
  'name':'홍길동',
  'birthday':'961222'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',  
  'name':'나동빈',
  'birthday':'940228'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',  
  'name':'장지연',
  'birthday':'011210'
}
]


// class App extends Component{
//   render() {
//     return (
//       <div>
//       <Customer
//         id={customer[0].id}
//         image={customer[0].image}
//         name={customer[0].name}
//         birthday={customer[0].birthday}
//       />
//       <Customer
//       id={customer[1].id}
//       image={customer[1].image}
//       name={customer[1].name}
//       birthday={customer[1].birthday}
//       />
//       <Customer
//       id={customer[2].id}
//       image={customer[2].image}
//       name={customer[2].name}
//       birthday={customer[2].birthday}
//       />
//   </div>
//     );
//   }
// }

class App extends Component{
  render() {
    return (
      <div>
        {
          customers.map(c=> {
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
            />
            );
          })
        }
      </div>
    )
  }
}

export default App;
