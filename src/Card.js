import React from 'react';
const Card = () =>{
  return(
    <div >
      <div class="card text-white bg-primary mb-3" style={{width: 400, display: 'inline-flex', margin:20}}>
  <div class="card-header">Card 01</div>
  <div class="card-body">
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-white bg-secondary mb-3" style={{width: 400, display: 'inline-flex', margin:20}}>
  <div class="card-header">Card 01</div>
  <div class="card-body">
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card text-white bg-success mb-3" style={{width: 400, display: 'inline-flex', margin:20}}>
  <div class="card-header">Card 01</div>
  <div class="card-body">
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
  );
}
export default Card;