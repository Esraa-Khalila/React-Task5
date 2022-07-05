import React, { useContext, useState } from 'react';
import context from './Conte';
import Custome from './Custome';
function Login() {
const [em ,setem]=useState('');
const [pa ,setpa]=useState('');
const [email ,pass , Handlechange] = Custome(em , pa);
const {flag}=useContext(context)
  return (
<div class="container">
  <h2>Login</h2>
  <form>
    <h1></h1>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={e =>setem(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={ps =>setpa(ps.target.value)}/>
    </div>
    <button type="submit" class="btn btn-default" onClick={Handlechange}>Submit</button>
  {flag && <h1>Success</h1>}
    {!flag && <h1>Faild</h1>}
  </form>
</div>
  );
}
export default Login; 
