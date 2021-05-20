var automoveis = 'limousine'
switch(automoveis){
    case 'hatch':
        console.log('Compra efetuada com sucesso')
        break
    case 'sedam':
    case 'motocicleta':
    case 'caminhonete':
        console.log('Tem certeza que prefere este modelo?')
        break;
    default:
        console.log('Não trabalhamos com esse modelo aqui')
}