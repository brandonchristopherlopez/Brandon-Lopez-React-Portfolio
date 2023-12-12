function Footer() {

  const icons = [
    {
      name: "GitHub",
      link: "https://github.com/brandonchristopherlopez"
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/brandonchristopherlopez"
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/brandonmufulopez/"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
