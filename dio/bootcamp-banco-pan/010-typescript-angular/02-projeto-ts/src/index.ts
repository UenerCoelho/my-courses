type Hero = {
  name: string;
  vulgo: string;
};

function printObjects(person: Hero){
  console.log(person)
}

printObjects({
  name: 'Bruce Wayne',
  vulgo: 'Batman',
});

