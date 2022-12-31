import React from "react";
import BannerTextLeft from "../Tools/bannerTextLeft";
import BannerTextRight from "../Tools/bannerTextRight";
import Header from "../Tools/header";

const Main = () => {
  return (
    <div>
      <Header
        picture='https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
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
      <section className="main_bubbles">
        <span>DISPONIBLE RAPIDEMENT</span>
        <span>SATISFACTION GARANTIE</span>
        <span>QUALITE OPTIMALE</span>
        <span>SUIVI DE CHANTIER</span>
      </section>
    </div >
  );
}
export default Main;