// Script para renderizar o organograma
document.addEventListener('DOMContentLoaded', function() {
    const organogramaContainer = document.getElementById('organograma');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const closeButton = document.querySelector('.close-button');
    
    // Agrupar colaboradores por supervisor
    const colaboradoresPorSupervisor = {};
    
    colaboradores.forEach(colaborador => {
        if (!colaboradoresPorSupervisor[colaborador.supervisor]) {
            colaboradoresPorSupervisor[colaborador.supervisor] = [];
        }
        colaboradoresPorSupervisor[colaborador.supervisor].push(colaborador);
    });
    
    // Renderizar cada seção de supervisor
    Object.keys(colaboradoresPorSupervisor).forEach(supervisor => {
        // Criar seção do supervisor
        const supervisorSection = document.createElement('section');
        supervisorSection.className = 'supervisor-section';
        
        // Adicionar cabeçalho do supervisor
        const supervisorHeader = document.createElement('h2');
        supervisorHeader.className = 'supervisor-header';
        supervisorHeader.textContent = supervisor;
        supervisorSection.appendChild(supervisorHeader);
        
        // Criar grid de colaboradores
        const colaboradoresGrid = document.createElement('div');
        colaboradoresGrid.className = 'colaboradores-grid';
        
        // Adicionar cada colaborador ao grid
        colaboradoresPorSupervisor[supervisor].forEach((colaborador, index) => {
            const card = document.createElement('div');
            card.className = 'colaborador-card';
            
            // Imagem com fallback para placeholder se a imagem não existir
            const fotoContainer = document.createElement('div');
            fotoContainer.className = 'foto-container';
            
            const img = document.createElement('img');
            img.src = colaborador.imagem;
            img.alt = `Foto de ${colaborador.nome}`;
            img.onerror = function() {
                this.src = 'placeholder.jpg';
                this.onerror = null;
            };
            
            // Adicionar evento de clique para expandir a foto
            fotoContainer.appendChild(img);
            fotoContainer.addEventListener('click', function() {
                modalImg.src = img.src;
                modal.style.display = 'flex';
            });
            
            // Informações do colaborador
            const nome = document.createElement('div');
            nome.className = 'colaborador-nome';
            nome.textContent = colaborador.nome;
            
            const cargo = document.createElement('div');
            cargo.className = 'colaborador-cargo';
            cargo.textContent = colaborador.cargo;
            
            const telefone = document.createElement('div');
            telefone.className = 'colaborador-telefone';
            telefone.textContent = colaborador.telefone;
            
            const numero = document.createElement('div');
            numero.className = 'colaborador-numero';
            numero.textContent = `#${index + 1}`;
            
            // Montar o card
            card.appendChild(fotoContainer);
            card.appendChild(nome);
            card.appendChild(cargo);
            card.appendChild(telefone);
            card.appendChild(numero);
            
            // Adicionar o card ao grid
            colaboradoresGrid.appendChild(card);
        });
        
        // Adicionar grid à seção do supervisor
        supervisorSection.appendChild(colaboradoresGrid);
        
        // Adicionar seção do supervisor ao organograma
        organogramaContainer.appendChild(supervisorSection);
    });
    
    // Fechar o modal ao clicar no botão de fechar
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Fechar o modal ao clicar fora da imagem
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
