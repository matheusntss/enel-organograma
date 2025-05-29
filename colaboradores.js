// Dados dos colaboradores
const colaboradores = [
  // Supervisor: Epaminondas da Rocha Cardoso
  {
    "nome": "ADILSON DA SILVEIRA COSTA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9149-7638",
    "imagem": "images/ADILSON.JPEG"
  },
  {
    "nome": "ADNA RUFINO DA SILVA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9136-3196",
    "imagem": "images/AdnaRufino.JPEG"
  },
  {
    "nome": "ADRIANO JANUARIO DE OLIVEIRA FILHO",
    "cargo": "Eletricista Júnior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9125-1252",
    "imagem": "images/ADRIANOJANUARIO.JPEG"
  },
  {
    "nome": "ANGELO LOPES DE MATOS",
    "cargo": "Eletricista Sênior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9128-7088",
    "imagem": "images/ANGELO.JPEG"
  },
  {
    "nome": "ANTONIO EVERTON SILVA NUNES",
    "cargo": "Eletricista Júnior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9110-2927",
    "imagem": "images/ANTONIO.JPEG"
  },
  {
    "nome": "CLAUDIENE SIMPLICIO ALENCAR",
    "cargo": "Eletricista Júnior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9143-3204",
    "imagem": "images/CLAUDIENE.JPEG"
  },
  {
    "nome": "CLEVERSON NASCIMENTO CANDIDO",
    "cargo": "Eletricista Júnior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9168-9116",
    "imagem": "images/CLEVERSON.JPEG"
  },
  {
    "nome": "ERMESON KAIQUE SILVA VIEIRA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9125-3188",
    "imagem": "images/Kaique.JPEG"
  },
  {
    "nome": "FELIPE GOMES DA ROCHA",
    "cargo": "Eletricista Pleno",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9158-1611",
    "imagem": "images/FELIPE.JPEG"
  },
  {
    "nome": "FELIPE MARTINS PIRES",
    "cargo": "Eletricista Sênior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9148-7188",
    "imagem": "images/FELIPE2.JPEG"
  },
  {
    "nome": "FRANCISCO ANTONIO MOREIRA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9154-5334",
    "imagem": "images/FRANCISCOANTONIO.JPEG"
  },
  {
    "nome": "FRANCISCO AUCELIO COSTA E SILVA",
    "cargo": "Eletricista Pleno",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9126-7331",
    "imagem": "images/AUCELIO.JPEG"
  },
  {
    "nome": "FRANCISCO EDVALDO FERNANDES FERREIRA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9152-8996",
    "imagem": "images/FRANCISCO.JPEG"
  },
  {
    "nome": "FRANCISCO ERICLAUDIO SILVA LOPES",
    "cargo": "Eletricista Sênior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9117-4213",
    "imagem": "images/FRANCISCO2.JPEG"
  },
  {
    "nome": "FRANCISCO FELIPE DE ANDRADE SILVA",
    "cargo": "Eletricista Sênior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "Sem número",
    "imagem": "images/FRANCISCO3.JPEG"
  },
  {
    "nome": "GILSON EVANGELISTA BARCA",
    "cargo": "Eletricista Sênior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 8170-3523",
    "imagem": "images/GILSONEVANGELISTA.JPEG"
  },
  {
    "nome": "GRACY ELLEN ALVES PEREIRA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9253-3808",
    "imagem": "images/GRACY-EPAMINONDAS.JPEG"
  },
  {
    "nome": "JEOVA MAGALHAES COSTA",
    "cargo": "Eletricista Pleno",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9151-9837",
    "imagem": "images/JEOVÁMAGALHÃES.JPEG"
  },
  {
    "nome": "JOSE AIRTON BRITO",
    "cargo": "Eletricista Pleno",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "Sem número",
    "imagem": "images/JOSE.JPEG"
  },
  {
    "nome": "JOSE FERNANDO DE SOUSA FERREIRA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "Sem número",
    "imagem": "images/JOSEFERNANDO.JPEG"
  },
  {
    "nome": "JOSE WILSON ARAUJO DA COSTA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9160-7531",
    "imagem": "images/WILSON.JPEG"
  },
  {
    "nome": "LUCAS DA SILVA ARAUJO",
    "cargo": "Eletricista Júnior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9158-3907",
    "imagem": "images/lucasdasilva.JPEG"
  },
  {
    "nome": "LUIZ MATHEUS SIPRIANO DA SILVA",
    "cargo": "Eletricista Pleno",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9134-9852",
    "imagem": "images/LUIZ.JPEG"
  },
  {
    "nome": "MAX BRENO BARBOSA",
    "cargo": "Eletricista Pleno",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "Sem número",
    "imagem": "images/MAXBRENO.JPEG"
  },
  {
    "nome": "SIMEAO FERREIRA CUNHA",
    "cargo": "Eletricista Pleno",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9149-3955",
    "imagem": "images/SIMEÃO.JPEG"
  },
  {
    "nome": "WANDERSON ALMEIDA DINIZ",
    "cargo": "Eletricista Sênior",
    "supervisor": "Epaminondas da Rocha Cardoso",
    "telefone": "85 9147-1373",
    "imagem": "images/VANDERSONDINIZ.JPEG"
  },
  
  // Supervisor: Ayrton Silva Ribeiro Rocha
  {
    "nome": "ADONIAS DO NASCIMENTO LAUREANO",
    "cargo": "Eletricista Sênior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9162-2979",
    "imagem": "images/aDONIAS.JPEG"
  },
  {
    "nome": "ALLAN KENNEDY DA COSTA MESQUITA",
    "cargo": "Eletricista Pleno",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9159-4609",
    "imagem": "images/ALLAN KENNEDY.JPEG"
  },
  {
    "nome": "ANA KESIA CARNEIRO RODRIGUES",
    "cargo": "Eletricista Júnior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9104-5468",
    "imagem": "images/ANA.JPEG"
  },
  {
    "nome": "ANTONIO MARCIO FERREIRA SOARES",
    "cargo": "Eletricista Júnior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "Sem número",
    "imagem": "images/MARCIO.JPEG"
  },
  {
    "nome": "BRENO DE LIMA FERRER",
    "cargo": "Eletricista Sênior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9149-5173",
    "imagem": "images/BRENO LIMA FERRER.JPEG"
  },
  {
    "nome": "BRUNO SALOMAO SANTOS SILVA",
    "cargo": "Eletricista Pleno",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "Sem número",
    "imagem": "images/BRUNO SALOMÃO.JPEG"
  },
  {
    "nome": "DAVID DA SILVA NUNES",
    "cargo": "Eletricista Sênior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "Sem número",
    "imagem": "images/DAVID NUNES.JPEG"
  },
  {
    "nome": "FRANCISCO CARLOS DAMASCENO DA SILVA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9150-5850",
    "imagem": "images/FRANCISCO4.JPEG"
  },
  {
    "nome": "FRANCISCO ERINALDO MARREIRO CLEMENTE",
    "cargo": "Eletricista Pleno",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9152-2459",
    "imagem": "images/ERINALDO.JPEG"
  },
  {
    "nome": "FRANCISCO JONAS DE OLIVEIRA SILVA",
    "cargo": "Eletricista Sênior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9158-1383",
    "imagem": "images/JONAS.JPEG"
  },
  {
    "nome": "FRANCISCO JORGE ROCHA JUNIOR",
    "cargo": "Eletricista Júnior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9131-5355",
    "imagem": "images/FRANCISCO5.JPEG"
  },
  {
    "nome": "FRANCISCO ODERLAN SALES CARNEIRO",
    "cargo": "Eletricista Júnior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9137-9109",
    "imagem": "images/ODERLAN.JPEG"
  },
  {
    "nome": "FRANCISCO VANDESON DE SOUSA",
    "cargo": "Eletricista Pleno",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9134-9750",
    "imagem": "images/VANDERSON.JPEG"
  },
  {
    "nome": "FRANKLIN VIDAL DA SILVA",
    "cargo": "Eletricista Pleno",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9143-8398",
    "imagem": "images/FRANKLIN.JPEG"
  },
  {
    "nome": "ISADORA RODRIGUES DE MELO BEVILAQUA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9151-1542",
    "imagem": "images/ISADORA.JPEG"
  },
  {
    "nome": "ISRAEL BATISTA BRAZ",
    "cargo": "Eletricista Júnior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9143-6871",
    "imagem": "images/Israel.JPEG"
  },
  {
    "nome": "JEANINE DA SILVA DOURADO LOPES",
    "cargo": "Eletricista Júnior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9167-3343",
    "imagem": "images/Jeanine.JPEG"
  },
  {
    "nome": "JOAO FELIPE FERNANDES DOS SANTOS",
    "cargo": "Eletricista Júnior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9153-3182",
    "imagem": "images/JOÃO FELIPE - AYRTON.JPEG"
  },
  {
    "nome": "JOAO HELENO GOMES LOPES",
    "cargo": "Eletricista Júnior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9828-2015",
    "imagem": "images/João Heleno.JPEG"
  },
  {
    "nome": "JONAS CLEITON MARTINS DE OLIVEIRA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9151-7715",
    "imagem": "images/JONAS CLEITON - AYRTON.JPEG"
  },
  {
    "nome": "JOSE MATHEUS PINHEIRO",
    "cargo": "Eletricista Júnior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9152-5203",
    "imagem": "images/JOSE2.JPEG"
  },
  {
    "nome": "LUCAS MOURA ALVES",
    "cargo": "Eletricista Júnior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9115-7149",
    "imagem": "images/LUCAS - AYRTON.JPEG"
  },
  {
    "nome": "PEDRO SAMUEL SOARES LOPES",
    "cargo": "Eletricista Júnior",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9191-7737",
    "imagem": "images/Pedro.JPEG"
  },
  {
    "nome": "RICARDO DE SOUSA SANTOS",
    "cargo": "Eletricista Pleno",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9158-9186",
    "imagem": "images/RICARDO - AYRTON.JPEG"
  },
  {
    "nome": "YALE ACIOLI OLIVEIRA",
    "cargo": "Eletricista Pleno",
    "supervisor": "Ayrton Silva Ribeiro Rocha",
    "telefone": "85 9165-7789",
    "imagem": "images/YALE.JPEG"
  },
  
  // Supervisor: José Gleidison Monteiro da Silva
  {
    "nome": "ADRIANO LAURIANO DA SILVA",
    "cargo": "Eletricista Júnior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "Sem número",
    "imagem": "images/ADRIANO.JPEG"
  },
  {
    "nome": "ALISSON SILVANO DE SOUSA",
    "cargo": "Eletricista Júnior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9155-0466",
    "imagem": "images/ALISSON.JPEG"
  },
  {
    "nome": "AMANDA BRENA LIMA DOS REIS",
    "cargo": "Eletricista Júnior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9133-8829",
    "imagem": "images/AMANDA-GLEIDISON.JPEG"
  },
  {
    "nome": "ANTONIO LUCIANO OLIVEIRA DE SOUSA",
    "cargo": "Eletricista Pleno",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9133-1606",
    "imagem": "images/ANTONIOLUCIANO.JPEG"
  },
  {
    "nome": "ANTONIO MARDONIO SILVEIRA FERREIRA",
    "cargo": "Eletricista Júnior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9147-4463",
    "imagem": "images/MARDONIO-GLEIDISON.JPEG"
  },
  {
    "nome": "ANTONIO SILVIO PAULINO SALES",
    "cargo": "Eletricista Pleno",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9105-1660",
    "imagem": "images/SILVIO-GLEIDISON.JPEG"
  },
  {
    "nome": "CARLOS ALEXANDRE MENEZES GOES",
    "cargo": "Eletricista Júnior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9109-6774",
    "imagem": "images/CARLOS.JPEG"
  },
  {
    "nome": "FRANCISCO ALLEF ALVES MARTINS",
    "cargo": "Eletricista Pleno",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9124-6017",
    "imagem": "images/FRANCISCOALLEF.JPEG"
  },
  {
    "nome": "FRANCISCO CORDEIRO SANTANA DE BRITO",
    "cargo": "Eletricista Júnior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9165-1828",
    "imagem": "images/FRANCISCOCORDEIRO-GLEIDISON.JPEG"
  },
  {
    "nome": "FRANCISCO JOHNYS DE SOUSA",
    "cargo": "Eletricista Pleno",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9134-8575",
    "imagem": "images/JOHNYS-GLEIDISON.JPEG"
  },
  {
    "nome": "FRANCISCO LIOMAR ALMEIDA PIRES",
    "cargo": "Eletricista Júnior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9151-8712",
    "imagem": "images/FRANCISCOLIOMAR.JPEG"
  },
  {
    "nome": "FRANCISCO RANDISON ANDRADE TEODORO",
    "cargo": "Eletricista Sênior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9158-5486",
    "imagem": "images/FRANCISCO6.JPEG"
  },
  {
    "nome": "FREDERICO OLIVEIRA LOPES DE MOURA",
    "cargo": "Eletricista Júnior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9131-7107",
    "imagem": "images/FREDERICO-GLEIDISON.JPEG"
  },
  {
    "nome": "GLEICIANO COSTA MATIAS",
    "cargo": "Eletricista Sênior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9136-3889",
    "imagem": "images/GLEICIANO-GLEIDISON.JPEG"
  },
  {
    "nome": "HILQUIAS FREIRE BARBOSA",
    "cargo": "Eletricista Sênior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9159-5334",
    "imagem": "images/HILQUIAS-GLEIDISON.JPEG"
  },
  {
    "nome": "ILDO SILVA COSTA CAVALCANTE",
    "cargo": "Eletricista Júnior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9154-3741",
    "imagem": "images/ILDO.JPEG"
  },
  {
    "nome": "JANETE PEREIRA DA SILVA",
    "cargo": "Eletricista Sênior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9150-5215",
    "imagem": "images/JANETEPEREIRA.JPEG"
  },
  {
    "nome": "JOSE ADAHIL TAVARES DA SILVA",
    "cargo": "Eletricista Pleno",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9157-0775",
    "imagem": "images/ADAHIL.JPEG"
  },
  {
    "nome": "JOSE ARRILSON SILVEIRA TAVARES",
    "cargo": "Eletricista Júnior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9153-7916",
    "imagem": "images/ARRILSON.JPEG"
  },
  {
    "nome": "LINDEMBERG DA SILVA DE SOUSA",
    "cargo": "Eletricista Sênior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9135-4277",
    "imagem": "images/LINDEMBERG.JPEG"
  },
  {
    "nome": "MAGNO TARCISIO CLEMENTE NASCIMENTO",
    "cargo": "Eletricista Pleno",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9157-1721",
    "imagem": "images/MAGNOTARCISIO.JPEG"
  },
  {
    "nome": "MAILSON JOSE DA SILVA PEREIRA",
    "cargo": "Eletricista Sênior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "Sem número",
    "imagem": "images/MAILSON-GLEIDISON.JPEG"
  },
  {
    "nome": "MARCOS ANTONIO BRITO DE ARAUJO",
    "cargo": "Eletricista Pleno",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9135-3278",
    "imagem": "images/MARCOSBRITO-GLEIDISON.JPEG"
  },
  {
    "nome": "MARLISSON ALAN COELHO VIANA",
    "cargo": "Eletricista Júnior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9168-0091",
    "imagem": "images/MARLISSON.JPEG"
  },
  {
    "nome": "MATEUS PATRICIO TELES",
    "cargo": "Eletricista Júnior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9149-2307",
    "imagem": "images/MATHEUSPATRICIO-GLEIDISON.JPEG"
  },
  {
    "nome": "NAILSON MATIAS DA SILVA",
    "cargo": "Eletricista Júnior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9106-4598",
    "imagem": "images/NAILSON-GLEIDISON.JPEG"
  },
  {
    "nome": "ROBERTO EVANGELISTA DE ALENCAR",
    "cargo": "Eletricista Júnior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9156-8645",
    "imagem": "images/ROBERTOEVANGELISTA-GLEIDISON.JPEG"
  },
  {
    "nome": "RODRIGO FERREIRA DA CRUZ",
    "cargo": "Eletricista Sênior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9135-2955",
    "imagem": "images/RODRIGOCRUZ-GLEIDISON.JPEG"
  },
  {
    "nome": "WELTON CARVALHO COSTA",
    "cargo": "Eletricista Júnior",
    "supervisor": "José Gleidison Monteiro da Silva",
    "telefone": "85 9156-3225",
    "imagem": "images/WELTON.JPEG"
  },
  
  // Supervisor: Antônio Flávio Juvêncio de Souza
  {
    "nome": "ALEXANDRE PINTO MIRANDA",
    "cargo": "Eletricista Pleno",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9953-8028",
    "imagem": "images/Alexandre.JPEG"
  },
  {
    "nome": "ANACLETO PEREIRA NEVES NETO",
    "cargo": "Eletricista Pleno",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9154-8563",
    "imagem": "images/ANACLETO.JPEG"
  },
  {
    "nome": "ANTONIO EVERARDO HENRIQUE DA SILVA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-4389",
    "imagem": "images/EVERARDO.JPEG"
  },
  {
    "nome": "CAIO BARBOZA DE OLIVEIRA",
    "cargo": "Eletricista Pleno",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9144-2320",
    "imagem": "images/CAIO.JPEG"
  },
  {
    "nome": "CARLOS CLAYTON DE LIMA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9105-2803",
    "imagem": "images/CARLOSCLEITON.JPEG"
  },
  {
    "nome": "CHRISTIAN MUNIZ DE ALMEIDA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9100-9259",
    "imagem": "images/CHRISTIANMUNIZ.JPEG"
  },
  {
    "nome": "DAVID DOS REIS OLIVEIRA",
    "cargo": "Eletricista Pleno",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9152-1520",
    "imagem": "images/DAVIDDOSREIS.JPEG"
  },
  {
    "nome": "EDNARDO FERREIRA SOARES",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-3097",
    "imagem": "images/EDNARDO.JPEG"
  },
  {
    "nome": "ELIS REGE SOUSA SILVA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-9857",
    "imagem": "images/ELISREGE.JPEG"
  },
  {
    "nome": "FELIPE EPAMINONDAS PIRES",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9152-1520",
    "imagem": "images/FELIPENONDAS.JPEG"
  },
  {
    "nome": "FERNANDO HENRIQUE SOUSA SILVA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-3097",
    "imagem": "images/FERNANDO.JPEG"
  },
  {
    "nome": "HENRIQUE GOMES FERREIRA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-9857",
    "imagem": "images/HENRIQUE-FLAVIO.JPEG"
  },
  {
    "nome": "JAQUELINE ALVES PEREIRA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-3097",
    "imagem": "images/JAQUELINE.JPEG"
  },
  {
    "nome": "JEFFERSON SOUSA SILVA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-9857",
    "imagem": "images/JEFFERSON.JPEG"
  },
  {
    "nome": "JOAO PAULO FERREIRA SOARES",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-3097",
    "imagem": "images/JOÃOPAULO.JPEG"
  },
  {
    "nome": "JOEL FERREIRA SOUSA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-9857",
    "imagem": "images/JOEL.JPEG"
  },
  {
    "nome": "JULIO CESAR SILVA SANTOS",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-3097",
    "imagem": "images/Julio.JPEG"
  },
  {
    "nome": "KALLEBIURY OLIVEIRA SOUSA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-9857",
    "imagem": "images/KALLEBIURY.JPEG"
  },
  {
    "nome": "MARILSON GOIS FERREIRA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-3097",
    "imagem": "images/MARILSONGOIS.JPEG"
  },
  {
    "nome": "OZIAS MAIA FERREIRA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-9857",
    "imagem": "images/OZIASMAIA.JPEG"
  },
  {
    "nome": "PEDRO HENRIQUE SILVA SANTOS",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-3097",
    "imagem": "images/PEDRO.JPEG"
  },
  {
    "nome": "RAFAEL BATISTA SOUSA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-9857",
    "imagem": "images/RAFAELBATISTA.JPEG"
  },
  {
    "nome": "RODRIGO MARCIO FERREIRA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-3097",
    "imagem": "images/RODRIGOMARCIO.JPEG"
  },
  {
    "nome": "SAULO FERREIRA SILVA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-9857",
    "imagem": "images/SAULO.JPEG"
  },
  {
    "nome": "WEDLEY BORGES SOUSA",
    "cargo": "Eletricista Júnior",
    "supervisor": "Antônio Flávio Juvêncio de Souza",
    "telefone": "85 9151-3097",
    "imagem": "images/WEDLEYBORGES.JPEG"
  }
];
