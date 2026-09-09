function analisarLinks() {
  const input = document.getElementById('linkInput').value;
  const resultado = document.getElementById('resultado');

  // Limpa o link
  const dominio = input.toLowerCase()
   .replace('https://', '')
   .replace('http://', '')
   .replace('www.', '')
   .split('/')[0];

  // LISTA REDES SOCIAIS GLOBAIS
  const listaSeguros = [
    'google.com', 
    'facebook.com', 
    'youtube.com', 
    'instagram.com', 
    'tiktok.com', 
    'whatsapp.com',
    'twitter.com',
    'x.com',
    'linkedin.com',
    'snapchat.com',

    // M-PESA E-MOLA
    'mpesa.co.mz', 
    'm-pesa.co.mz', 
    'mpesa.com', 
    'm-pesa.com',
    'emola.co.mz',
    'm-emola.co.mz',

    // BANCOS DE MOÇAMBIQUE
    'bci.co.mz', 
    'millenniumbim.co.mz', 
    'standardbank.co.mz',
    'bim.co.mz',
    'fnb.co.mz', 
    'barclays.co.mz',
    'abcbank.co.mz',

    // OPERADORAS MZ
    'vodacom.co.mz', 
    'movitel.co.mz',
    'tmcel.co.mz',

    // SITES DE APOSTAS
    '888bet.co.mz',
    'betway.co.mz',
    'elefantebet.com',
    'elefantebet.co.mz',

    // LOJAS E GOVERNO
    'gov.mz',
    'olx.co.mz',
    'shoprite.co.mz'
  ];

  // LISTA DE GOLPES CONHECIDOS
  const listaGolpes = [
    'gooogle.com', 
    'faceboook.com', 
    'whatssap.com', // whatsapp falso
    'whatsappp.com',
    'instagraam.com', 
    'tiktokk.com',
    'youtubee.com',
    'mpesaa.co.mz' // m-pesa falso
  ];


  // VERIFICA SE É GOLPE
  if(listaGolpes.includes(dominio)){
    resultado.textContent = `❌ GOLPE: ${dominio} - Cuidado! Site falso`;
    resultado.className = 'vermelho';
    return;
  }

  // VERIFICA SE É SEGURO
  if(listaSeguros.includes(dominio)){
    resultado.textContent = `✅ SEGURO: ${dominio}`;
    resultado.className = 'verde';
    return;
  }

  // SE NÃO CONHECE
  resultado.textContent = `⚠️ DESCONHECIDO: ${dominio} - Tuahir - digite o link por favor`;
  resultado.className = 'amarelo';
}