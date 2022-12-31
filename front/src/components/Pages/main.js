import React from "react";
import BannerTextLeft from "../Tools/bannerTextLeft";
import BannerTextRight from "../Tools/bannerTextRight";
import Header from "../Tools/header";

const Main = () => {
  return (
    <div>
      <Header
        picture='https://via.placeholder.com/300'
        title='Lorem Ipsum Dolor Sit Amet'
      />
      <h2>
        <span>Confiez votre projet à</span>
        <span>plus de deux générations d'expertise</span>
      </h2>
      <BannerTextRight
        picture='https://static.wixstatic.com/media/6054f1_c8cc027f96ef4bb38a735a2b61003ea4~mv2.jpeg/v1/fill/w_540,h_719,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6054f1_c8cc027f96ef4bb38a735a2b61003ea4~mv2.jpeg'
        title1='Prix concurrentiels'
        title2='Devis gratuits'
        text1='La transparence est pour nous importante.'
        text2='Notre devise : vos rêves à portés de votre portefeuille.'
      />
      <BannerTextLeft
        title1='Notre priorité'
        title2='La qualité'
        text1='LOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMETLOREM IPSUM DOLOR SIT AMET'
      />
    </div >
  );
}
export default Main;