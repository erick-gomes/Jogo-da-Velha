const url = '../'

let query = location.search.slice(1);
let partes = query.split('&');
let data = {};
partes.forEach(function (parte) {
    let Valor = parte.split('=')
    let chave = Valor[0]
    let valor = Valor[1]
    data[chave] = valor
})

let mode = data.mode
mode == 0 ? mode = 'easy' : mode = 'hard'
//array de canvas marcados ou não
let Dir =
{
    0: {mark: false}, //0
    1: {mark: false}, //1
    2: {mark: false}, //2 =========== row 1
    3: {mark: false}, //3
    4: {mark: false}, //4
    5: {mark: false}, //5 =========== row 2
    6: {mark: false}, //6
    7: {mark: false}, //7
    8: {mark: false}  //8 =========== row 3
}

let Jogador = []

//funcionalidades
const methods = {
    easy: (tid) => {
                         
        let ram = tid
        let i = 0
        while(Dir[ram]["mark"]){
            ram = Math.round(Math.random() * 8)
            i++
            if(i >= 500){return true}
        }
        Dir[ram]["mark"] = true
        Jogador[ram] = false
        let botId = document.getElementById(ram)
        canvaC(botId)
        if(Win(false)){
            let conf = confirm(`O bot ganhou a partida.\nDeseja recomeçar uma nova partida ou continuar navegando?`)
            if(conf){location.replace(url)}
            return
        }                
    },
    hard: (tid) => {                                       
        let position = tid                                                                        
        let fuga = false
        /*
        -- JorB define se ele vai verificar a vitória do jogador ou do bot(true = J e false = B)
        -- NumJ define o número de marcações do jogador
        -- NumB define o número de marcações do bot
        */
        function revidar(JorB, NumJ, NumB){
            let linhas = {
                0: [],
                1: [],
                2: []
            }
            let colunas = {
                0: [],
                1: [],
                2: []
            }
            let diagonais = {
                0: [],
                1: []
            }
            //Forma inteligente de descobrir se deve ou não marcar a caixa
            //l0
            linhas[0] = [Jogador[0], Jogador[1], Jogador[2]]

            let countL0 = 0
            let countBotL0 = 0
            for (const iterator of linhas[0]) {
                if(iterator){
                    countL0++
                }
                if(iterator == false){
                    countBotL0++
                }
            }
            if(countL0 == NumJ && countBotL0 == NumB){
                TestMarkup = function () {
                    for (let index = 0; index <= 2; index++) {
                        if (!(Jogador[index] == JorB)) {
                            return index
                        }
                    }
                }
                position = TestMarkup()
                return
            }
            //l1
            linhas[1] = [Jogador[3], Jogador[4], Jogador[5]]
            let countL1 = 0
            let countBotL1 = 0
            for (const iterator of linhas[1]) {
                if(iterator){
                    countL1++
                }
                if(iterator == false){
                    countBotL1++
                }
            }
            if(countL1 == NumJ && countBotL1 == NumB){
                TestMarkup = function () {
                    for (let index = 3; index <= 5; index++) {
                        if (!(Jogador[index] == JorB)) {
                            return index
                        }
                    }
                }
                position = TestMarkup()
                return
            }
            //l2
            linhas[2] = [Jogador[6], Jogador[7], Jogador[8]]
            let countL2 = 0
            let countBotL2 = 0
            for (const iterator of linhas[2]) {
                if(iterator){
                    countL2++
                }
                if(iterator == false){
                    countBotL2++
                }
            }
            if(countL2 == NumJ && countBotL2 == NumB){
                TestMarkup = function () {
                    for (let index = 6; index <= 8; index++) {
                        if (!(Jogador[index] == JorB)) {
                            return index
                        }
                    }
                }
                position = TestMarkup()
                return
            }
            //=================================================
            //c0
            colunas[0] = [Jogador[0], Jogador[3], Jogador[6]]
            let countC0 = 0
            let countBotC0 = 0
            for (const iterator of colunas[0]) {
                if(iterator){
                    countC0++
                }
                if(iterator == false){
                    countBotC0++
                }
            }
            if(countC0 == NumJ && countBotC0 == NumB){
                TestMarkup = function () {
                    for (let index = 0; index <= 6; index += 3) {
                        if (!(Jogador[index] == JorB)) {
                            return index
                        }
                    }
                }
                position = TestMarkup()
                return
            }
            //c1
            colunas[1] = [Jogador[1], Jogador[4], Jogador[7]]
            let countC1 = 0
            let countBotC1 = 0
            for (const iterator of colunas[1]) {
                if(iterator){
                    countC1++
                }
                if(iterator == false){
                    countBotC1++
                }
            }
            if(countC1 == NumJ && countBotC1 == NumB){
                TestMarkup = function () {
                    for (let index = 1; index <= 7; index += 3) {
                        if (!(Jogador[index] == JorB)) {
                            return index
                        }
                    }
                }
                position = TestMarkup()
                return
            }
            //c2
            colunas[2] = [Jogador[2], Jogador[5], Jogador[8]]
            let countC2 = 0
            let countBotC2 = 0
            for (const iterator of colunas[2]) {
                if(iterator){
                    countC2++
                }
                if(iterator == false){
                    countBotC2++
                }
            }
            if(countC2 == NumJ && countBotC2 == NumB){
                TestMarkup = function () {
                    for (let index = 2; index <= 8; index += 3) {
                        if (!(Jogador[index] == JorB)) {
                            return index
                        }
                    }
                }
                position = TestMarkup()
                return
            }
            //==================================================
            //d0
            diagonais[0] = [Jogador[0], Jogador[4], Jogador[8]]
            let countD0 = 0
            let countBotD0 = 0
            for (const iterator of diagonais[0]) {
                if(iterator){
                    countD0++
                }
                if(iterator == false){
                    countBotD0++
                }
            }
            if(countD0 == NumJ && countBotD0 == NumB){
                TestMarkup = function () {
                    for (let index = 0; index <= 8; index += 4) {
                        if (!(Jogador[index] == JorB)) {
                            return index
                        }
                    }
                }
                position = TestMarkup()
                return
            }
            //d1
            diagonais[1] = [Jogador[2], Jogador[4], Jogador[6]]
            let countD1 = 0
            let countBotD1 = 0
            for (const iterator of diagonais[1]) {
                if(iterator){
                    countD1++
                }
                if(iterator == false){
                    countBotD1++
                }
            }
            if(countD1 == NumJ && countBotD1 == NumB){
                TestMarkup = function () {
                    for (let index = 2; index <= 6; index += 2) {
                        if (!(Jogador[index] == JorB)) {
                            return index
                        }
                    }
                }
                position = TestMarkup()
                return
            }
            
        }
        function IsPar(num){
            const n = num % 2
            if(n == 0){return true}
            else{return false}
        }
        let infinitPar = 0
        do{
            fuga = false
            position = Math.round(Math.random() * 8)
            if(tid == 4 && IsPar(position) == false){
                fuga = true
            }
            if(Dir[position]["mark"] == true){
                fuga = true
                for (const p in Dir) {
                    if(!Dir[p]["mark"]){break}
                    if(p == 8){return true}
                }
            }
            revidar(true, 2, 0)
            revidar(false, 0, 2)
            infinitPar++
            if(infinitPar > 20){break}
        }while(fuga)

        try {
            Dir[position]["mark"] = true
        } catch (error) {
            return true
        }
        Jogador[position] = false
        let botId = document.getElementById(position)
        canvaC(botId)
        setTimeout(function () {
            if(Win(false)){
                let conf = confirm(`O bot ganhou a partida.\nDeseja recomeçar uma nova partida ou continuar navegando?`)
                if(conf){location.replace(url)}
                return
            }
        }, 50)  
    },
    rendX: (cvas) => {
        const cva = cvas.getContext('2d')
        cva.moveTo(10, 10)
        cva.lineTo(70, 70)
        //==================
        cva.moveTo(70, 10)
        cva.lineTo(10, 70)
        cva.stroke()
    },
    rend0: (cvas) => {
        const cva = cvas.getContext('2d')
        cva.beginPath()
        cva.arc(40, 40, 35, 0, Math.PI * 2)
        cva.stroke()
    },
    possibilidades: (m, t, a) => {
        const ary = {
            1: () => {
                if((t[0] && Jogador[0] == a)
                && (t[1] && Jogador[1] == a)
                && (t[2] && Jogador[2] == a)){
                    return true
                }
            },
            2: () => {
                if((t[3] && Jogador[3] == a)
                && (t[4] && Jogador[4] == a)
                && (t[5] && Jogador[5] == a)){
                    return true
                }
            },
            3: () => {
                if((t[6] && Jogador[6] == a)
                && (t[7] && Jogador[7] == a)
                && (t[8] && Jogador[8] == a)){
                    return true
                }
            },
            4: () => {
                if((t[0] && Jogador[0] == a)
                && (t[3] && Jogador[3] == a)
                && (t[6] && Jogador[6] == a)){
                    return true
                }
            },
            5: () => {
                if((t[1] && Jogador[1] == a)
                && (t[4] && Jogador[4] == a)
                && (t[7] && Jogador[7] == a)){
                    return true
                }
            },
            6: () => {
                if((t[2] && Jogador[2] == a)
                && (t[5] && Jogador[5] == a)
                && (t[8] && Jogador[8] == a)){
                    return true
                }
            },
            7: () => {
                if((t[0] && Jogador[0] == a)
                && (t[4] && Jogador[4] == a)
                && (t[8] && Jogador[8] == a)){
                    return true
                }
            },
            8: () => {
                if((t[2] && Jogador[2] == a)
                && (t[4] && Jogador[4] == a)
                && (t[6] && Jogador[6] == a)){
                    return true
                }
            }
        }
        let iter = ary[m]
        let rtn = iter()
        if(rtn){return true}
    },
    Win: (arg) => {
        let test = []
        for(item in Dir){
            for(it in Dir[item]){
                test.push(Dir[item][it])
            }
        }
        for(i = 1; i <= 8; i++){
            let comp = poss(i,test,arg)
            if(comp){return true}
        }
    }
}

//evento click do canva
let markup = null
const canva = methods["rendX"]
const canvaC = methods["rend0"]
const Win = methods["Win"]
const poss = methods["possibilidades"]
const bot = methods[mode]

document.addEventListener('click', clecker)
function clecker(e){
    e = e.toElement
    if(!(parseInt(e.id) >= 0)){return}
    let num = Dir[e.id]
    if(num["mark"]){return}
    markup = e
    num["mark"] = true
    Jogador[e.id] = true
    canva(e)
    setTimeout(function () {
        if(Win(true)){
            let conf = confirm(`Você ganhou a partida.\nDeseja recomeçar uma nova partida ou continuar navegando?`)
            if(conf){location.replace(url)}
            return
        }
        if(bot(e.id)){
            let conf = confirm(`Deu velha, ninguém ganhou a partida.\nDeseja recomeçar uma nova partida ou continuar navegando?`)
            if(conf){location.replace(url)}
            return
        }
    }, 50)                        
}