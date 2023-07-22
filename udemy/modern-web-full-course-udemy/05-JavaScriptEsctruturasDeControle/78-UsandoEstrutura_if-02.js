function teste1(num) {
  if (num > 7) {
    console.log(num)
  };
};

teste1(6);
teste1(8);

function teste2(num) {
  if(num > 8); { // Cuidado com o Ponto e Vírgula ';' ao usar em blocos finais de if-else
    console.log(num)
  };
};

teste2(7);
teste2(9);
