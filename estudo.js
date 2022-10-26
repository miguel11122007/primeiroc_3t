
function Soma(){
    let n1 = document.getElementById("v1").value;
    let n2 = document.getElementById("v2").value;
    let n3 = document.getElementById("v3").value;

    let r = (Number(n1)) + Number(n2) + Number(n3));
    
}
<body>
    <div class="calc">
        <span id="tatalGeral">Total:0,00</span><br>
        Capital: <input id="valor" type="tesxt"></br>
        Juros mensais: <input id="juros"type="text"><br>
        N. meses: <input id="meses"type="text"><br>
        <button onclick="mat()">enviar</button>

    </div>
</body>

