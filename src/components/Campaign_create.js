import React from 'react';
//import {Link} from 'react-router-dom'



function Campaign_create() {
    
  return (
   <div className="content">
       <h1>Create campaign</h1>
    <div className="wrapper">
        
        <div className="title">
          Campaign details
        </div>
        <div className="form">
            
           <div className="col-lg-3">
              <label>Campaign Name</label>
              <input type="text" className="input"/>
           </div>  
            <div className="col-lg-6">
              <label>Ads category</label>
              <input type="text" className="input"/>
           </div>  
           <div className="col-lg-6">
              <label>Budget</label>
              <input type="currency" className="input"/>
           </div>  
          
           <div class="main2">
              <ul><li><a href='Creative.html'>Add Advertisment</a></li></ul>
             
           </div>
    
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Creative Id</th>
                            <th>Heading</th>
                            <th>Cost per sale</th>
                            <th>Creative type</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-lable="Creative Id"></td>
                            <td data-lable="Heading"></td>
                            <td data-lable="Cost per sale"></td>
                            <td data-lable="Creative type"></td>
                            <td data-lable="#" >
                                <div className="img-box">
                                <input type="image" src="eye-regular.png" alt="Submit" width="20" height="20" />
                                <input type="image" src="trash-alt-regular.png" alt="Submit" width="20" height="20" />
                                <input type="image" src="edit-regular.png" alt="Submit" width="20" height="20"/>
                                </div>
                            </td>
                        </tr>
        
                        <tr>
                            <td data-lable="Creative Id"></td>
                            <td data-lable="Heading"></td>
                            <td data-lable="Cost per sale"></td>
                            <td data-lable="Creative type"></td>
                            <td data-lable="#">
                                <div className="img-box">
                                <input type="image" src="eye-regular.png" alt="Submit" width="20" height="20" />
                                <input type="image" src="trash-alt-regular.png" alt="Submit" width="20" height="20" />
                                <input type="image" src="edit-regular.png" alt="Submit" width="20" height="20"/>
                                </div>
                            </td>
                        </tr>
        
                    <tr>
                        <td data-lable="Creative Id"></td>
                        <td data-lable="Heading"></td>
                        <td data-lable="Cost per sale"></td>
                        <td data-lable="Creative type"></td>
                        <td data-lable="#">
                            <div className="img-box">
                            <input type="image" src="eye-regular.png" alt="Submit" width="20" height="20" />
                                <input type="image" src="trash-alt-regular.png" alt="Submit" width="20" height="20" />
                                <input type="image" src="edit-regular.png" alt="Submit" width="20" height="20"/>
                            </div>
                        </td>
                    </tr>
        
                    </tbody>
                </table>
            
            </div>
            <div className="inputfield">
                <input type="submit" value="Save" className="btn-s" />
            </div>
        
        </div>   
    </div>
    </div>	
  )
}

export default Campaign_create;
