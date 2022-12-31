const BannerTextLeft = ({ picture = null, title1, title2 = null, text1, text2 = null }) => {
  return (
    <section className="bannerTextLeft">
      {picture !== null ? (
        <img src={picture} alt={title1} className="bannerTextLeft_picture" />
      ) : ('')
      }
      <div className="bannerTextLeft_text">
        <p>
          <span className="bannerTextLeft_text-text1">{text1}</span>
          {text2 !== null ? (
            <span className="bannerTextLeft_text-text2">{text2}</span>
          ) : ('')}
        </p>
        <h3>
          <span className="bannerTextLeft_text-title1">{title1}</span>
          {title2 !== null ? (
            <span className="bannerTextLeft_text-title2">{title2}</span>
          ) : ('')}
        </h3>
      </div>
    </section>
  )
}

export default BannerTextLeft;