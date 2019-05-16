import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'office-ui-fabric-react';

class FindEmployee extends React.Component {
  

  render () {
      //console.log(this.props.employee.data);
      if (this.props.employee.data) {
        return (
          <div className="ms-Grid-row">


            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12 textAlignCenter" style={{overflow: 'hidden', backgroundColor: 'lightgrey'}}>

              <figure>
                <Image src={this.props.employee.data.avatar}  style={{width: '100%'}} />
              </figure>

              <p style={{float: 'right', marginRight: '50px' }} ><b>ID:</b> {this.props.employee.data.id}</p>
              
              <p style={{float: 'left', marginLeft: '50px' }}><b>Name:</b> {this.props.employee.data.first_name + ' ' + this.props.employee.data.last_name}</p>

            </div>


          </div>
        );
        
      }
      else {
        return <div>Loading</div>
      }
  };
}

const mapStateToProps = state => {
  return { employee: state.employees };
}


export default connect(mapStateToProps)(FindEmployee);