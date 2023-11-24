import './Policy.scss';

function Policy({ translations }) {
  
  return (
    <section className="policy">
      <div className="policy__container">
        <div className="policy__title">
          <h1>{policyItems.policyH1}</h1>
        </div>
        <div className="policy__text">
          {policyItems.policyTextMain}
          <div className="policy__text-point" key="policyH2_1">
            <h2>{policyItems.policyH2_1}</h2>
            <p className="main__information">{policyItems.policyText1}</p>
          </div>
          <div className="policy__text-point" key="policyH2_2">
            <h2>{policyItems.policyH2_2}</h2>
            <p className="main__information">{policyItems.policyText2}</p>
          </div>
          <div className="policy__text-point" key="policyH2_3">
            <h2>{policyItems.policyH2_3}</h2>
            <p className="main__information">{policyItems.policyText3}</p>
          </div>
          <div className="policy__text-point" key="policyH2_4">
            <h2>{policyItems.policyH2_4}</h2>
            <p className="main__information">{policyItems.policyText4}</p>
          </div>
          <div className="policy__text-point" key="policyH2_5">
            <h2>{policyItems.policyH2_5}</h2>
            <p className="main__information">{policyItems.policyText5}</p>
          </div>
          <div className="policy__text-point" key="policyH2_6">
            <h2>{policyItems.policyH2_6}</h2>
            <p className="main__information">{policyItems.policyText6}</p>
          </div>
          <div className="policy__text-point" key="policyH2_7">
            <h2>{policyItems.policyH2_7}</h2>
            <p className="main__information">{policyItems.policyText7}</p>
          </div>
          <div className="policy__text-point" key="policyH2_8">
            <h2>{policyItems.policyH2_8}</h2>
            <p className="main__information">{policyItems.policyText8}</p>
          </div>
          <div className="policy__text-point" key="policyH2_9">
            <h2>{policyItems.policyH2_9}</h2>
            <p className="main__information">{policyItems.policyText9}</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Policy;
