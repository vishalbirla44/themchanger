import React, { useEffect, useState } from 'react'
import { ThemeProider } from './context/Themcontex'
import Card from './componants/Card'
import ThemeBtn from './componants/Btn'


const App = () => {
     const [themeMode ,setthememode] = useState("light")

     const darkTheme  = () =>{
        setthememode("dark")
     }
     const lightTheme  = () =>{
       setthememode("light")
     }

     useEffect(() => {
      document.querySelector('html').classList.remove('light','dark')
      document.querySelector('html').classList.add(themeMode)
     }, [themeMode])
     

  return (
<ThemeProider value = {{themeMode, darkTheme ,lightTheme}}>

    <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
           
           <Card/>
        </div>
    </div>
</div>
</ThemeProider>
  )
  
}

export default App