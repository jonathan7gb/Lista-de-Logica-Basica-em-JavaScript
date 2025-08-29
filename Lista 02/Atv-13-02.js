function retornarDiferencaData(data01, data02){
    // Extrai dia, mês e ano
    var dia1 = parseInt(data01[0] + data01[1]);
    var mes1 = parseInt(data01[3] + data01[4]);
    var ano1 = parseInt(data01[6] + data01[7] + data01[8] + data01[9]);
    var dia2 = parseInt(data02[0] + data02[1]);
    var mes2 = parseInt(data02[3] + data02[4]);
    var ano2 = parseInt(data02[6] + data02[7] + data02[8] + data02[9]);


    if (ano1 > ano2 || (ano1 === ano2 && mes1 > mes2) || (ano1 === ano2 && mes1 === mes2 && dia1 > dia2)) {
        var tempDia = dia1, tempMes = mes1, tempAno = ano1;
        dia1 = dia2; mes1 = mes2; ano2 = tempAno;
        dia2 = tempDia; mes2 = tempMes; ano2 = tempAno;
    }

    var anos = ano2 - ano1;
    var meses = mes2 - mes1;
    var dias = dia2 - dia1;

    if (dias < 0) {
        meses--;
        dias += 30; 
    }
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    var totalDias = anos * 365 + meses * 30 + dias;
    var totalMeses = anos * 12 + meses;

    console.log(`Ano 01: ${ano1} | Ano 02: ${ano2} | Diferença: ${anos}`);
    console.log(`-> ${totalDias} dia(s) de diferença`);
    console.log(`-> ${totalMeses} mes(es) e ${dias} dia(s) de diferença`);
    console.log(`-> ${anos} ano(s), ${meses} mes(es) e ${dias} dia(s) de diferença`);
}

retornarDiferencaData("06/07/2007", "12/12/2007")