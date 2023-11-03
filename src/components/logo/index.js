export function logo(link, img, descricao) {
    return `
    <a href="${link}" target="_blank">
    <img src="${img}" class="logo" alt="${descricao}" />
    </a>
    `  
    }
