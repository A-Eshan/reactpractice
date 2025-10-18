import reactLogo from '../assets/images/react.png'

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
    return (
      <header className='bg-teal-100 p-4'>
        <img src={reactLogo} className='header-img' alt="" />
        <h1 className='heading'>React Essential</h1>
        <p className='text-center'>{reactDescription[getRandomInt(2)]} React concept you will need for almost any app you are going to build !</p>
      </header>
    )
}

export default Header;