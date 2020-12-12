<?php
    if($_SERVER["REQUEST_METHOD"] != "POST"){
        header('Location: ../index.php');
    }
    $option = $_POST['mode'];
?>


<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jogo da Velha</title>
        <link rel="stylesheet" href="../css/estilos.css">
        <script>
            <?php if($option == 'easy'): ?>
                const mode = 'easy'
            <?php else: ?>
                const mode = 'hard'
            <?php endif; ?>
            //array de canvas marcados ou não
            let Dic =
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
            const url = 'http://localhost/'
            let Jogador = []

            //funcionalidades
            const methods = {
                easy: (tid) => {
                                     
                    let ram = tid
                    let i = 0
                    while(Dic[ram]["mark"]){
                        ram = Math.round(Math.random() * 8)
                        i++
                        if(i >= 500){return true}
                    }
                    Dic[ram]["mark"] = true
                    Jogador[ram] = false
                    let botId = document.getElementById(ram)
                    canvaC(botId)
                    if(Win(false)){
                        let conf = confirm(`O bot ganhou a partida.\nDeseja recomeçar uma nova partida ou continuar navegando?`)
                        if(conf){location.replace(url)}
                        return
                    }                
                },
                hard: () => {
                    console.log('testehard')
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
                    for(item in Dic){
                        for(it in Dic[item]){
                            test.push(Dic[item][it])
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
            function clecker(e){
                
                const bot = methods[mode]
                let num = Dic[e.id]
                if(num["mark"]){return}
                markup = e
                num["mark"] = true
                Jogador[e.id] = true
                canva(e)
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
            }
        </script>
    </head>
    <body>
        <main>
            <div class="row">
                <canvas onclick="clecker(this)" class="bd" id="0" width="80" height="80"></canvas>
                <canvas onclick="clecker(this)" class="bd" id="1" width="80" height="80"></canvas>
                <canvas onclick="clecker(this)" class="bd" id="2" width="80" height="80"></canvas>
            </div>
            <div class="row">
                <canvas onclick="clecker(this)" class="bd" id="3" width="80" height="80"></canvas>
                <canvas onclick="clecker(this)" class="bd" id="4" width="80" height="80"></canvas>
                <canvas onclick="clecker(this)" class="bd" id="5" width="80" height="80"></canvas>
            </div>
            <div class="row">
                <canvas onclick="clecker(this)" class="bd" id="6" width="80" height="80"></canvas>
                <canvas onclick="clecker(this)" class="bd" id="7" width="80" height="80"></canvas>
                <canvas onclick="clecker(this)" class="bd" id="8" width="80" height="80"></canvas>
            </div>
        </main>
    </body>
</html>