<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Velha</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">       
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <header>
        <h4>Escolha um modo de jogo</h4>
    </header>
    <main>
        
        <form action="game/index.php" method="get">
            <div class="form-check">
                <input class="form-check-input" type="radio" 
                name="mode" id="exampleRadios1" value="0" checked>
                <label class="form-check-label" for="exampleRadios1">Modo fácil</label>
            </div>
            <!-- ========================================================= -->
            <div class="form-check">
                <input class="form-check-input" type="radio" 
                name="mode" id="exampleRadios2" value="1">
                <label class="form-check-label" for="exampleRadios2">Modo difícil</label> 
            </div>
            <!-- ========================================================= -->
            <input class="btn btn-outline-info" 
            type="submit" value="Escolher esse modo">
        </form>
    </main>
</body>
</html>