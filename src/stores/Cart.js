
import {defineStore} from 'pinia'
import {ref} from 'vue'


export const useCartStore = defineStore('cartStore',{
    state:()=>({
        cartShop : [],
        guitarras : [
            {
                id:1,
                fabricant:'Tagima',
                image:'VUE-GUITAR-001',
                title:'Guitarra Tagima True Range 7 | 7 Cordas | Multiscale | Inox | Purple (PL)',
                description : 'Guitarra Tagima True Range 7 PL, 7 Cordas, com trastes Multi-Scale, permitem uma pegada mais precisa, para músicos que priorizam velocidade. Desempenho extreme com Tarraxas com trava, e captadores BDB-7 Slant Humbuckers by Zaganin Pickups. Tampo em Imbuia. Disponível na cor Purple (protótipo) A Tagima se destaca como um dos maiores fabricantes nacionais de guitarras, com sua fábrica em Santo André/SP, que atende a todos os requisitos de equipamento, profissionais envolvidos e qualidade de itens, de acordo com os padrões das grandes fábricas no mundo, conforme atestado por nós mesmo da BarraMusic.',
                price: 6250.00,
        
            },
            {
                id:2,
                fabricant:'Giannini',
                image:'VUE-GUITAR-001',
                title:'Guitarra Giannini GMW84 | Masterwood Sonic | 3-Tone Sunburst',
                description : 'Guitarra Giannini GMW84 Pau-Ferro, da linha Masterwood, estilo Tele, fabricada no Brasil, com captação HSS e ferragens Wilkinson, com tampo em Pau-Ferro.<p>Poucas coisas causam tanta ansiedade no mercado de instrumentos musicais quanto o retorno das guitarras Giannini com fabricação nacional – e isso não é modéstia, mas um fato. Tudo jamais poderia ser feito se não tomássemos de antemão os cuidados necessários para apresentar ao público um produto com o esmero que se esperaria de tão aguardada retomada, e que ao mesmo tempo apontasse para o futuro; algo que respeitasse tudo o que já foi construído desde os anos 60 (época de fabricação de nossas primeiras guitarras) e que também trouxesse novidades para quem ansiava não apenas por nostalgia, mas principalmente por qualidade.</p>',
                price: 3936.63,
        
            },
            {
                id:3,
                fabricant:'Giannini',
                image:'VUE-GUITAR-001',
                title:'Guitarra Giannini GMW84 | Masterwood Sonic | 3-Tone Sunburst',
                description : 'Guitarra Giannini GMW84 Pau-Ferro, da linha Masterwood, estilo Tele, fabricada no Brasil, com captação HSS e ferragens Wilkinson, com tampo em Pau-Ferro.<p>Poucas coisas causam tanta ansiedade no mercado de instrumentos musicais quanto o retorno das guitarras Giannini com fabricação nacional – e isso não é modéstia, mas um fato. Tudo jamais poderia ser feito se não tomássemos de antemão os cuidados necessários para apresentar ao público um produto com o esmero que se esperaria de tão aguardada retomada, e que ao mesmo tempo apontasse para o futuro; algo que respeitasse tudo o que já foi construído desde os anos 60 (época de fabricação de nossas primeiras guitarras) e que também trouxesse novidades para quem ansiava não apenas por nostalgia, mas principalmente por qualidade.</p>',
                price: 3936.63,
        
            },
        ]

    }),
    actions:{
        addGuitarras(guitarra){                 
            return this.cartShop.push(guitarra)            
        }
    },
    getters:{
        totalCart(state){
           return state.cartShop.lenght;
        }
    }

    
})