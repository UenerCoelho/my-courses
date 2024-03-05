type Hero = {
  name: string;
  vulgo: string;
  phoneNumber: string;
};

function call(hero: Hero):string {
  return 'Ligando para: ' + hero.phoneNumber;
};

call({
  name: 'Steve Rogers',
  vulgo: 'Capitão América',
  phoneNumber: '11 9 3171-3388'
});
