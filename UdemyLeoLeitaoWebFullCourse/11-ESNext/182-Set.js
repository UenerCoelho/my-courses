// não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('curintias')
times.add('Flamengo')
times.add('curintias')// não será adicionado, por não aceita repetição

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));// será false, pois está com V minúsculo
console.log(times.has('Vasco'));
times.delete('Flamengo')
console.log(times.has('Flamengo')); // será false, pois foi excluído acima