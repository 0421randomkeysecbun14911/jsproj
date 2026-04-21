const vege = 'onion';
vegetableColor(vege);

function vegetableColor(vegetable){
    // if(vegetable === 'tomato'){
    //     console.log('tomato is red!');
    // }else if(vegetable === 'punmpkin'){
    //     console.log('tomato is red!');
    // }
    switch(vegetable){
        case 'tomato':
            console.log('tomato is red!');
            break;
        case 'pumpkin':
            console.log('pumpkin is orange!');
            break;
        case 'onion':
            console.log('onion is white!');
            break;
        default:
            console.log('Not Found');
    }
}