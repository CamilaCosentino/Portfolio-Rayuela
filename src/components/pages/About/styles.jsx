import styled from "@emotion/styled";

export const ContainerAbout = styled.div`
  padding-top: 300px;
`;
export const TituloAbout = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size:50px
`;
export const ParrafoAbout = styled.p`
  text-align: center;
`;
export const TitulosS = styled.h3`
  text-align: center;
  margin: 50px 0 30px 0;
  font-size:30px
`;
export const ImageTeam1 = styled.div`
  background-image: url(/res/hay-personas-sin-sentimientos-0_ai1.jpeg);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: fill;
  background-position: 50%;
  background-size: 200% auto;
  border: 1px black;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.8);
  margin: auto;
  :hover{
    filter: sepia(30%);
  }
  
`;

export const ImageTeam4 = styled.div`
  background-image: url(/res/hombre-creido-pensando-que-sabe.jpeg);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: fill;
  background-position: 50%;
  background-size: 200% auto;
  border: 1px black;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.8);
  margin: auto;
  :hover{
    filter: grayscale(50%)
  }

`;
export const ImageTeam2 = styled.div`
  background-image: url(/res/personas-emocionales-wide.jpeg);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: fill;
  background-position: 50%;
  background-size: 200% auto;
  border: 1px black;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.8);
  margin: auto;
  :hover{
    filter:saturate(110%);;
  }
`;
export const ImageTeam3 = styled.div`
  background-image: url(/res/personas_autoritarias_caracteristicas_y_como_tratarlas_4908_600.jpeg);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: fill;
  background-position: 50%;
  background-size: 150% auto;
  border: 1px black;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.8);
  margin: auto;
  :hover{
    filter:hue-rotate(90deg);
  }
`;
export const Nombres = styled.h5`
  text-align: center;
  margin-top: 30px;
`;
export const Icon = styled.i`
font-size:30px;
:hover{
  color:#7B328F;
}
`
export const InfoC = styled.li`

list-style:none;


`
export const Vinculo = styled.a`
text-decoration:none;
font-size:20px;
margin-left:10px;
color:#000;
:hover{
  color:#3D032E
}

`
export const ContLista = styled.ul`
text-align: center;


`
export const Icon2 = styled.i`
font-size:30px;
:hover{
  color:#00B197;
}
`
export const Icon3 = styled.i`
font-size:30px;
:hover{
  color:#FF5A13;
}

`
export const Icon4= styled.i`
font-size:30px;
:hover{
  color:#FFC900;
}
`
