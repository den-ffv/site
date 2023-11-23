import './Policy.scss';


function Policy({ translations }) {
  return (
    <section className="policy">
      <div className="policy__container">
        <div className="policy__title">
          <h1>{translations.policyTitle}</h1>
        </div>
        <div className="policy__text">
          <div className="policy__text-item">
            <p className="main__information">{translations.policyMainText}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyHeadline1}</h2>
            <p className="main__information">{translations.policyText1}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyHeadline2}</h2>
            <p className="main__information">{translations.policyText2}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyHeadline3}</h2>
            <p className="main__information">{translations.policyText3}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyHeadline4}</h2>
            <p className="main__information">{translations.policyText4}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyHeadline5}</h2>
            <p className="main__information">{translations.policyText5}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyHeadline6}</h2>
            <p className="main__information">{translations.policyText6}_1</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyHeadline7}</h2>
            <p className="main__information">{translations.policyText7}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyHeadline8}</h2>
            <p className="main__information">{translations.policyText8}</p>
          </div>
          <div className="policy__text-point">
            <h2>{translations.policyHeadline9}</h2>
            <p className="main__information">{translations.policyText9}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Policy;