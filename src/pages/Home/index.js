import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carrousel from '../../components/Carrousel';
import Footer from '../../components/Footer';


function Home() {
  return (
    <>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />

      <Footer />

    </>
  );
}

export default Home;
