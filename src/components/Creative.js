import React from 'react';

function Creative() {
  return(
   <div>
      <h1>Ad preferences</h1>
      <div class="wrapper">
         <div class="form">
            
            <div class="col-lg-3">
               <label>Heading</label>
               <input type="text" class="input"/>
            </div>  
            
            <div class="col-lg-6">
               <label>Cost per sale</label>
               <input type="text" class="input"/>
            </div>  
            <div class="col-lg-6">
               <label>Destination URL</label>
               <input type="currency" class="input"/>
            </div>
            <label>Creative type</label>
            <div class="group">
               <input type="checkbox" id="xd" />
               <label for="xd">Single Image</label>
            </div>
            <div class="group">
               <input type="checkbox" id="xd" />
               <label for="xd">Single Image</label>
            </div>
            <div class="group">
               <input type="checkbox" id="xd" />
               <label for="xd">Single Image</label>
            </div>
      
            <div class="inputfield">
               <label>Description</label>
               <textarea class="textarea"></textarea>
            </div>
            <label>Upload Thumbnail media</label>
            <div class="drag-area">
                  <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
                  <header>Drag & Drop to Upload File</header>
                  <span>OR</span>
                  <button>Browse File</button>
                  <input type="file" hidden/>
            </div>
                  
            <label>Upload media</label>
            <div class="drag-area">
                  <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>
                  <header>Drag & Drop to Upload File</header>
                  <span>OR</span>
                  <button>Browse File</button>
                  <input type="file" hidden/>
            </div>
                     
            
            <div className="inputfield">
              <input type="submit" value="Submit" className="btn-s" />
            </div>
         </div>
      
      
      </div>
   </div>
  );
}

export default Creative;
