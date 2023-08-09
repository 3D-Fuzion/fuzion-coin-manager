function AccountContainer (props) { 
  return( 
    <li>
      <div className="container">
        <div className="row">
          <h1>{props.email}</h1>
        </div>
      </div>
    </li>
  )
}

export default AccountContainer