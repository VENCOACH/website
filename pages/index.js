import Home from './home';

//I make Home component to be able to have it in a folder, together with the module.sass.
// this is a way around since Next.js will always look for the home path in the index of the pages root folder 

export default function index() {
  return (
    <>
      <Home/>
    </>
  )
}

