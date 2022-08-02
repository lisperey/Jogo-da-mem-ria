let game = {

    techs: ['bootstrap',
        'css',
        'github',
        'html',
        'java',
        'javascript',
        'mysql',
        'node',
        'python',
        'react'],


    cards: null,


    createCardsFromTechs: function(techs){

        let cards = [];
    
        for(let tech of techs){
            cards.push(createPairFromTech(tech));
        }
    
        return cards.flatMap(pair => pair);
    
    }
    
    createPairFromTech: function(tech){
    
        return [{
            id: createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }, {
            id: createIdWithTech(tech),
            icon: tech,
            flipped: false,
    
        }]
    
        
    
    }
    
    createIdWithTech: function(tech){
    
        return tech + parseInt(Math.random() *1000)
    
    }

}