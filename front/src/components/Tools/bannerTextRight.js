const BannerTextRight = ({ picture = null, title1, title2 = null, text1, text2 = null }) => {
  return (
    <section className="bannerTextRight">
      {picture !== null ? (
        <img src={picture} alt={title1} className="bannerTextRight_picture" />
      ) : ('')
      }
      <div className="bannerTextRight_text">
        <h3>
          <span className="bannerTextRight_text-title1">{title1}</span>
          {title2 !== null ? (
            <span className="bannerTextRight_text-title2">{title2}</span>
          ) : ('')}
        </h3>
        <p>
          <span className="bannerTextRight_text-text1">{text1}</span>
          {text2 !== null ? (
            <span className="bannerTextRight_text-text2">{text2}</span>
          ) : ('')}
        </p>
      </div>
    </section>
  )
}

export default BannerTextRight;