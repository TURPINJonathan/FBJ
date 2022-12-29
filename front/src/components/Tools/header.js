const Header = ({ picture, title }) => {
  return (
    <section className="headerBanner">
      <img src={picture} alt={title} className="headerBanner_picture" />
      <h1>{title}</h1>
    </section>
  )
}

export default Header;