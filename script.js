document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    window.scrollTo({
      top: target.offsetTop - 95,
      behavior: "smooth"
    });
  });
});


const formulario = document.querySelector('form');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const nome = document.querySelector('input[placeholder="Nome"]').value;
  const email = document.querySelector('input[placeholder="Email"]').value;
  const numero = document.querySelector('input[placeholder="Número"]').value;
  const assunto = document.querySelector('input[placeholder="Assunto"]').value;
  const mensagem = document.querySelector('textarea').value;

  
  const meuNumero = "5581998602600"; 

  const textoMensagem = `*Direto do Portfólio*
    
*Nome:* ${nome}
*Email:* ${email}
*WhatsApp:* ${numero}
*Assunto:* ${assunto}
*Mensagem:* ${mensagem}`;

  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${meuNumero}&text=${encodeURIComponent(textoMensagem)}`;

  window.open(linkWhatsApp, '_blank');
});