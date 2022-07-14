

// Code Keypad Component Here

function Keypad(){
    return (
      <input 
        type= "password"
        placeholder = "Password"
        onChange={ () => console.log(`Entering password...`)} 

      />
    )
  }
  
  export default Keypad;