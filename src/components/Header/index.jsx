import coverImage from '../../assets/cover/BrandonsBanner.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Brandon Lopez' Portfolio</h1>
      <img src={coverImage} alt="Playa Del Rey Beach"></img>
      {props.children}
    </header>
  );
}

export default Header;
