import React from 'react'

const Footer = () => {
  return ( <>
    <hr />
    <br />
    <br />
    <div className="input-emails">
      <p >Subscribe to our emails</p>
      <div ><input style={{width: "300px", height: "40px"}} type="text" placeholder="Email" /></div>
     </div>
    <br />
    {/* <br /> */}
     <hr />
     <div style={{marginLeft: "100px", size:"10", padding: "20px" }}><p>© 2024, Rosh Gallery Powered by Shopify</p></div>
     </>
  )
}

export default Footer;