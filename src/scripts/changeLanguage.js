function toggleLanguage() {

    var checkbox = document.getElementById("switch")
    var json;

    if (checkbox.checked) {
        json = jsonEnglish;
    }
    else {
        json = jsonPortuguese;
    }
    document.getElementById("ola").innerHTML = json.ola + '<span class="text-color-main">' + json.name + '</span><br /><span>' + json.dev + '</span>'
    document.getElementById("sobre").innerHTML = json.sobre;
    document.getElementById("sobremim").innerHTML = json.sobremim;
    document.getElementById("descricao").innerHTML = json.descricao;
    document.getElementById("infoextra").innerHTML = json.infoextra;
    document.getElementById("curriculo").innerHTML = json.curriculo;
    document.getElementById("habilidades").innerHTML = json.habilidades;
    document.getElementById("contato").innerHTML = json.contato;
    document.getElementById("enviar").innerHTML = json.enviar;
    document.getElementById("assunto").innerHTML = json.assunto;
    document.getElementById("mesage").innerHTML = json.mesage;
    document.getElementById("lblLanguage1").style.color = json.colorlbl;
    document.getElementById("curriculo").href = json.hrefcurriculo;
}

var jsonPortuguese = {
    "name": "Lucas Viola",
    "ola": "Olá, meu nome é ",
    "dev": "Sou desenvolvedor Backend.",
    "sobre": "Saiba mais",
    "sobremim": "Sobre mim",
    "descricao": "Desenvolvedor de software apaixonado por tecnologia e ansioso para explorar o mundo.",
    "infoextra": "Gosto de me manter ativo com atividades físicas, viajar sempre que possivel.",
    "curriculo": "Currículo",
    "habilidades": "HABILIDADES",
    "contato": "Contato",
    "enviar": "Enviar",
    "assunto": "Assunto:",
    "mesage": "Mensagem:",
    "colorlbl": "grey",
    "hrefcurriculo": "assets/curriculo.pdf"
}

var jsonEnglish = {
    "name": "Lucas Viola",
    "ola": "Hello, my name is ",
    "dev": "I'm Backend Developer.",
    "sobre": "About me",
    "sobremim": "ABOUT ME",
    "descricao": "Passionate software developer eager to explore the world of technology.",
    "infoextra": "I enjoy staying active with physical activities and traveling whenever possible.",
    "curriculo": "Resume",
    "habilidades": "SKILLS",
    "contato": "Contact",
    "enviar": "Send",
    "assunto": "Subject:",
    "mesage": "Body:",
    "colorlbl": "#02aab0",
    "hrefcurriculo": "assets/curriculo.pdf"
}

function addHref()
{
    var enviar = document.getElementById("enviar");

    var assunto = document.getElementById("assuntoinput").value;

    var body = document.getElementById("messageinput").value;

    enviar.href = "mailto:lucasviola2011@gmail.com?subject="+ assunto + "&body=" + body;
}